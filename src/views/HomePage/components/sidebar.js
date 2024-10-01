import React from 'react';
import '../styles/sidebar.css';
import logo from '../images/RobosubLogo.png'
import { Link } from 'react-router-dom';
function SideBar({isSidebarOpen,toggleSidebar,scrollToSection,user,logOut }) {
    return (
        <div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className='top'>
                    <img className="sidebar-logo" alt ="logo" src={logo}/>
                    <button className="close-btn" onClick={toggleSidebar}>×</button>
                </div>
                <ul className='sidebar-menu'>
                    <li className='sidebar-item'><button onClick={() => {scrollToSection('Home'); toggleSidebar();}}><Link className='link' to='/'>Home</Link></button></li>
                    <li className='sidebar-item'><button onClick={() => {scrollToSection('AboutRobo'); toggleSidebar();}}>About</button></li>
                    <li className='sidebar-item'><button onClick={() => {scrollToSection('Officers'); toggleSidebar();}}>Officers</button></li>
                    <li className='sidebar-item'><button onClick={() => {scrollToSection('Projects'); toggleSidebar();}}>Projects</button></li>
                    {user === null ? (
                    <li className='sidebar-item'>
                      <button>
                        <Link className='link' to="/Login">Login</Link>
                      </button>
                    </li>
                  ) : (
                    <li className='sidebar-item'>
                      <button onClick={()=> {logOut(); toggleSidebar()}}>Logout</button>
                    </li>
                  )}

              
                </ul>
            </div>
        </div>
    );
}

export default SideBar; // Remove the parentheses
