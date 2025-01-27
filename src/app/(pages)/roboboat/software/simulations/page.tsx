"use client";

import React from "react";

const SimulationPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/simulation-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Simulations</h1>
          <p className="text-xl max-w-3xl">
            Virtual environments that allow Luna's systems to be tested and validated before deployment.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Simulations play a critical role in Luna’s development, providing a safe and controlled environment to test navigation, perception, and AI systems.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>Virtual testing environments for navigation and object detection.</li>
            <li>Integration with ROS2 for real-world simulation of subsystems.</li>
            <li>Validation of AI and control algorithms before hardware deployment.</li>
            <li>Support for multiple scenarios, including obstacle avoidance and task completion.</li>
            <li>Time-efficient debugging and system iteration.</li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Tools Used</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li><strong>Gazebo:</strong> Simulates physical environments and vehicle dynamics.</li>
            <li><strong>RTAB-Map:</strong> Creates virtual maps from sensor data.</li>
            <li><strong>RViz:</strong> Visualizes sensor data and system states in real time.</li>
          </ul>
        </div>
      </section>

      {/* Diagram Section
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Simulation Workflow</h3>
          <img
            src="/imgs/projects/simulation-diagram.jpg"
            alt="Simulation Workflow Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section> */}
      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Learn more about the advanced systems powering Luna’s autonomy.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/software/perception"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Perception
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

export default SimulationPage;