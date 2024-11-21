import '../styles/welcome.css';
import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import rovImg from '@imgs/misc/subROV.png';

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
        wave1Ref.current.style.backgroundPositionX = 400 + value + 'px';
      }
      if (wave2Ref.current) {
        wave2Ref.current.style.backgroundPositionX = 300 + value + 'px';
      }
      if (wave3Ref.current) {
        wave3Ref.current.style.backgroundPositionX = 200 + value + 'px';
      }
      if (wave4Ref.current) {
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
    <div id="Home">
      <section>
        <div className="title-con">
          <Parallax
            className="parallax-container"
            translateX={['-100px', '100px']}
          >
            <h1 className="title-text">
              Dive deep with <span style={{ color: 'white ' }}>RoboSub</span>
            </h1>
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
  );
}
