import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/navbar.css';
import SideBar from './sidebar';

function Navbar() {
  const [user] = useState(null);

  const goTo = (URL: string) => {
    window.location.href = URL
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const isHomePage = usePathname() === '/';

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
            <img className='logo-img' src="/imgs/RobosubLogo.png" alt="RoboSub Logo" />
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
                <button onClick={() => scrollToSection('Projects')} className="dropdown-button"><a href='/' className='navbar-item'>Projects</a> <span className="arrow">&#9662;</span></button>
                <div className='dropdown-container'>
                  <ul className="dropdown-menu">
                    <li onClick={()=>goTo("/projects/mate")}>MateROV</li>
                    <li onClick={()=>goTo("/projects/float")} >Float Tube</li>
                    <li onClick={()=>goTo("/projects/minifloat")}>Mini Float</li>
                    <li onClick={()=>goTo("/projects/roboboat")}>RoboBoat</li>
                  </ul>
                </div>
              </li>
              {isHomePage && (
                <li className='navbar-item'>
                  <button onClick={() => scrollToSection('Sponsors')}>Sponsors</button>
                </li>
              )}
            </ul>
            <button className="hamburger" onClick={toggleSidebar}>
              ☰
            </button>
          </div>
        </div>
      </nav>
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} scrollToSection={scrollToSection} user={true} logOut={false} />
    </div>
  );
}

export default Navbar;