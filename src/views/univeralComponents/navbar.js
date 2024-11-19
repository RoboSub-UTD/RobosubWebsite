import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../universalStyles/Navbar.css'; // CSS file for styling
import logo from '../universalImages/RobosubLogo.png';
import SideBar from './sidebar';
import { auth, db } from '../Firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function Navbar() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const goTo = (URL) => {
    window.location.href = URL
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        checkAdminStatus(currentUser.uid);
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const checkAdminStatus = async (uid) => {
    try {
      const adminDocRef = doc(db, 'admins', uid);
      const adminDoc = await getDoc(adminDocRef);
      if (adminDoc.exists()) {
        setIsAdmin(true);
      } else {
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

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const isHomePage = useLocation().pathname === '/';

  async function logOut() {
    if (user) {
      try {
        await signOut(auth);
        setUser(null);
        setIsAdmin(false);
      } catch (err) {
        console.log('There was an error: ' + err);
      }
    }
  }

  return (
      <div>
        <nav className='navbar'>
          <div className="navbar-content">
            <div className='left' unselectable={"on"} onClick={() => {
              if (isHomePage) {
                scrollToSection('Home');
              }
              else {
                goTo('/');
              }
            }}>
              <img className='logo-img' src={logo} alt="RoboSub Logo" />
              <h1 className='Title'>RoboSub UTD</h1>
            </div>

            <div className='right'>
              <ul className='navbar-menu'>
                {isHomePage && (
                    <>
                      <li className='navbar-item'>
                        <button onClick={() => scrollToSection('AboutRobo')}>About</button>
                      </li>
                      <li className='navbar-item'>
                        <button onClick={() => scrollToSection('Officers')}>Officers </button>
                      </li>
                    </>
                )}

                <li className="navbar-item projects-menu">
                  <button onClick={() => scrollToSection('Projects')} className="dropdown-button"><a href='#/' className='navbar-item'>Projects</a> <span className="arrow">&#9662;</span></button>
                  <div className='dropdown-container'>
                    <ul className="dropdown-menu">
                      <li onClick={()=>goTo("#/projects/MateROV")}>MateROV</li>
                      <li onClick={()=>goTo("#/projects/FloatTube")} >Float Tube</li>
                      <li onClick={()=>goTo("#/projects/MiniFloat")}>Mini Float</li>
                      <li onClick={()=>goTo("#/projects/Roboboat")}>RoboBoat</li>
                    </ul>
                  </div>
                </li>
                {isHomePage && (
                    <li className='navbar-item'>
                      <button onClick={() => scrollToSection('Sponsors')}>Sponsors</button>
                    </li>
                )}

                {isAdmin && (
                    <li className='navbar-item'>
                      <button>
                        <a className='navbar-item' href="#/Admin">Admin</a>
                      </button>
                    </li>
                )}
                {/* <button onClick={() => { console.log(auth.currentUser); }}>get user</button> */}

                {user === null ? (
                    <li className='navbar-item'>
                      <button>
                        <a className='navbar-item' href="#/Login">Login</a>
                      </button>
                    </li>
                ) : (
                    <li className='navbar-item'>
                      <button onClick={logOut}>Logout</button>
                    </li>
                )}
              </ul>
              <button className="hamburger" onClick={toggleSidebar}>
                ☰
              </button>
            </div>
          </div>
        </nav>
        <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} scrollToSection={scrollToSection} user={user} logOut={logOut}/>
      </div>
  );
}

export default Navbar;
