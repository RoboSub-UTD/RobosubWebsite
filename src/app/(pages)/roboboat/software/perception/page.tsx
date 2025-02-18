'use client';

import React from 'react';

const PerceptionPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/perception-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Perception System</h1>
          <p className="text-xl max-w-3xl">
            Enabling Luna to understand its surroundings through advanced object
            detection and environmental mapping.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Luna’s perception system is designed to identify and classify
            objects, understand its environment, and provide crucial data for
            navigation. Using advanced technologies like LiDAR and cameras, the
            system ensures Luna operates effectively in dynamic environments.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Object Detection:</strong> Utilizes YOLOv8 for real-time
              identification and classification of objects.
            </li>
            <li>
              <strong>Environmental Mapping:</strong> Combines camera and LiDAR
              data with SLAM to create a detailed map of the surroundings.
            </li>
            <li>
              <strong>Sensor Fusion:</strong> Integrates multiple data sources
              for improved accuracy and reliability.
            </li>
            <li>
              <strong>Obstacle Avoidance:</strong> Identifies potential hazards
              and generates safe navigation paths.
            </li>
            <li>
              <strong>Real-Time Processing:</strong> Ensures rapid response and
              adaptability to dynamic environments.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Technology Stack</h3>
          <p className="text-gray-300 mb-4">
            Luna’s perception system leverages state-of-the-art technologies for
            efficient and reliable operation:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>SLAM (Simultaneous Localization and Mapping):</strong>{' '}
              RTAB-Map is used to generate a map of the environment by combining
              camera and LiDAR data.
            </li>
            <li>
              <strong>Object Detection:</strong> YOLOv8 is trained to recognize
              buoys and other critical objects in the competition environment.
            </li>
            <li>
              <strong>Odometry:</strong> Simple-2D-LiDAR-Odometry and
              robot-localization provide accurate position tracking.
            </li>
            <li>
              <strong>Data Fusion:</strong> Merges LiDAR and camera inputs to
              ensure robust environmental understanding.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            The perception system is the foundation of Luna’s autonomy. By
            accurately understanding its surroundings, Luna can make informed
            decisions, avoid obstacles, and execute tasks with precision. This
            capability is essential for competitive performance and sets the
            stage for future enhancements.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Perception System Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a visual representation of Luna’s perception system, showcasing its integration with hardware and software components.
          </p>
          <img
            src="/imgs/projects/perception-diagram.jpg"
            alt="Perception System Diagram"
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
            href="/roboboat/software/ros"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Ros Integration
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

export default PerceptionPage;
