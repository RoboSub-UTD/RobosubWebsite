import React, { useEffect, useState } from 'react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../Firebase';
import Officer from '../../univeralComponents/officer';
import AddPopUp from './addingOfficer/AddPopUp';
import Loading from './loading';
import '../styles/Officers.css';

function OfficersAdmin() {
    const [officersArr, setOfficersArr] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isLoading, setIsLoading] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [mainImage, setMainImg] = useState(null);

    useEffect(() => {
        const fetchAllOfficers = async () => {
            setIsLoading('Fetching Officers');
            const querySnapshot = await getDocs(collection(db, 'officers'));
            const officersArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setOfficersArr(officersArray);
            setIsLoading('');
        };
        fetchAllOfficers();
    }, []);

    const addOfficer = async () => {
        if (name.trim() && title.trim() && mainImage) {
            setIsLoading('Uploading officer');
            const imageURL = await handleUpload();
            if (imageURL === -1) return;

            const docRef = await addDoc(collection(db, 'officers'), {
                name,
                title,
                imageURL
            });

            setOfficersArr([...officersArr, { id: docRef.id, name, title, imageURL }]);
            clearInputs();
        }
    };

    const clearInputs = () => {
        setName('');
        setTitle('');
        setMainImg(null);
        setIsAdding(false);
        setIsLoading('');
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
            alert('No image selected for upload.');
            return -1; 
        }

        let fileToUpload = mainImage;
        if (typeof mainImage === 'string') {
            fileToUpload = base64ToFile(mainImage, name.trim().replaceAll(' ', '') + title.trim().replaceAll(' ', ''));
        }

        const storageRef = ref(storage, `images/${fileToUpload.name}`);

        try {
            const uploadTaskSnapshot = await uploadBytes(storageRef, fileToUpload);
            const url = await getDownloadURL(uploadTaskSnapshot.ref);
            return url; 
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('There was an error uploading the image.');
            return -1; 
        }
    };

    const deleteOfficer = async (id, imagePath) => {
        setIsLoading('Deleting Officer');
        await deleteDoc(doc(db, 'officers', id));

        if (imagePath) {
            const imageRef = ref(storage, imagePath);
            await deleteObject(imageRef);
        }
        setOfficersArr(officersArr.filter(officer => officer.id !== id));
        setIsLoading('');
    };

    return (
        <div className='OfficersAdmin'>
            <div className='header'>
                <h1>Officers</h1>
                <button onClick={() => setIsAdding(true)} className='Add'>Add</button>
            </div>

            {isAdding && (
                <AddPopUp
                    name={name}
                    setName={setName}
                    title={title}
                    setTitle={setTitle}
                    addOfficer={addOfficer}
                    setIsAdding={setIsAdding}
                    Img={mainImage}
                    setMainImg={setMainImg}
                    setIsLoading={setIsLoading}
                />
            )}

            {isLoading && <Loading message={isLoading} />}

            <div className='Officers'>
                {officersArr.map(off => (
                    <div className='IndOfficer' key={off.id}>
                        <Officer Img={off.imageURL} Name={off.name} Title={off.title} id={off.id} />
                        <button className='Delete' onClick={() => deleteOfficer(off.id, `images/${off.name.replaceAll(' ', '')}${off.title.replaceAll(' ', '')}`)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfficersAdmin;
