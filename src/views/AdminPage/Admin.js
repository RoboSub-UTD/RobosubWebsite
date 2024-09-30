
import React, {useEffect, useState} from 'react'
import { doc,getDoc } from 'firebase/firestore'
import Navbar from '../univeralComponents/navbar'
import OffciersAdmin from './components/Officers'
import {auth,db} from '../Firebase'
import './styles/Admin.css'
function Admin(){
    const [isAdmin,setIsAdmin] = useState(false);
    useEffect(()=>{
      const currentUser = auth.currentUser;
      if (currentUser) {
        checkAdminStatus(currentUser.uid);
      }
    },[])
  
    const checkAdminStatus = async (uid) => {
      try {
        // Get the document for the current user's uid in the "admins" collection
        const adminDocRef = doc(db, 'admins', uid); 
        const adminDoc = await getDoc(adminDocRef);
  
        if (adminDoc.exists()) {
          // If the document exists, the user is an admin
          setIsAdmin(true);
        } else {
          // If the document does not exist, the user is not an admin
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };
    
    return(
        <div>
            <Navbar/>
            {isAdmin ? <OffciersAdmin/> : 
            <div className='noAccessesContainer'>
                <h1 className='noAccesses'>You Don't have accesses to this page</h1>
            </div>}

        </div>
    )
}

export default Admin