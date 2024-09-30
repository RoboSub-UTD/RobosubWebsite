import React, {useEffect, useState} from 'react'
import { ref, uploadBytes, getDownloadURL,deleteObject } from 'firebase/storage';
import Officer from '../../univeralComponents/officer';
import '../styles/Officers.css'
import {db,storage} from '../../Firebase'


import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'
import AddPopUp from './addingOfficer/AddPopUp';
import Loading from '../../univeralComponents/loading';



function OffciersAdmin(){
    const [OfficersArr, setOfficersArr] = useState([]);
    const [isAdding, setIsAdding] = useState(false)
    const [isLoading,setIsLoading] = useState("")
    const [name,setName] = useState("")
    const [title, setTitle] = useState("")
    const [mainImage, setMainImg] = useState(null)

    useEffect(() => {
        const fetchAllOfficers = async() => {
            setIsLoading("Fetching Officers")
            const querySnapshot = await getDocs(collection(db,"officers"));
            const taskArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setOfficersArr(taskArray)
            setIsLoading("");
        }
        fetchAllOfficers();
    },[])
    const addOfficer = async () => {
        if (name.trim() && title.trim() && mainImage) {
            setIsLoading("Uploading officer")
            const imageURL = await handleUpload();
            // If imageURL is not returned or there's an error during upload
            if (imageURL === -1) {
                return;
            }
    
            // Add the officer's data (including imageURL) to Firestore
            const docRef = await addDoc(collection(db, "officers"), {
                name: name,
                title: title,
                imageURL: imageURL
            });
    
            // Update the local state with the new officer
            setOfficersArr([...OfficersArr, { id: docRef.id, name: name, title: title, imageURL: imageURL }]);
    
            // Clear the input fields
            setName('');
            setTitle('');
            setMainImg(null); // Clear the image field
            setIsAdding(false);
            setIsLoading("");
        }
    };
    const base64ToFile = (base64String, fileName) => {
        const arr = base64String.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
    
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
    
        return new File([u8arr], fileName, { type: mime });
    };
    const handleUpload = async () => {
        if (!mainImage) {
            console.log("mainImage is undefined or null");
            alert("No image selected for upload.");
            return -1; // Return -1 to indicate failure
        }
    
        // Convert base64 image to File object if it's in base64 format
        let fileToUpload = mainImage;
        if (typeof mainImage === 'string') { // Assuming mainImage is a base64 string
            fileToUpload = base64ToFile(mainImage, name.trim().replaceAll(" ", "") + title.trim().replaceAll(" ","")); // Use a suitable filename
        }
    
        // Create a storage reference
        const storageRef = ref(storage, `images/${fileToUpload.name}`);
    
        try {
            // Upload the file to Firebase Storage
            const uploadTaskSnapshot = await uploadBytes(storageRef, fileToUpload);
    
            // Get the image download URL
            const url = await getDownloadURL(uploadTaskSnapshot.ref);
            console.log("Uploaded image URL:", url);
            return url; // Return the download URL for use
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("There was an error uploading the image.");
            return -1; // Return -1 if there's an error
        }
    };

    const deleteOfficer = async(id,imagePath) =>{
        setIsLoading("deleting Officer")
        await deleteDoc(doc(db,"officers",id));

        if (imagePath) {
            const imageRef = ref(storage, imagePath); // Create a reference to the image
            await deleteObject(imageRef); // Delete the image
        }
        setOfficersArr(OfficersArr.filter(officer => officer.id !== id))
        setIsLoading("")
    }

    return(
        <div className='OfficersAdmin'>
            <div className='header'>
                <h1 >Officers</h1>
                <button onClick={() => setIsAdding(true)} className="Add">Add</button>
            </div>
            {/* POP UP FOR ADDING OFFICERS */}
            {isAdding && (
                <>
            <AddPopUp name={name} 
                      setName={setName}
                      title={title} 
                      setTitle={setTitle}
                      addOfficer={addOfficer} 
                      setIsAdding={setIsAdding}
                      Img={mainImage}
                      setMainImg={setMainImg}
                      setIsLoading={setIsLoading}
                      />
            </>
            )
           }
            
            {/* ALL THE OFFICERS */}
            {isLoading && 
            <>
                <Loading message={isLoading}/>
            </>
            }

            <div className='Officers'>
                {OfficersArr.map(off => (
                    <div className='IndOfficer'>
                        <Officer key={off.id} Img={off.imageURL} Name={off.name} Title={off.title} id={off.id}/>
                        <button className="Delete" onClick={()=> 
                            deleteOfficer(
                                off.id, 
                                "images/" + off.name.replaceAll(" ","") + off.title.replaceAll(" ","")     
                        )}>Delete</button>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OffciersAdmin