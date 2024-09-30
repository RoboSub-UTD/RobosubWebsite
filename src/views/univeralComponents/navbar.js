import React, { useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../HomePage/styles/Navbar.css'; // CSS file for styling
import logo from '../HomePage/images/RobosubLogo.png';
import SideBar from '../HomePage/components/sidebar'
import {auth,db} from '../Firebase'
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
function Navbar() {
  const [user,setUser] = useState(null)
  const [isAdmin,setIsAdmin] = useState(false);
  useEffect(()=>{
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
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
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };
  function scrollToSection(id){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const isHomePage = useLocation().pathname === '/';

  async function logOut(){
    if(user){
      try{
        await signOut(auth)
        setUser(null)
        setIsAdmin(false)
      }
      catch(err){
        console.log("there was an error: " + err)
      }
    }
  }
  
  

  return (
    <div>
      <nav className='navbar'>
        <div className="navbar-content">
          <div className='left'>
            <img className='logo-img' src={logo} alt="RoboSub Logo"/>
            <h1 className='Title'>RoboSub UTD</h1>
          </div>

          <div className='right'>
              <ul className='navbar-menu'>
                  <li className='navbar-item'><button onClick={() => scrollToSection('Home')}><Link className='navbar-item' to="/">Home</Link></button></li>
                  {isHomePage && 
                    <>
                      <li className='navbar-item'><button onClick={() => scrollToSection('AboutRobo')}>About</button></li>
                      <li className='navbar-item'><button onClick={() => scrollToSection('Officers')}>Officers</button></li>
                      <li className='navbar-item'><button onClick={() => scrollToSection('Projects')}>Projects</button></li>
                      {user === null ? 
                      <>
                        <li className='navbar-item'><button><Link className='navbar-item' to="/Login">Login</Link></button></li>
                      </> :
                      <>
                        <li className='navbar-item'><button onClick={() => logOut()}>Logout</button></li>
                      </>
                      } 
                      {/* <button onClick={()=>{console.log(auth.currentUser)}}>get user</button> */}
                    </> 

                  }
                  {isAdmin &&
                        <li className='navbar-item'><button><Link className='navbar-item' to="/Admin">Admin</Link></button></li>
                   }

              </ul>
              <button className="hamburger" onClick={toggleSidebar}>
                ☰
              </button>
          </div>
        </div>
      </nav>
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} scrollToSection={scrollToSection}/>
    </div>
  );
};

export default Navbar;
