import React,{useState} from 'react'
import UploadImage from './uploadImage'
function AddPopUp({name,setName,title,setTitle, addOfficer,setIsAdding,Img,setMainImg}){
    const [IsUploading,setIsUpLoading] = useState(false)
    return(
        <div>
            {IsUploading && (<UploadImage setIsUploading={setIsUpLoading} setMainImg={setMainImg}/>)}
            <div className="popup">
                <div className="popup-inner">
                    <h1>Adding Officer</h1>
                    <div className='addingPopUp'>
                        <div className='OfficersImage'>
                            {Img ? 
                            <>
                                <img src={Img} alt="profile-photo"/>
                            </>:
                            <>
                                <button onClick={()=>setIsUpLoading(true)} className='Add'>
                                    Upload Image
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
                    <button onClick={() => addOfficer()}className='Add'>Add</button>
                    <button className="Delete" onClick={() => setIsAdding(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default AddPopUp