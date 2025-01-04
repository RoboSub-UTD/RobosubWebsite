"use client"
import '../styles/welcome.css';
import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import rovImg from '@imgs/misc/subROV.png';
import { Carousel } from 'react-responsive-carousel';
import { cn } from "@/lib/utils";

import img0 from '@imgs/GroupPhotos/GroupPhoto.jpg';
import img1 from '@imgs/GroupPhotos/DSC04824.jpg';
import img2 from '@imgs/GroupPhotos/DSC04352.jpg';


export default function Welcome() {
  // Create refs for each wave
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  const wave3Ref = useRef(null);
  const wave4Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY; // Corrected to window.scrollY for the scroll position
      if (wave1Ref.current) {
        // @ts-expect-error ...
        wave1Ref.current.style.backgroundPositionX = 400 + value + 'px';
      }
      if (wave2Ref.current) {
        // @ts-expect-error ...
        wave2Ref.current.style.backgroundPositionX = 300 + value + 'px';
      }
      if (wave3Ref.current) {
        // @ts-expect-error ...
        wave3Ref.current.style.backgroundPositionX = 200 + value + 'px';
      }
      if (wave4Ref.current) {
        // @ts-expect-error ...
        wave4Ref.current.style.backgroundPositionX = 100 + value + 'px';
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ParallaxProvider>
    <div id="Home">
      <section>
      <div className="absolute inset-0 flex justify-center items-center">
        <Carousel
          showStatus={false}
          autoPlay={true}
          showIndicators={false}
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
        <img className="rounded-full" src={img0.src} alt="groupPhoto" />
          </div>
          <div>
        <img className="rounded-full" src={img1.src} alt="teamImage" />
          </div>
          <div>
        <img className="rounded-full" src={img2.src} alt="Jesuit" />
          </div>
        </Carousel>
      </div>

        <div className="title-con">
          <Parallax className="text-center" translateX={['-100px', '100px']}>
            <div className="relative w-3/4 mx-auto rounded-lg overflow-hidden bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl">
              <div className="absolute inset-0"></div>
              <h1 className={cn(
              "text-[7vw] font-bold p-8 relative z-10",
              "bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text",
              "tracking-tight leading-none",
              "[text-shadow:_2px_2px_0_rgb(30_58_138_/_100%),_-2px_-2px_0_rgb(191_219_254_/_50%)]",
              )}>
              Dive deep with{' '}
              <span className={cn(
                "bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text",
                "[text-shadow:_2px_2px_0_rgb(59_130_246_/_100%),_-2px_-2px_0_rgb(255_255_255_/_50%)]",
              )}>
                RoboSub
              </span>
              </h1>
            </div>
          </Parallax>

          <Parallax translateY={[-100, 100]} translateX={['200px', '-300px']}>
            <img src={rovImg.src} alt="sub" className="sub-photo"></img>
          </Parallax>
        </div>

        <div className="wave" ref={wave1Ref} id="wave1"></div>
        <div className="wave" ref={wave2Ref} id="wave2"></div>
        <div className="wave" ref={wave3Ref} id="wave3"></div>
        <div className="wave" ref={wave4Ref} id="wave4"></div>
      </section>
    </div>
    </ParallaxProvider>
  );
}
