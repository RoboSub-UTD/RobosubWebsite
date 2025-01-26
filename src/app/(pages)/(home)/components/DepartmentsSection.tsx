"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { departments } from 'Website.Config';

const Bubble = ({ size, delay, left } : any) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-[#53cbec] opacity-20`}
      style={{
        width: size,
        height: size,
        left: left ? `${Math.random() * 15}%` : `${85 + Math.random() * 15}%`
      }}
      initial={{ y: '100vh' }}
      animate={{ 
        y: '-100vh',
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    />
  );
};

const BubbleColumn = ({ side } : any) => {
  return (
    <div className={`fixed ${side}-0 top-0 w-1/6 h-screen pointer-events-none`}>
      {[...Array(8)].map((_, i) => (
        <Bubble
          key={i}
          size={10 + Math.random() * 30}
          delay={Math.random() * 10}
          left={side === 'left'}
        />
      ))}
    </div>
  );
};

const DepartmentsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1149] py-20 px-4 relative overflow-hidden">
      {/* Bubble columns */}
      <BubbleColumn side="left" />
      <BubbleColumn side="right" />
              <motion.div
                className="absolute bottom-44 right-10 w-96 h-96 rounded-full bg-[#53cbec] opacity-10 blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.15, 0.1, 0.15],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Departments</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Each department plays a crucial role in our team's success, bringing together diverse skills and expertise to create an advanced marine vehicles.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="bg-[#125d99] border-none hover:bg-[#1a6cad] h-40 transition-colors duration-300 group backdrop-blur-sm bg-opacity-90">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-[#1b1149] group-hover:bg-[#232066] transition-colors duration-300">
                        <Icon size={24} className="text-[#53cbec]" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl mb-2">{dept.name}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {dept.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        > */}
          {/* <p className="text-[#53cbec] text-lg font-medium">
            Want to join one of our departments?
          </p> */}
          {/* <button className="mt-4 px-8 py-3 bg-[#53cbec] text-[#1b1149] font-bold rounded-full hover:bg-[#7dd7ef] transition-colors duration-300">
            Join Our Team
          </button> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default DepartmentsSection;