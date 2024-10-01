import React,{useState} from 'react'
import UploadImage from './uploadImage'
function AddPopUp({name,setName,title,setTitle, addOfficer,setIsAdding,Img,setMainImg,isEdit}){
    const [IsUploading,setIsUpLoading] = useState(false)
    const [crop, setCrop] = useState({
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50
      });
    const [imgSrc, setImgSrc] = useState('');
    const [dimImg,setDimImg] = useState('')
    return(
        <div>
            {IsUploading && (<UploadImage 
                                setIsUploading={setIsUpLoading} 
                                setMainImg={setMainImg}
                                crop={crop}
                                setCrop={setCrop}
                                imgSrc={imgSrc}
                                setImgSrc={setImgSrc}
                                setDimImg={setDimImg}
                                dimImg={dimImg}
                                />)}
            <div className="popup">
                <div className="popup-inner">
                    {isEdit ? <h1>Editing Officer</h1> : <h1>Adding Officer</h1>}
                    <div className='addingPopUp'>
                        <div className='OfficersImage'>
                            {Img ? 
                            <>
                                <img onClick={()=>setIsUpLoading(true)} src={Img} alt="profile-photo"/>
                            </>:
                            <>
                                <button onClick={()=>setIsUpLoading(true)} className='Add'>
                                    { isEdit ? <>Upload new Image</> : <>Upload Image</>}
                                </button>
                            </>}

                        </div>
                        <div className='OfficersFields'>
                            <input onChange={(e) => setName(e.target.value)} 
                                   placeholder='Name' 
                                   type='text'
                                   value={name}
                            ></input>
                            <input onChange={(e) => setTitle(e.target.value)} 
                                   placeholder='Title' 
                                   type='text'
                                   value={title}
                            ></input>
                        </div>
                </div>
                    <button onClick={() => addOfficer()}className='Add'>
                        {isEdit ? <>Edit</> : <>Add</>}
                    </button>
                    <button className="Delete" onClick={() => {
                        setIsAdding(false);
                        setName("");
                        setTitle("");
                        setMainImg(null);
                        }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default AddPopUp