'use client';

import React from 'react';

const PropulsionPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/propulsion-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Propulsion System</h1>
          <p className="text-xl max-w-3xl">
            Luna’s propulsion system combines power and precision to ensure
            efficient navigation and maneuverability.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Luna’s propulsion system is designed for reliability, modularity,
            and adaptability. Leveraging Blue Robotics T200 thrusters, the
            system offers precise control and efficient performance in
            competitive environments.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Blue Robotics T200 Thrusters:</strong> Known for their
              reliability, ease of use, and high efficiency.
            </li>
            <li>
              <strong>Angled Front Thrusters:</strong> Positioned at 45 degrees
              to provide better maneuverability and navigation control.
            </li>
            <li>
              <strong>Modular Mounting System:</strong> Thrusters are attached
              to the frame for easy adjustments and maintenance.
            </li>
            <li>
              <strong>Optimized Placement:</strong> Configurations tested and
              adjusted for maximum propulsion efficiency.
            </li>
            <li>
              <strong>Durable Build:</strong> Thrusters are fully submerged but
              protected from mishandling by the hull’s design.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">
            Configuration and Testing
          </h3>
          <p className="text-gray-300 mb-4">
            During the design phase, four configurations were considered:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>Two rear thrusters with no angle adjustment.</li>
            <li>Four thrusters, with the front pair angled at 45 degrees.</li>
            <li>Four thrusters, all angled at 45 degrees.</li>
            <li>Four thrusters with adjustable front angles.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            After evaluating these designs, the team selected the configuration
            with four thrusters, where the front pair is angled at 45 degrees.
            This setup provides the best balance of thrust and maneuverability,
            essential for tasks requiring precise navigation.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">
            Modularity and Maintenance
          </h3>
          <p className="text-gray-300 mb-4">
            The propulsion system’s modular design simplifies maintenance and
            future upgrades. Thrusters are mounted on the frame instead of
            directly on the hull, eliminating the need for hull modifications
            during adjustments or replacements.
          </p>
          <p className="text-gray-300 mb-4">
            This approach also reduces the risk of water ingress, ensuring the
            propulsion system remains reliable throughout the competition.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            Luna’s propulsion system is key to its performance. By focusing on
            modularity, reliability, and efficiency, the team has created a
            robust system capable of meeting the challenges of competitive
            environments.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">System Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram showcasing the layout and configuration of Luna’s
            propulsion system.
          </p>
          <img
            src="/imgs/projects/propulsion-diagram.jpg"
            alt="Propulsion System Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Discover the innovative components that power Luna’s success in
          competition.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/hardware/frame"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Frame Design
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

export default PropulsionPage;
