import React, { useState } from 'react';
import '../styles/Navbar.css'; // CSS file for styling
import logo from '../images/RobosubLogo.png';
import SideBar from './sidebar'

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

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
                  <li className='navbar-item'>About</li>
                  <li className='navbar-item'>Officers</li>
                  <li className='navbar-item'>Projects</li>
                  <li className='navbar-item'>Connect</li>
              </ul>
              <button className="hamburger" onClick={toggleSidebar}>
                ☰
              </button>
          </div>
        </div>
      </nav>
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    </div>
  );
};

export default Navbar;
