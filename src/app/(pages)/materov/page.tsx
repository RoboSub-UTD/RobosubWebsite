'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MATEROVPage = () => {
  return (
    <main className="min-h-screen bg-[#1b1149] text-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/logos/Hydromeda.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">MATE ROV</h1>
          <p className="text-xl max-w-3xl">
            Pioneering underwater robotics through innovation, teamwork, and
            engineering excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">
            The MATEROV team designs and builds remotely operated vehicles
            (ROVs) to compete in the MATE International ROV Competition. The
            competition challenges students to solve real-world problems by
            creating underwater robots capable of performing various tasks, such
            as marine exploration, scientific research, and resource management.
          </p>

          <h3 className="text-3xl font-bold mb-4">Competition Highlights</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>
              <strong>2024 Pioneer Class:</strong> Achieved 3rd place overall
              and won 1st place in Technical Documentation.
            </li>
            <li>
              <strong>Tasks:</strong> Designed to mimic real-world challenges,
              such as underwater data collection, pipeline inspection, and
              marine life monitoring.
            </li>
            <li>
              <strong>Collaboration:</strong> Combines expertise from
              mechanical, electrical, and software teams to create a robust and
              functional ROV.
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-[#125d99] py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Abstract */}
        <Card className="bg-[#1b1149] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Abstract</h3>
            <p className="text-gray-300">
              VESPA's design emphasizes modularity, accessibility, and
              simplicity. Using advanced CAD tools and simulation software, we
              ensured optimal performance while focusing on safety, reliability,
              and efficiency. VESPA marks a milestone in Hydromeda's journey
              into underwater robotics.
            </p>
          </CardContent>
        </Card>

        {/* Safety */}
        <Card className="bg-[#1b1149] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Safety</h3>
            <p className="text-gray-300">
              Safety is a top priority. VESPA incorporates features like fuses,
              circuit breakers, and thruster guards, ensuring safe operation
              while preventing potential hazards. Clear communication and safety
              protocols are followed during all operations.
            </p>
          </CardContent>
        </Card>

        {/* Mechanical Design */}
        <Card className="bg-[#1b1149] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mechanical Design
            </h3>
            <p className="text-gray-300">
              VESPA's robust chassis is built using HDPE panels and aluminum
              extrusions, providing rigidity while maintaining a lightweight
              design. Modularity allows for easy integration of tools and
              components.
            </p>
          </CardContent>
        </Card>

        {/* Electrical Design */}
        <Card className="bg-[#1b1149] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Electrical Design
            </h3>
            <p className="text-gray-300">
              The electrical systems focus on power efficiency, modularity, and
              seamless integration with software. Components like custom PCBs
              and Blue Robotics' hardware ensure reliable and efficient
              operation.
            </p>
          </CardContent>
        </Card>

        {/* Software Design */}
        <Card className="bg-[#1b1149] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Software Design
            </h3>
            <p className="text-gray-300">
              VESPA's software integrates advanced control systems using BlueOS
              and ArduSub. Features like SLAM, navigation, and task execution
              ensure robust and efficient underwater operations.
            </p>
          </CardContent>
        </Card>

        {/* Mission Tooling */}
        <Card className="bg-[#1b1149] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mission Tooling
            </h3>
            <p className="text-gray-300">
              Equipped with a pneumatic gripper, spool tool, rotating claw, and
              static hook, VESPA can tackle a variety of underwater tasks,
              showcasing versatility and precision.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <section className="text-center pt-16 bg-[#1b1149]">
        <h3 className="text-3xl font-bold mb-6">
          Explore More About Our Teams
        </h3>
        <p className="text-gray-300 mb-8">
          Learn about the other projects and departments driving innovation at
          RoboSub.
        </p>
        <div className="space-x-4">
          <a
            href="/roboboat"
            className="px-6 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors"
          >
            RoboBoat Project
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

export default MATEROVPage;
