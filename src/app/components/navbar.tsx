"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import SideBar from './sidebar';

function Navbar() {
  const goTo = (URL:string) => {
    window.location.href = URL;
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function scrollToSection(id:string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const isHomePage = usePathname() === '/';

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-20 bg-[rgba(0,0,0,0.3)] backdrop-blur-md z-10 flex justify-around items-center px-6">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            if (isHomePage) {
              scrollToSection('Home');
            } else {
              goTo('/');
            }
          }}
        >
          <img
            className="h-10 mr-2"
            src="/imgs/logos/RobosubLogo.png"
            alt="RoboSub Logo"
          />
          <h1 className="text-white text-2xl font-bold">RoboSub UTD</h1>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex space-x-6">
            {isHomePage && (
              <>
                <li className="text-white text-2xl cursor-pointer hover:text-gray-300">
                  <button onClick={() => scrollToSection('AboutRobo')}>About</button>
                </li>
                <li className="text-white text-2xl cursor-pointer hover:text-gray-300">
                  <button onClick={() => scrollToSection('Officers')}>Officers</button>
                </li>
              </>
            )}

            <li className="relative group text-white text-2xl cursor-pointer">
              <button className="flex items-center">
                Projects <span className="ml-1 transform transition-transform duration-300 group-hover:rotate-180">&#9662;</span>
              </button>
              <div className="absolute w-60 hidden group-hover:block bg-black text-white rounded-lg p-4 mt-2 opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 -translate-y-2">
                <ul className="space-y-2">
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => goTo('/projects/mate')}>MateROV</li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => goTo('/projects/float')}>Float Tube</li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => goTo('/projects/minifloat')}>Mini Float</li>
                  <li className="hover:bg-gray-700 p-2 rounded" onClick={() => goTo('/projects/galaxsea')}>GalaxSea</li>
                </ul>
              </div>
            </li>


            {isHomePage && (
              <li className="text-white text-2xl cursor-pointer hover:text-gray-300">
                <button onClick={() => scrollToSection('Sponsors')}>Sponsors</button>
              </li>
            )}
          </ul>
          <button
            className="text-white text-2xl md:hidden ml-4"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </nav>

      <SideBar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}

export default Navbar;
