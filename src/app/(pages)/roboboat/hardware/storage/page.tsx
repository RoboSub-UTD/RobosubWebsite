'use client';

import React from 'react';

const StoragePage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/projects/storage-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Modular Storage System</h1>
          <p className="text-xl max-w-3xl">
            Luna's modular storage design ensures safe and efficient housing for
            electronics and batteries while prioritizing accessibility.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            The modular storage system is designed to house Luna’s electronics
            and batteries securely while allowing for easy access and
            maintenance. Its design emphasizes safety, modularity, and
            efficiency.
          </p>

          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>IP67-Rated Container:</strong> Protects sensitive
              electronics from water and dust ingress.
            </li>
            <li>
              <strong>Grid Platform with Heat Inserts:</strong> Allows secure
              and customizable placement of components.
            </li>
            <li>
              <strong>Dedicated Battery Storage:</strong> Isolates batteries in
              vented, acid-resistant containers to ensure safety.
            </li>
            <li>
              <strong>Modular Design:</strong> Enables quick adjustments and
              upgrades to electrical systems.
            </li>
            <li>
              <strong>Compact and Lightweight:</strong> Optimizes space usage
              without adding unnecessary weight.
            </li>
          </ul>

          <h3 className="text-3xl font-bold mt-12 mb-4">Electronics Storage</h3>
          <p className="text-gray-300 mb-4">
            The electronics storage system is housed within a 50L IP67-rated
            container. A custom grid platform with heat inserts lines the base,
            enabling modular and secure placement of various components. This
            design ensures optimal wiring organization and minimizes the risk of
            component displacement during operation.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Battery Storage</h3>
          <p className="text-gray-300 mb-4">
            To address safety concerns, the battery packs are housed in separate
            Attwood Marine 9082-1 containers. These containers are vented,
            acid-resistant, and compliant with ABYC and U.S. Coast Guard
            specifications. By isolating the batteries, the team ensures the
            safety of both the batteries and other electronics in the event of
            failure.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-4">Why It Matters</h3>
          <p className="text-gray-300">
            The modular storage system is critical to Luna’s success. By
            prioritizing safety, accessibility, and flexibility, the system
            supports efficient operation and maintenance, ensuring Luna can
            adapt to the demands of competition.
          </p>
        </div>
      </section>

      {/* Image or Diagram Section */}
      <section className="py-16 px-6 bg-[#125d99]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">System Diagram</h3>
          <p className="text-gray-200 mb-8">
            Below is a diagram illustrating Luna’s modular storage system for
            electronics and batteries.
          </p>
          <img
            src="/imgs/projects/roboboat/electric_storage.png"
            alt="Storage System Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">Explore More About Luna</h3>
        <p className="text-gray-300 mb-8">
          Discover how Luna’s hardware systems work together to achieve its
          mission.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat/hardware/launchers"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            Ball and Water Launchers
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

export default StoragePage;
