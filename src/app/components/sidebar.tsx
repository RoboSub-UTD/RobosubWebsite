import React, { useState } from 'react';

function SideBar({
  isSidebarOpen,
  toggleSidebar,
  scrollToSection,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: any;
  scrollToSection: any;
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const goTo = (URL: string) => {
    window.location.href = URL;
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between px-4 py-3">
          <img
            className="w-10 h-10"
            alt="logo"
            src="/imgs/logos/robosub.png"
          />
          <button
            className="text-4xl text-blue-500 hover:text-blue-700"
            onClick={toggleSidebar}
          >
            ×
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-4 mt-6 px-4">
          <li>
            <button
              onClick={() => {
                scrollToSection('Home');
                toggleSidebar();
              }}
              className="w-full text-left text-blue-500 hover:text-blue-700 text-xl"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection('AboutRobo');
                toggleSidebar();
              }}
              className="w-full text-left text-blue-500 hover:text-blue-700 text-xl"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection('Officers');
                toggleSidebar();
              }}
              className="w-full text-left text-blue-500 hover:text-blue-700 text-xl"
            >
              Officers
            </button>
          </li>

          {/* Dropdown Menu */}
          <li>
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full text-left text-blue-500 hover:text-blue-700 text-xl"
            >
              Projects
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                &#9662;
              </span>
            </button>
            {isDropdownOpen && (
              <ul className="mt-2 space-y-2 bg-gray-800 rounded-lg p-4">
                <li>
                  <button
                    onClick={() => {
                      goTo('/projects/FloatTube');
                      toggleSidebar();
                    }}
                    className="w-full text-left text-gray-300 hover:text-white"
                  >
                    Float Tube
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      goTo('/projects/MateROV');
                      toggleSidebar();
                    }}
                    className="w-full text-left text-gray-300 hover:text-white"
                  >
                    MateROV
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      goTo('/projects/MiniFloat');
                      toggleSidebar();
                    }}
                    className="w-full text-left text-gray-300 hover:text-white"
                  >
                    Mini Float
                  </button>
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
