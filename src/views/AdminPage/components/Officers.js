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
    doc,
    updateDoc
} from 'firebase/firestore'
import AddPopUp from './addingOfficer/AddPopUp';
import Loading from '../../univeralComponents/loading';
import IsDeleting from './isDeleting';



function OffciersAdmin(){
    const [OfficersArr, setOfficersArr] = useState([]);
    const [filteredOfficers, setFilteredOfficers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isAdding, setIsAdding] = useState(false)
    const [isLoading,setIsLoading] = useState("")
    const [isEditing, setIsEditing] = useState(false); 
    const [isDeleting,setIsDeleting] = useState(null)
    const [currentOfficer, setCurrentOfficer] = useState(null); 
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
    useEffect(() => {
        setFilteredOfficers(
            OfficersArr.filter(officer =>
                officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                officer.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, OfficersArr]);
    
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
            return -1; 
        }
    
        // Convert base64 image to File object if it's in base64 format
        let fileToUpload = mainImage;
        if (typeof mainImage === 'string') {
            fileToUpload = base64ToFile(mainImage, 'tempFile'); // Use a temporary name for conversion
        }
    
        // Generate a unique ID using the current timestamp
        const uniqueId = new Date().getTime(); // Get the current timestamp in milliseconds
        const imageFileName = `image_${uniqueId}.jpg`; // Create a unique filename
    
        // Create a storage reference using the unique filename
        const storageRef = ref(storage, `images/officers/${imageFileName}`);
    
        try {
            // Upload the file to Firebase Storage
            const uploadTaskSnapshot = await uploadBytes(storageRef, fileToUpload);
    
            // Get the image download URL
            const url = await getDownloadURL(uploadTaskSnapshot.ref);
            console.log("Uploaded image URL:", url);
            return url; // Return the download URL for use
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Error uploading image:", error);
            return -1; // Return -1 if there's an error
        }
    };

    const deleteOfficer = async(Dofficer) =>{
        setIsLoading("deleting Officer")
        await deleteDoc(doc(db,"officers",Dofficer.id));

        if (Dofficer.imageURL) {
            const imageRef = ref(storage, Dofficer.imageURL); // Create a reference to the image
            await deleteObject(imageRef); // Delete the image
        }
        setOfficersArr(OfficersArr.filter(officer => officer.id !== Dofficer.id))
        setIsLoading("")
        setIsDeleting(null)
    }
    const clearFields = () => {
        setName('');
        setTitle('');
        setMainImg(null);
        setIsAdding(false);
        setIsEditing(false);
        setCurrentOfficer(null);
        setIsLoading("");
    };
    const editOfficer = (officer) => {
        setIsEditing(true);
        setCurrentOfficer(officer);
        setName(officer.name);
        setTitle(officer.title);
        setMainImg(null); 
    };

    const updateOfficer = async () => {
        if (name.trim() && title.trim()) {
            setIsLoading("Updating officer");
            let imageURL = currentOfficer.imageURL; // Use the old image if not updated
            if (mainImage) {
                if (imageURL) {
                    const imageRef = ref(storage, imageURL); // Create a reference to the image
                    await deleteObject(imageRef); // Delete the image
                }
                imageURL = await handleUpload();
                if (imageURL === -1) {
                    return;
                }
            }

            const officerDocRef = doc(db, "officers", currentOfficer.id);
            await updateDoc(officerDocRef, {
                name: name,
                title: title,
                imageURL: imageURL
            });

            setOfficersArr(OfficersArr.map(off => (off.id === currentOfficer.id ? { ...off, name: name, title: title, imageURL: imageURL } : off)));
            clearFields();
        }
    };

    return(
        <div className='OfficersAdmin'>
            <div className='header'>
                <h1 >Officers</h1>
                <button onClick={() => setIsAdding(true)} className="Add">Add</button>
            </div>
            <input
                type="text"
                placeholder="Search for officers by name or title..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="searchBar"
            />
            
            {isDeleting && <IsDeleting officer={isDeleting} onDeleteConfirm={deleteOfficer} onCancel={setIsDeleting}/>}
            
            {/* POP UP FOR ADDING OFFICERS */}
            {isAdding && 
            <AddPopUp name={name} 
                      setName={setName}
                      title={title} 
                      setTitle={setTitle}
                      addOfficer={addOfficer} 
                      setIsAdding={setIsAdding}
                      Img={mainImage}
                      setMainImg={setMainImg}
                      setIsLoading={setIsLoading}
                      isEdit={false}
                      />

            
           }
         {isEditing && (
                <AddPopUp
                    name={name}
                    setName={setName}
                    title={title}
                    setTitle={setTitle}
                    addOfficer={updateOfficer} // Use updateOfficer instead of addOfficer
                    setIsAdding={setIsEditing} // Close editing popup
                    Img={mainImage}
                    setMainImg={setMainImg}
                    setIsLoading={setIsLoading}
                    isEdit={true}
                />
            )}
            
            {/* ALL THE OFFICERS */}
            {isLoading && 
            <>
                <Loading message={isLoading}/>
            </>
            }

            <div className='Officers'>
                {filteredOfficers.map(off => (
                    <div  key={off.id} className='IndOfficer'>
                        <Officer  Img={off.imageURL} Name={off.name} Title={off.title} id={off.id}/>
                        <button className='EditButton' onClick={() => editOfficer(
                            off
                            )}>Edit</button>
                        <button className="Delete" onClick={()=> 
                            {setIsDeleting(off);
                        }}>Delete</button> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OffciersAdmin