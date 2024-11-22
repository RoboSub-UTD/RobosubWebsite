'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '@/app/components/navbar';
import Welcome from '@/app/(pages)/(home)/components/welcome';
import AboutRoboSub from '@/app/(pages)/(home)/components/about';
import Officers from '@/app/(pages)/(home)/components/officers';
import Projects from '@/app/(pages)/(home)/components/projects';
import Awards from '@/app/(pages)/(home)/components/awards';
import Sponsors from '@/app/(pages)/(home)/components/sponsers';
import Ending from '@/app/components/ending';
import React, { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
      <ParallaxProvider>
        <Navbar />
        <Welcome />
        <AboutRoboSub />
        <Officers />
        <Projects />
        <Awards />
        <Sponsors />
        <Ending start={'#080124'} end={'#000000'} />
      </ParallaxProvider>
    </div>
  );
}

export default HomePage;
