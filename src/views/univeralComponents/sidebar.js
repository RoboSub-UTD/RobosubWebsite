import React, { useState } from 'react';
import '../universalStyles/sidebar.css';
import logo from '../universalImages/RobosubLogo.png';
import { Link } from 'react-router-dom';

function SideBar({ isSidebarOpen, toggleSidebar, scrollToSection, user, logOut }) {
  // State to manage dropdown open/close
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const goTo = (URL) => {
    window.location.href = URL;
  }
  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='top'>
          <img className="sidebar-logo" alt="logo" src={logo} />
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        <ul className='sidebar-menu'>
          <li className='sidebar-item'>
            <button onClick={() => { scrollToSection('Home'); toggleSidebar(); }}>
              <Link className='link' to='/'>Home</Link>
            </button>
          </li>
          <li className='sidebar-item'>
            <button onClick={() => { scrollToSection('AboutRobo'); toggleSidebar(); }}>About</button>
          </li>
          <li className='sidebar-item'>
            <button onClick={() => { scrollToSection('Officers'); toggleSidebar(); }}>Officers</button>
          </li>

          <li onClick={toggleDropdown} className='sidebar-item'>
            <button>
              Projects 
              <span className='arrowSideBar' 
              style={{display: "inline-block", transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"}}>
                &#9662;</span>
            </button>
            {isDropdownOpen && (
              <ul className="sideBar-dropdown-menu">
                <li onClick={()=>goTo("/projects/FloatTube")}><button>Float Tube</button></li>
                <li onClick={()=>goTo("/projects/MateROV")}><button>MateROV</button></li>
                <li onClick={()=>goTo("/projects/MiniFloat")}><button>Mini Float</button></li>
                <li onClick={() => goTo("/projects/MiniFloat")}><button>MiniFloat</button></li>
              </ul>
            )}
          </li>
          
          {user === null ? (
            <li className='sidebar-item'>
              <button>
                <Link className='link' to="/Login">Login</Link>
              </button>
            </li>
          ) : (
            <li className='sidebar-item'>
              <button onClick={() => { logOut(); toggleSidebar(); }}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
