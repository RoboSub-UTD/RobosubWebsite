"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RoboBoatPage = () => {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/logos/GalaxSea.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">RoboBoat: Team GalaxSea</h1>
          <p className="text-xl max-w-2xl">
            Learn more about the design and innovation behind Luna, GalaxSea's first Autonomous Surface Vehicle.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Overview</h2>
          <p className="text-lg text-gray-300">
            Luna was built with modularity, accessibility, and simplicity in mind, laying the foundation for future ASV designs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Software Department */}
          <div className="bg-[#125d99] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Software Department</h3>
            <p className="text-gray-300 mb-4">
              The software team develops and tests the programs enabling Luna's autonomy. Explore more:
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/software/perception")}
                  className="text-[#53cbec] hover:underline"
                >
                  Perception: Object detection and navigation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/software/ros")}
                  className="text-[#53cbec] hover:underline"
                >
                  ROS Integration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/software/simulations")}
                  className="text-[#53cbec] hover:underline"
                >
                  Simulations
                </button>
              </li>
            </ul>
          </div>

          {/* Hardware Department */}
          <div className="bg-[#125d99] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Hardware Department</h3>
            <p className="text-gray-300 mb-4">
              The hardware team builds Luna's physical components. Learn more about:
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/hardware/hull")}
                  className="text-[#53cbec] hover:underline"
                >
                  Hull Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/hardware/propulsion")}
                  className="text-[#53cbec] hover:underline"
                >
                  Propulsion System
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/hardware/frame")}
                  className="text-[#53cbec] hover:underline"
                >
                  Frame Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/hardware/storage")}
                  className="text-[#53cbec] hover:underline"
                >
                  Electronics Storage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/hardware/launchers")}
                  className="text-[#53cbec] hover:underline"
                >
                  Ball and Water Launchers
                </button>
              </li>
            </ul>
          </div>

          {/* Electrical Department */}
          <div className="bg-[#125d99] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Electrical Department</h3>
            <p className="text-gray-300 mb-4">
              The electrical team powers Luna with custom solutions. Discover:
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/electrical/esc")}
                  className="text-[#53cbec] hover:underline"
                >
                  ESC Carrier Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/electrical/power-board")}
                  className="text-[#53cbec] hover:underline"
                >
                  Power Control Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/electrical/battery")}
                  className="text-[#53cbec] hover:underline"
                >
                  Battery Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/roboboat/electrical/safety")}
                  className="text-[#53cbec] hover:underline"
                >
                  Safety and Reliability
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoboBoatPage;