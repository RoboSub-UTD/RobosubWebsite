import React from 'react';
import '../styles/sidebar.css';
import logo from '../images/RobosubLogo.png'
function SideBar({isSidebarOpen,toggleSidebar}) {
    return (
        <div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className='top'>
                    <img className="sidebar-logo" alt ="logo" src={logo}/>
                    <button className="close-btn" onClick={toggleSidebar}>×</button>
                </div>
                <ul className='sidebar-menu'>
                    <li className='sidebar-item'>About</li>
                    <li className='sidebar-item'>Officers</li>
                    <li className='sidebar-item'>Projects</li>
                    <li className='sidebar-item'>Connect</li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar; // Remove the parentheses
