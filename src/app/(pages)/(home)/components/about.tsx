"use client"
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';

import img0 from '@imgs/GroupPhotos/GroupPhoto.jpg';
import img1 from '@imgs/GroupPhotos/DSC04824.jpg';
import img2 from '@imgs/GroupPhotos/DSC04352.jpg';

function About() {
  return (
    <div
      id="AboutRobo"
      className="relative z-0 text-white text-center px-6 py-12 sm:px-12 sm:py-24 bg-gradient-to-b from-[#3100ff] to-[#2403a8] flex flex-col sm:flex-row justify-center gap-5"
    >
      <div className="mt-10 flex flex-col sm:flex-row  gap-5">
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

        <div className="flex flex-col items-start sm:gap-2 sm:min-w-[350px] sm:flex-1.5 sm:ml-5">
          <h1 className="title text-4xl sm:text-6xl font-bold">About RoboSub</h1>
          <p className="text-base sm:text-lg mt-5 text-left">
            RoboSub is an organization at UTD focused on the development of marine robotics. We seek to tap into
            the excitement and creativity seen in robotics teams, and in RoboSub, we work with the added challenge of
            a marine environment. RoboSub&#39;s mission is to bring together individuals who are interested in robotics
            and provide them with the opportunity to practice relevant skills through hands-on, student-driven projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
