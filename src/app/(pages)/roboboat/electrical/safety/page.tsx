"use client";

import React from "react";

const SafetyPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/safety-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Safety & Reliability</h1>
          <p className="text-xl max-w-3xl">
            Ensuring Luna operates securely with built-in safety mechanisms and redundancy for reliable performance.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Safety and reliability are at the core of Luna's electrical system. From emergency stop mechanisms to robust power distribution, every feature is designed to safeguard both the vehicle and its operators.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Safety Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Emergency Stop Mechanism:</strong> Allows for immediate shutdown of the propulsion system in critical situations.
            </li>
            <li>
              <strong>Redundant Controls:</strong> Includes both wireless and physical controls for emergency power cut-off.
            </li>
            <li>
              <strong>Protected Battery Containers:</strong> Acid-resistant, vented containers minimize risks associated with battery malfunctions.
            </li>
            <li>
              <strong>Status Indicators:</strong> LEDs and monitoring systems provide real-time feedback on system health.
            </li>
            <li>
              <strong>Built-In Redundancy:</strong> Spare battery packs and connectors ensure operational continuity in case of component failure.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Emergency Stop Mechanism</h3>
          <p className="text-gray-300 mb-4">
            Luna's emergency stop mechanism is designed to immediately halt the propulsion system when required. This system uses an Arduino Mega connected to a Taranis X9D Plus transmitter via a FrSky X8R receiver. A MOSFET energizes a relay coil in a contactor, allowing or cutting off current flow based on the transmitter signal.
          </p>
          <p className="text-gray-300 mb-4">
            Additionally, a physical emergency stop button is integrated into the system. Pressing this button de-energizes the relay coil, cutting off power to the propulsion system instantly.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Redundant Power Control</h3>
          <p className="text-gray-300 mb-4">
            The power distribution system incorporates redundancy to ensure reliability during operation. Test leads are placed at critical points, allowing for easy diagnostics and troubleshooting. Spare connectors are included for future expansion or rapid replacement in case of failure.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            These safety and reliability measures ensure that Luna operates smoothly and safely in challenging environments. By integrating multiple layers of protection, the team has minimized risks and created a system that can adapt to unexpected scenarios.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">System Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram highlighting the safety and reliability features of Luna’s electrical system.
          </p>
          <img
            src="/imgs/projects/safety-diagram.jpg"
            alt="Safety System Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Discover the innovative components that power and protect our Autonomous Surface Vehicle.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/electrical/esc"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            ESC Carrier Board
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

export default SafetyPage;