import React, { useState } from 'react';
import '../styles/sidebar.css';

function SideBar({
  isSidebarOpen,
  toggleSidebar,
  scrollToSection,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: any;
  scrollToSection: any;
}) {
  // State to manage dropdown open/close
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const goTo = (URL: string) => {
    window.location.href = URL;
  };
  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="top">
          <img
            className="sidebar-logo"
            alt="logo"
            src="/imgs/logos/robosub.png"
          />
          <button className="close-btn" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <button
              onClick={() => {
                scrollToSection('Home');
                toggleSidebar();
              }}
            >
              <a className="link" href="/">
                Home
              </a>
            </button>
          </li>
          <li className="sidebar-item">
            <button
              onClick={() => {
                scrollToSection('AboutRobo');
                toggleSidebar();
              }}
            >
              About
            </button>
          </li>
          <li className="sidebar-item">
            <button
              onClick={() => {
                scrollToSection('Officers');
                toggleSidebar();
              }}
            >
              Officers
            </button>
          </li>

          <li onClick={toggleDropdown} className="sidebar-item">
            <button>
              Projects
              <span
                className="arrow-sidebar"
                style={{
                  display: 'inline-block',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                &#9662;
              </span>
            </button>
            {isDropdownOpen && (
              <ul className="sidebar-dropdown-menu">
                <li onClick={() => goTo('/projects/FloatTube')}>
                  <button>Float Tube</button>
                </li>
                <li onClick={() => goTo('/projects/MateROV')}>
                  <button>MateROV</button>
                </li>
                <li onClick={() => goTo('/projects/MiniFloat')}>
                  <button>Mini Float</button>
                </li>
                <li onClick={() => goTo('/projects/MiniFloat')}>
                  <button>MiniFloat</button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
