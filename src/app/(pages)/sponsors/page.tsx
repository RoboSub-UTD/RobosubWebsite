'use client';
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      name: 'Title Sponsors',
      color: '#1a6cad',
      sponsors: [
        {
          name: '',
          description:
            'Veolia is a global leader in resource management, dedicated to delivering innovative solutions that drive sustainable development.',
          img: '/imgs/sponsors/veolia.png',
        },
        {
          name: '',
          description:
            'The UTD Jonsson School provides financial and logistical support of our organization to become successful',
          img: '/imgs/sponsors/UTDJonssonSchool.png',
        },
      ],
    },
    {
      name: 'Gold Sponsors',
      color: '#1a6cad',
      sponsors: [
        {
          name: '',
          description:
            'Providing CAD licenses to help us bring our ideas to life',
          img: '/imgs/sponsors/solidWorks.jpg',
        },
        {
          name: '',
          description:
            'Westlake Epoxy is a global manufacturer and supplier of epoxy resin systems. They provided expertise and epoxy to support the manufacturing of our RoboBoat hull. ',
          img: '/imgs/sponsors/Westlake-Epoxy-Logo.png',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#1b1149] py-20 px-4">
      <div className="container mx-auto">
        {/* Call to Action (Moved to Top) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center bg-[#125d99] p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Become a Sponsor
          </h3>
          <h3 className="text-2xl font bold text-[#53cbec]">
            Interested in sponsoring? Help us reach our goal!
          </h3>
          <p className="text-white mb-6 max-w-2xl mx-auto text-justify">
            As a student-led organization, RoboSub at UTD thrives on the
            generosity of sponsors like you. Your support enables us to design
            and build cutting-edge robotic submarines, conduct research, and
            compete in the annual MATE ROV and RoboBoat competitions. By
            partnering with us, you directly contribute to the advancement of
            underwater robotics and empower the next generation of engineers.
          </p>
          <p className="text-white mb-6 max-w-2xl mx-auto text-justify">
            To get more information about sponsorship, please contact our
            President, Ken Shibatani, at ken.shibatani@utdallas.edu.
          </p>

          <button className="px-8 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors duration-300">
            <a
              href="https://drive.google.com/file/d/1SOuD0wU912hXJD6flzoKqWfB3_i47he0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Sponsorship Packet
            </a>
          </button>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Thank you to our sponsors!
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We are grateful for the support of our sponsors who make our
            innovative underwater robotics projects possible. Their
            contributions drive our success and enable technological
            advancement.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="bg-[#125d99] border-none text-center">
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-[#53cbec] mb-2">3</h3>
              <p className="text-white">Active Sponsors</p>
            </CardContent>
          </Card>
          <Card className="bg-[#125d99] border-none text-center">
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-[#53cbec] mb-2">$15K+</h3>
              <p className="text-white">Annual Support</p>
            </CardContent>
          </Card>
          <Card className="bg-[#125d99] border-none text-center">
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-[#53cbec] mb-2">
                100+ Teams Worldwide
              </h3>
              <p className="text-white">
                Audience Reached Through Events and Competitions
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sponsor Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="space-y-6">
              <motion.h3
                variants={cardVariants}
                className={`text-2xl font-bold text-[#1a6cad] mb-6`}
              >
                {tier.name}
              </motion.h3>
              <div className="grid grid-cols-1 gap-6">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div key={sponsorIndex} variants={cardVariants}>
                    <Card className="bg-[#125d99] border-none hover:bg-[#1a6cad] transition-all duration-300 h-full">
                      <CardHeader>
                        <Image
                          src={sponsor.img}
                          alt={sponsor.name}
                          width={300}
                          height={200}
                          className="rounded-lg self-center"
                        />
                        <h4 className="text-xl font-bold text-white text-justify">
                          {sponsor.name}
                        </h4>
                        <p className="text-gray-300 text-justify">
                          {sponsor.description}
                        </p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsSection;
