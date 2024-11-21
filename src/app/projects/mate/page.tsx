'use client';

import React, { useEffect } from 'react';
import GeneralProject from '../GeneralProject';

export default function Mate() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const ProjectName = 'VespaROV';
  const projecImg = '/imgs/subROV.png';
  const aboutText = `Named after the swift and agile vespa wasp, 
                           VESPA embodies a compact design while maximizing functionality. 
                           Our team utilized advanced mechanical and electrical CAD tools, 
                           along with robust simulation software, to ensure VESPA's exceptional 
                           performance. This project marks our first ever venture into ROV design 
                           and development, representing the culmination of relentless effort and 
                           innovation from our dedicated team members`;

  const ImgArr = [
    '/imgs/mate/mate(2).JPG',
    '/imgs/mate/MateROV1.jpg',
    '/screenshot.png',
  ];

  return (
    <GeneralProject
      ProjectName={ProjectName}
      ProjectImage={projecImg}
      AboutText={aboutText}
      // @ts-ignore
      ImgArr={ImgArr}
    />
  );
}
