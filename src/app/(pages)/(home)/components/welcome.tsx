"use client"
import '../styles/welcome.css';
import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import rovImg from '@imgs/misc/subROV.png';
import { Carousel } from 'react-responsive-carousel';
import { cn } from "@/lib/utils";
import waveSvg from '@imgs/misc/wave.svg';
import Image from 'next/image';
import img0 from '@imgs/GroupPhotos/GroupPhoto.jpg';
import img1 from '@imgs/GroupPhotos/DSC04824.jpg';
import img2 from '@imgs/GroupPhotos/DSC04352.jpg';
import Wave from './wave';

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
        wave1Ref.current.style.transform = `translateX(${400 + value}px)`;
      }
      if (wave2Ref.current) {
        // @ts-expect-error ...
        wave2Ref.current.style.transform = `translateX(${300 + value}px)`;
      }
      if (wave3Ref.current) {
        // @ts-expect-error ...
        wave3Ref.current.style.transform = `translateX(${200 + value}px)`;
      }
      if (wave4Ref.current) {
        // @ts-expect-error ...
        wave4Ref.current.style.transform = `translateX(${100 + value}px)`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const starsContainer = document.querySelector('.shining-stars');
    if (starsContainer) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`; // Random delay between 0 and 5 seconds
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <ParallaxProvider>
    <div id="Home">
      <section>
        {/* Shining stars background */}
        <div className="shining-stars"></div>

        <div className="title-con">
          <Parallax className="text-center" translateX={['-100px', '100px']}>
            <div className="relative w-3/4 mx-auto rounded-lg overflow-hidden ">
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
        
        <Image
          src={waveSvg}
          alt="wave"
          className="absolute bottom-0 left-0 w-full animate-wave1"
          ref={wave1Ref}
        />
        <Image
          src={waveSvg}
          alt="wave"
          className="absolute bottom-0 left-0 w-full opacity-75 animate-wave2"
          ref={wave2Ref}
        />
        <Image
          src={waveSvg}
          alt="wave"
          className="absolute bottom-0 left-0 w-full opacity-50 animate-wave3"
          ref={wave3Ref}
        />
        {/* <Image
          src={waveSvg}
          alt="wave"
          className="absolute bottom-0 left-0 w-full  animate-wave4"
          ref={wave4Ref}
        /> */}

      </section>
    </div>
    </ParallaxProvider>
  );
}
