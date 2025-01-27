"use client";

import React from "react";

const PowerControlBoardPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/power-board-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Power Control Board</h1>
          <p className="text-xl max-w-3xl">
            A compact and versatile solution to manage power distribution for Luna’s critical components with safety and scalability in mind.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            The Power Control Board is responsible for safely distributing power from Luna’s batteries to its various subsystems, including propulsion, electronics, and sensors. Its compact and modular design ensures scalability and easy troubleshooting.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Integrated 14.4V to 12V Buck Converter:</strong> Powers servos, motors, and other devices efficiently.
            </li>
            <li>
              <strong>Future-Proof Design:</strong> Includes extra connectors for potential subsystem expansion.
            </li>
            <li>
              <strong>Enhanced Troubleshooting:</strong> Test leads and status LEDs for easy monitoring during operation.
            </li>
            <li>
              <strong>Compact Layout:</strong> Saves space while providing robust connectivity options.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Technical Details</h3>
          <p className="text-gray-300 mb-4">
            The Power Control Board steps down the 14.4V input from the batteries to a regulated 12V output using a robust 30A buck converter. The board is designed to manage power distribution for the servos, Jetson, bilge pump, and other essential components.
          </p>
          <p className="text-gray-300 mb-4">
            Test leads are strategically placed at each input and output to simplify diagnostics during testing. Extra 12V JST connectors and a 14.4V XT-60 connector provide flexibility for future upgrades.
          </p>
          <p className="text-gray-300 mb-4">
            Additionally, status LEDs indicate the health of the buck converter, making it easier to identify potential issues during operation.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            The Power Control Board plays a critical role in Luna’s operation by ensuring reliable power distribution across all systems. Its thoughtful design reduces the risk of electrical failures and supports the scalability needed for future enhancements.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram illustrating the layout and components of the Power Control Board.
          </p>
          <img
            src="/imgs/projects/power-board-diagram.jpg"
            alt="Power Control Board Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Learn about the innovative components that power our Autonomous Surface Vehicle.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/electrical/battery"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Battery
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

export default PowerControlBoardPage;