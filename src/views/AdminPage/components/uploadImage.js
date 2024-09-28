import React from 'react';
import '../styles/UploadImage.css'; // for modal styles
import GetImage from './GetImage';

function UploadImage({ setIsUploading,setMainImg }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {<GetImage setIsUploading={setIsUploading} setMainImg={setMainImg}/>}
      </div>
    </div>
  );
}

export default UploadImage;
