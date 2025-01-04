"use client";

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import img0 from '@imgs/GroupPhotos/GroupPhoto.jpg';
import img1 from '@imgs/GroupPhotos/DSC04824.jpg';
import img2 from '@imgs/GroupPhotos/DSC04352.jpg';

const titleVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }, // Delayed animation
};

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="AboutRobo"
      className="relative z-0 text-white text-center px-6 py-12 sm:px-12 sm:py-24  bg-[#1b1149] flex flex-col sm:flex-row justify-center gap-5"
    >
      <div className="mt-10 flex flex-col sm:flex-row gap-5">
        {/* Static Carousel */}
        <div>
          <Carousel
            showStatus={false}
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            infiniteLoop={true}
          >
            <div>
              <img
                className="rounded-lg opacity-100 max-h-[400px] sm:max-h-[600px] max-w-[100%] sm:max-w-[800px] mx-auto"
                src={img0.src}
                alt="groupPhoto"
              />
              <p className="text-sm sm:text-base">Hydromeda Team 2023-2024 with Crush Depth post award ceremony</p>
            </div>
            <div>
              <img
                className="rounded-lg opacity-100 max-h-[400px] sm:max-h-[600px] max-w-[100%] sm:max-w-[800px] mx-auto"
                src={img1.src}
                alt="teamImage"
              />
              <p className="text-sm sm:text-base">Hydromeda Team 2023-2024 during award ceremony</p>
            </div>
            <div>
              <img
                className="rounded-lg opacity-100 max-h-[400px] sm:max-h-[600px] max-w-[100%] sm:max-w-[800px] mx-auto"
                src={img2.src}
                alt="Jesuit"
              />
              <p className="text-sm sm:text-base">
                Hydromeda Team 2023-2024 speaking with other competitors from Jesuit High School
              </p>
            </div>
          </Carousel>
        </div>

        {/* Animated Text */}
        <motion.div
          className="flex flex-col items-start sm:gap-2 sm:min-w-[350px] sm:flex-1.5 sm:ml-5 bg-[#125d99] p-4 rounded-lg h-1/2"
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          <motion.h1
            className="title text-4xl sm:text-6xl font-bold"
            variants={titleVariants}
          >
            About RoboSub
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg mt-5 text-left"
            variants={paragraphVariants}
          >
            RoboSub is an organization at UTD focused on the development of marine robotics. We seek to tap into
            the excitement and creativity seen in robotics teams, and in RoboSub, we work with the added challenge of
            a marine environment. RoboSub&#39;s mission is to bring together individuals who are interested in robotics
            and provide them with the opportunity to practice relevant skills through hands-on, student-driven projects.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
