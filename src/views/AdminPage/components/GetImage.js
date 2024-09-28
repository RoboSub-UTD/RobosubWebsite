import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function GetImage({ setIsUploading, setMainImg }) {
  const [imgSrc, setImgSrc] = useState('');
  const imgRef = useRef(null);
  const [dimImg, setDimImg] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50
  });
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
    const ctx = canvas.getContext('2d');
    const scaleX = dimImg.naturalWidth / imgRef.current.width;
    const scaleY = dimImg.naturalHeight / imgRef.current.height;

    const cropWidth = crop.width * scaleX;
    const cropHeight = crop.height * scaleY;
    const offsetX = crop.x * scaleX;
    const offsetY = crop.y * scaleY;

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      imgRef.current,
      offsetX,
      offsetY,
      cropWidth,
      cropHeight,
      0,
      0,
      crop.width,
      crop.height
    );
  };

  const getImageFromCanvas = () => {
    const canvas = canvasRef.current;
    setMainImg(canvas.toDataURL('image/png')); // Pass the cropped image to the parent component
    setIsUploading(false);
  };

  return (
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
        <button className="Add" onClick={() => { drawImage(); getImageFromCanvas(); }}>Add</button>
      </>}
      
      <button onClick={() => setIsUploading(false)} className='Delete'>Cancel</button>
    </div>
  );
}

export default GetImage;
