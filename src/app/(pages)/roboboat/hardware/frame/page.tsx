'use client';

import React from 'react';

const FramePage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/frame-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Frame Design</h1>
          <p className="text-xl max-w-3xl">
            Luna’s modular and adjustable frame provides a strong foundation for
            stability and functionality in competitive environments.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Luna’s frame serves as the structural backbone of the Autonomous
            Surface Vehicle (ASV), connecting its components while maintaining
            stability and modularity. The frame is designed to allow adjustments
            and provide a strong, durable base for all hardware systems.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>2020 Aluminum Extrusion Bars:</strong> Chosen for their
              strength, modularity, and ease of assembly.
            </li>
            <li>
              <strong>Adjustable Hull Distance:</strong> Allows the hulls to be
              repositioned for testing optimal stability and mobility.
            </li>
            <li>
              <strong>Standardized Mounting:</strong> Provides flexibility to
              attach tools, electronics, and propulsion components.
            </li>
            <li>
              <strong>Lightweight Design:</strong> Ensures durability without
              compromising Luna’s speed and agility.
            </li>
            <li>
              <strong>Scalable for Future Enhancements:</strong> Easily
              accommodates upgrades and additional systems.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Design and Testing</h3>
          <p className="text-gray-300 mb-4">
            The frame uses 2020 aluminum extrusion bars, offering both
            structural integrity and modularity. These bars allow for components
            to be mounted securely and adjusted with ease. The distance between
            the hulls can be modified to optimize stability without sacrificing
            mobility, a critical feature for competitive tasks.
          </p>
          <p className="text-gray-300 mb-4">
            The frame design underwent iterative testing to find the most
            suitable configuration. By adjusting hull distances and
            stress-testing the frame under simulated conditions, the team
            ensured Luna could perform reliably under various challenges.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            A well-designed frame is crucial for any autonomous vehicle. Luna’s
            frame ensures all components are securely housed while maintaining
            flexibility for testing and upgrades. This modularity is key to
            adapting the ASV for future competitions and projects.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Frame Design Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram illustrating the modular and adjustable frame of
            Luna.
          </p>
          <img
            src="/imgs/projects/roboboat/Frame and Propulsion.png"
            alt="Frame Design Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Learn more about the innovative components that power Luna’s success
          in competition.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/hardware/storage"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Electronics Storage
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

export default FramePage;
