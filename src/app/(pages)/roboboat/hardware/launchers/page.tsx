'use client';

import React from 'react';

const LaunchersPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/launchers-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Ball & Water Launchers</h1>
          <p className="text-xl max-w-3xl">
            Precision systems designed to execute tasks with accuracy and
            reliability during competition.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Luna’s launcher systems are designed to complete specific
            competition tasks. These include a ball launcher for precise object
            delivery and a water launcher for targeted tasks. Both systems are
            integrated with modular designs to ensure reliability and ease of
            operation.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Yaw and Pitch Control:</strong> Independent motion for
              aiming without repositioning the boat.
            </li>
            <li>
              <strong>Flywheel Ball Launcher:</strong> Effective and reliable
              for precision delivery, inspired by proven robotics designs.
            </li>
            <li>
              <strong>High-Output Water Launcher:</strong> Uses a modified bilge
              pump for targeted water delivery.
            </li>
            <li>
              <strong>Integrated Design:</strong> Combines ball and water
              launcher movements to reduce complexity.
            </li>
            <li>
              <strong>Modular Construction:</strong> Simplifies maintenance and
              future upgrades.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Ball Launcher</h3>
          <p className="text-gray-300 mb-4">
            The ball launcher utilizes a flywheel design, a proven solution in
            robotics for its simplicity and accuracy. This design allows for
            precise delivery of balls to targets while maintaining a compact
            form factor. The yaw and pitch control ensures flexibility during
            operation, enabling accurate aiming without repositioning the entire
            boat.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Water Launcher</h3>
          <p className="text-gray-300 mb-4">
            The water launcher is powered by a high-output bilge pump modified
            for computer actuation. This approach provides reliable and
            efficient water delivery for tasks requiring precise targeting. The
            modular integration with the ball launcher simplifies the control
            system while maintaining performance.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">
            Testing and Optimization
          </h3>
          <p className="text-gray-300 mb-4">
            The launcher systems underwent extensive testing to ensure accuracy
            and reliability. Calibration of the yaw and pitch control mechanisms
            was a key focus to maximize task performance. Simulated environments
            were used to test launch angles, force, and precision before final
            integration with Luna.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            The launchers are critical for completing competition tasks. By
            designing systems that balance precision and reliability, Luna is
            equipped to handle complex challenges efficiently. The modular
            design ensures that future updates can enhance these systems for
            greater versatility.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Launcher System Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram showcasing the ball and water launcher systems
            integrated into Luna.
          </p>
          <img
            src="/imgs/projects/launchers-diagram.jpg"
            alt="Launcher System Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Learn more about Luna’s hardware systems and their role in
          competition.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/hardware/hull"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Hull Design
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

export default LaunchersPage;
