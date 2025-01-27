"use client";

import React from "react";

const FloatPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/float-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Vertical Profiling Float</h1>
          <p className="text-xl max-w-3xl">
            A cost-effective and innovative solution for buoyancy control and underwater exploration.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            The Vertical Profiling Float is a groundbreaking project designed by Hydromeda to achieve precise buoyancy control and enable underwater exploration. With its innovative buoyancy engine and robust construction, the float serves as a testbed for advancements in marine technology.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Buoyancy Engine:</strong> Utilizes a 550mL syringe and motorized lead screw to control buoyant force.
            </li>
            <li>
              <strong>Durable Construction:</strong> Enclosed by a 28.5-inch acrylic tube with resin-cast endcaps.
            </li>
            <li>
              <strong>Efficient Power System:</strong> Powered by a 12V battery pack with onboard Arduino UNO for motor control.
            </li>
            <li>
              <strong>Wireless Communication:</strong> Equipped with an NRF24L01+ transceiver module for real-time data transmission.
            </li>
            <li>
              <strong>Safety Features:</strong> Includes fuses, secured batteries, and compliance with competition guidelines.
            </li>
          </ul>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Buoyancy System</h3>
              <p className="text-gray-300">
                The buoyancy engine controls vertical movement by adjusting the syringe's plunger to take in or expel water, altering buoyant force. 3D-printed clamps hold steel rods, ensuring precise buoyancy adjustments.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Structural Design</h3>
              <p className="text-gray-300">
                The float features a robust acrylic tube supported by 8mm rods. Resin-cast endcaps seal the structure, while linear bearings ensure smooth motion for the syringe plunger.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Power System</h3>
              <p className="text-gray-300">
                Powered by 8 AA batteries in series, the float provides a stable 12V output. The Arduino UNO regulates voltage for various components, ensuring safety and efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Communication</h3>
              <p className="text-gray-300">
                An NRF24L01+ wireless transceiver module enables communication with the base station using the SPI protocol at 2.4 GHz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Safety Measures</h2>
          <p className="text-lg text-gray-300 mb-8">
            The Vertical Profiling Float is built with safety as a top priority:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Fuses and Current Limiting:</strong> A 5-amp fuse and 3-amp current limit ensure safe operation.
            </li>
            <li>
              <strong>Emergency Mechanisms:</strong> O-ring endcaps pop off under excessive pressure to prevent damage.
            </li>
            <li>
              <strong>Design Compliance:</strong> Adheres to competition guidelines, including size and sharp-edge precautions.
            </li>
            <li>
              <strong>Battery Safety:</strong> Batteries are secured with tape and designed for quick replacement.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Learn More About Our Projects</h3>
        <p className="text-gray-300 mb-8">
          Discover how Hydromeda's innovative designs are advancing underwater robotics.
        </p>
        <div className="space-x-4">
          <a
            href="/materov"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            MATE ROV
          </a>
          <a
            href="/roboboat"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            RoboBoat
          </a>
          <a
            href="/"
            className="px-6 py-3 bg-[#125d99] text-white font-bold rounded-full hover:bg-[#147ab6] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
};

export default FloatPage;