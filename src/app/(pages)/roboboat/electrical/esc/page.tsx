'use client';

import React from 'react';

const ESCCarrierBoardPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/esc-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">ESC Carrier Board</h1>
          <p className="text-xl max-w-3xl">
            A compact and modular solution to efficiently control Luna's
            propulsion system with enhanced reliability and easy maintenance.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            The ESC Carrier Board is an integral part of Luna’s propulsion
            system, driving the four T200 thrusters. It is designed for
            compactness, modularity, and ease of maintenance, ensuring optimal
            performance during competition and testing.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Compact Design:</strong> Saves space within Luna's
              electronic storage while maintaining accessibility.
            </li>
            <li>
              <strong>Modular Construction:</strong> Enables quick replacements
              and adjustments to the thrusters.
            </li>
            <li>
              <strong>Modular Construction:</strong> Features XT90 for battery
              input and MR30 connectors for thruster connections.
            </li>
            <li>
              <strong>Direct Control:</strong> Wired directly to the Cube Orange
              flight controller for precise speed and directional control.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Technical Details</h3>
          <p className="text-gray-300 mb-4">
            The board is powered by a Lumenier ESC, which provides reliable
            control over the four Blue Robotics T200 thrusters. The compact
            design allows easy integration into Luna's electrical system while
            ensuring efficient power delivery and control.
          </p>
          <p className="text-gray-300 mb-4">
            Key considerations include the use of secure MR30 connectors for
            thruster connections and XT90 connectors for battery input,
            providing robustness and reducing the risk of loose connections
            during operation.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            The ESC Carrier Board ensures Luna's propulsion system remains
            reliable and adaptable. By focusing on modularity and simplicity,
            the team can quickly address any issues that arise during testing or
            competition, minimizing downtime and enhancing performance.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram showcasing the layout and components of the ESC
            Carrier Board.
          </p>
          <img
            src="/imgs/projects/esc-diagram.jpg"
            alt="ESC Carrier Board Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Learn more about the innovative components powering our autonomous
          surface vehicle.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/electrical/power-board"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Power Control Board
          </a>
          <a
            href="/roboboat"
            className="px-6 py-3 bg-[#125d99] text-white font-bold rounded-full hover:bg-[#147ab6] transition-colors"
          >
            Back to RoboBoat
          </a>
        </div>
      </section>
    </main>
  );
};

export default ESCCarrierBoardPage;
