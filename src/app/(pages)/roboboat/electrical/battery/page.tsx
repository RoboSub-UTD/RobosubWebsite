"use client";

import React from "react";

const BatteryPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/battery-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Battery System</h1>
          <p className="text-xl max-w-3xl">
            Reliable and efficient power solutions to drive Luna's autonomy with safety and scalability in mind.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            Luna’s battery system is designed to ensure a stable and reliable power supply for its propulsion system and onboard electronics. The modular configuration allows for flexibility and easy maintenance while maintaining safety and efficiency.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>Modular Design:</strong> Includes separate battery packs for propulsion and electronics, ensuring isolation and reliability.
            </li>
            <li>
              <strong>High Capacity:</strong> Composed of custom 4s4p and 4s8p Lithium-Ion battery packs, providing up to 20Ah capacity at 14.4V.
            </li>
            <li>
              <strong>Safety Measures:</strong> Features vented, acid-resistant containers with compliance to ABYC and U.S. Coast Guard specifications.
            </li>
            <li>
              <strong>Swappable Configuration:</strong> Includes a standby 4s4p pack for quick replacements during operation.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Technical Details</h3>
          <p className="text-gray-300 mb-4">
            Luna’s battery system is designed around three battery packs:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>4s8p Pack:</strong> Powers the four T200 thrusters, delivering high current output for propulsion.
            </li>
            <li>
              <strong>4s4p Pack:</strong> Dedicated to powering onboard electronics via buck converters.
            </li>
            <li>
              <strong>Standby 4s4p Pack:</strong> Acts as a backup for quick replacement in case of failure.
            </li>
          </ul>
          <p className="text-gray-300 mb-4">
            The battery packs use Molicel P28A cells for their high capacity and reliability. Each pack is housed in an Attwood Marine 9082-1 container, ensuring safety with features like ventilation and acid resistance.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Safety and Reliability</h3>
          <p className="text-gray-300 mb-4">
            The battery system is equipped with an emergency stop mechanism to prevent accidents. An Arduino Mega, coupled with a Taranis X9D Plus transmitter and FrSky X8R receiver, controls a MOSFET that energizes a relay coil in a contactor, allowing or cutting off current flow as needed.
          </p>
          <p className="text-gray-300">
            A physical emergency stop button is also included, providing an additional layer of safety by immediately cutting off power in critical situations.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram showcasing Luna's battery configuration and power distribution system.
          </p>
          <img
            src="/imgs/projects/battery-diagram.jpg"
            alt="Battery System Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Learn about the innovative components powering our Autonomous Surface Vehicle.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/electrical/safety"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Safety
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

export default BatteryPage;