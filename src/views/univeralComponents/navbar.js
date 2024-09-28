import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../HomePage/styles/Navbar.css'; // CSS file for styling
import logo from '../HomePage/images/RobosubLogo.png';
import SideBar from '../HomePage/components/sidebar'

function Navbar() {
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
                  {isHomePage ? 
                    <>
                      <li className='navbar-item'><button onClick={() => scrollToSection('AboutRobo')}>About</button></li>
                      <li className='navbar-item'><button onClick={() => scrollToSection('Officers')}>Officers</button></li>
                      <li className='navbar-item'><button onClick={() => scrollToSection('Projects')}>Projects</button></li>
                      <li className='navbar-item'><button onClick={() => scrollToSection('Connect')}>Connect</button></li>
                    </> :
                    <></>
                  }

                  <li className='navbar-item'><button><Link className='navbar-item' to="/Admin">Admin</Link></button></li>
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
