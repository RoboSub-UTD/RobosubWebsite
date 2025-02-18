'use client';

import React from 'react';

const HullPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/hull-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Hull Design</h1>
          <p className="text-xl max-w-3xl">
            Combining stability and mobility, Luna’s hull is engineered for
            performance and adaptability in competitive environments.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            The hull design is a critical aspect of Luna’s performance. Our team
            selected a catamaran configuration to balance stability and
            mobility, ensuring Luna’s success in competition. Every detail was
            meticulously designed and simulated for optimal performance.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Catamaran Configuration:</strong> Provides excellent
              stability and reduced drag for efficient navigation.
            </li>
            <li>
              <strong>V-Shaped Hull Design:</strong> Minimizes drag while
              maintaining buoyancy and stability.
            </li>
            <li>
              <strong>Concave Sides:</strong> Allows the hull to sink into the
              water for better propulsion system protection.
            </li>
            <li>
              <strong>SolidWorks Simulations:</strong> Fluid simulations helped
              refine the design to achieve the least drag force.
            </li>
            <li>
              <strong>Draft Optimization:</strong> Ensures thrusters are fully
              submerged without being vulnerable to mishandling.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Design Process</h3>
          <p className="text-gray-300 mb-4">
            Luna’s hull design began with a symmetrical configuration in
            SolidWorks. By estimating an approximate weight of 70 lbs, the team
            calculated the required draft to submerge the propulsion system.
            Using fluid simulations, the design was iteratively improved to
            minimize drag and maximize performance.
          </p>
          <p className="text-gray-300 mb-4">
            The concave side design allows for flexibility in draft adjustments,
            ensuring that the hull can handle varying conditions while
            maintaining stability and mobility. This adaptability is key to
            Luna’s performance in competition scenarios.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            The hull design forms the foundation of Luna’s performance. By
            optimizing for stability, mobility, and protection of key
            components, the team has created a design that not only meets
            current needs but also lays the groundwork for future enhancements.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Hull Design Simulations</h3>
          <p className="text-gray-200 mb-8">
            Below is a rendering of Luna’s hull and the fluid simulations
            conducted to refine the design.
          </p>
          <img
            src="/imgs/projects/roboboat/flow_simulation.png"
            alt="Hull Design Simulation"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Learn about the innovative components that make Luna a competitive
          Autonomous Surface Vehicle.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/hardware/propulsion"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Propulsion System
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

export default HullPage;
