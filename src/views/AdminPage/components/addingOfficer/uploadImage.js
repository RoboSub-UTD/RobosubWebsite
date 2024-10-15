import React,{useRef} from 'react';
import '../../styles/UploadImage.css'; // for modal styles
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function UploadImage({ setIsUploading,setMainImg, crop,setCrop,imgSrc, setImgSrc,dimImg,setDimImg}) {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setDimImg(img);
          setImgSrc(reader.result);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const drawImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
        console.error("Canvas is not available yet.");
        return; // Prevent further execution if canvas is not available
      }
    const ctx = canvas.getContext('2d');
    const scaleX = dimImg.naturalWidth / imgRef.current.width;
    const scaleY = dimImg.naturalHeight / imgRef.current.height;
  
    // Set canvas size to match the size of the cropped area at full resolution
    const cropWidth = crop.width * scaleX;
    const cropHeight = crop.height * scaleY;
  
    // Resize the canvas to match the cropped image size
    canvas.width = cropWidth;
    canvas.height = cropHeight;
  
    const offsetX = crop.x * scaleX;
    const offsetY = crop.y * scaleY;
  
    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw the image cropped and scaled at full resolution
    ctx.drawImage(
      imgRef.current,
      offsetX,
      offsetY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth, // Draw to full size
      cropHeight
    );
  };

  const getImageFromCanvas = () => {
    const canvas = canvasRef.current;
    setMainImg(canvas.toDataURL('image/png',0.7)); // Pass the cropped image to the parent component
    setIsUploading(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
      <div className="App">
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imgSrc && (
        <div>
          <h2>Uploaded Image:</h2>
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              alt="Uploaded"
              style={{ maxWidth: '500px', maxHeight: '500px' }}
            />
          </ReactCrop>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={crop.width}
        height={crop.height}
        style={{ display: 'none' }} // Hide the canvas if you don't want it visible
      ></canvas>
      {imgSrc && 
      <>
        <button className="Add" onClick={() => { 
            drawImage(); 
            getImageFromCanvas(); 
            }}>Add</button>
      </>}
      
      <button onClick={() => {
        setIsUploading(false)
        setImgSrc('')
        setCrop({
            unit: '%', // Can be 'px' or '%'
            x: 25,
            y: 25,
            width: 50,
            height: 50
          })
        
        }} className='Delete'>Cancel</button>
    </div>
      </div>
    </div>
  );
}

export default UploadImage;
