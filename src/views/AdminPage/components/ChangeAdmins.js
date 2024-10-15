import React,{useEffect,useState} from 'react'
import '../styles/changeAdmin.css'
import { db } from '../../Firebase'
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore'
function ChangeAdmins(){
    const [adminArray,setAdminArray] = useState([])
    const [UserArray,setUserArray] = useState([])
    const [searchTermA,setSearchTermA] = useState("")
    const [searchTermU,setSearchTermU] = useState("")
    useEffect(()=>{
        const fetchAllAdmins = async() => {
            const querySnapshot = await getDocs(collection(db,'admins'))
            const arr = querySnapshot.docs.map(doc=>(
                {
                id: doc.id,
                ...doc.data()
            }))
            setAdminArray(arr)
        }
        const fetchAllUsers = async() => {
            const querySnapshot = await getDocs(collection(db,'users'))
            const arr = querySnapshot.docs.map(doc=>({
                id: doc.id,
                ...doc.data()
            }))
            setAdminArray(arr)
        }
        fetchAllAdmins()
        fetchAllUsers()
    },[])

    
    
    return(
        <div className='changeAdminMain'>
            <h1>Current Admins</h1>
            <input
                type="text"
                placeholder="Search for officers by name or title..."
                value={searchTermA}
                onChange={e => setSearchTermA(e.target.value)}
                className="searchBar"
            />

            <h1>Current Users</h1>
            <input
                type="text"
                placeholder="Search for officers by name or title..."
                value={searchTermA}
                onChange={e => setSearchTermA(e.target.value)}
                className="searchBar"
            />
        </div>
    )
}

export default ChangeAdmins