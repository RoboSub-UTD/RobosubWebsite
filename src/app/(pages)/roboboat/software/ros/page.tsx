'use client';

import React from 'react';

const ROSPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/ros-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">ROS Integration</h1>
          <p className="text-xl max-w-3xl">
            The backbone of Luna's communication and coordination system,
            enabling seamless interactions between hardware and software.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Luna utilizes ROS2 (Robot Operating System) as the framework for
            communication, concurrency, and system integration. ROS2 ensures
            that every component, from sensors to motors, works in harmony to
            achieve autonomy.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              Seamless communication between hardware and software components.
            </li>
            <li>Real-time data sharing for decision-making and navigation.</li>
            <li>Modular architecture for easy system updates and debugging.</li>
            <li>
              Enhanced reliability through ROS2's built-in tools and nodes.
            </li>
            <li>
              Support for multiple programming languages, including Python and
              C++.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">ROS2 Nodes</h3>
          <p className="text-gray-300 mb-4">
            ROS2 nodes are the building blocks of Luna's architecture. Key nodes
            include:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Sensor Nodes:</strong> Capture data from cameras, LiDAR,
              and GPS.
            </li>
            <li>
              <strong>Navigation Nodes:</strong> Process SLAM data for path
              planning.
            </li>
            <li>
              <strong>Control Nodes:</strong> Convert AI decisions into motor
              and thruster commands.
            </li>
          </ul>
        </div>
      </section>

      {/* Diagram Section
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">System Diagram</h3>
          <img
            src="/imgs/projects/ros-diagram.jpg"
            alt="ROS Integration Diagram"
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
            href="/roboboat/software/simulations"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Simulations
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

export default ROSPage;
