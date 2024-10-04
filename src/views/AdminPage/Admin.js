
import React, {useEffect, useState} from 'react'
import { doc,getDoc } from 'firebase/firestore'
import Navbar from '../univeralComponents/navbar'
import OffciersAdmin from './components/Officers'
import {auth,db} from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import './styles/Admin.css'
function Admin(){
    const [isAdmin,setIsAdmin] = useState(false);
    const [isLoading,setIsLoading] = useState(true)
    
    
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          checkAdminStatus(currentUser.uid)
        }
      });
      return () => unsubscribe();
    }, []);
  
    const checkAdminStatus = async (uid) => {
      try {
        // Get the document for the current user's uid in the "admins" collection
        setIsLoading(true)
        const adminDocRef = doc(db, 'admins', uid); 
        const adminDoc = await getDoc(adminDocRef);
        setIsLoading(false);
        if (adminDoc.exists()) {
          // If the document exists, the user is an admin
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
      
    };

    return(
        <div className='AdminMain'>
            <Navbar/>
            {isAdmin && !isLoading ? 
            <div>
                <OffciersAdmin/> 
            </div>
            
            
            : 
            <div className='noAccessesContainer'>
                <h1 className='noAccesses'>You Don't have accesses to this page</h1>
            </div>}

        </div>
    )
}

export default Admin