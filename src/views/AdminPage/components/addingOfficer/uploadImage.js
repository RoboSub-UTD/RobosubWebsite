import React from 'react';
import '../../styles/UploadImage.css'; // for modal styles
import GetImage from './GetImage';

function UploadImage({ setIsUploading,setMainImg, crop,setCrop,imgSrc, setImgSrc,dimImg,setDimImg,setIsLoading }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {<GetImage setIsUploading={setIsUploading} 
                   setMainImg={setMainImg} 
                   crop={crop}
                   setCrop={setCrop}
                   imgSrc={imgSrc}
                   setImgSrc={setImgSrc}
                   dimImg={dimImg}
                   setDimImg={setDimImg}
                   setIsLoading={setIsLoading}
                   />
                   }
      </div>
    </div>
  );
}

export default UploadImage;
