'use client';

import React from 'react';
import './projectStyle.css';
import Ending from '../components/ending';
import Navbar from '../components/navbar';
import { Carousel } from 'react-responsive-carousel';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function GeneralProject({
  ProjectName,
  ProjectImage,
  AboutText,
  ImgArr,
}: {
  ProjectName: string;
  ProjectImage: string;
  AboutText: string;
  ImgArr: string[];
}) {
  return (
    <div>
      <ParallaxProvider>
        <Navbar />
        <div className="GeneralProject">
          <div className="ProjectLandingBackground">
            <Parallax
              className="parallax-container"
              translateX={['100px', '-100px']}
            >
              <h1 className="projectTitle">{ProjectName}</h1>
            </Parallax>
            <Parallax translateX={['-200px', '200px']}>
              <img
                className="projectImg"
                src={ProjectImage}
                alt="project-image"
              />
            </Parallax>
            <span className="Projectarrow">&#9662;</span>
          </div>
          <div className="projectAboutSection">
            <Carousel
              className="Carousel"
              showArrows={true}
              emulateTouch={true}
              showThumbs={false}
            >
              {ImgArr.map(
                (img: string | undefined, i: React.Key | null | undefined) => (
                  <img
                    draggable={false}
                    className="carImage"
                    src={img}
                    key={i}
                    alt="project"
                  />
                )
              )}
            </Carousel>
            <div className="AboutIndProject">
              <h1>About</h1>
              <p>{AboutText}</p>
            </div>
          </div>
        </div>
        <Ending start={'black'} end={'black'} />
      </ParallaxProvider>
    </div>
  );
}
