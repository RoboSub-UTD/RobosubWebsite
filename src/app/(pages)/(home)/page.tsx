
import Welcome from '@/app/(pages)/(home)/components/welcome';
import AboutRoboSub from '@/app/(pages)/(home)/components/about';
import Officers from '@/app/(pages)/(home)/components/officers';
import Projects from '@/app/(pages)/(home)/components/projects';
import Awards from '@/app/(pages)/(home)/components/awards';
import Sponsors from '@/app/(pages)/(home)/components/sponsers';
import Ending from '@/app/components/ending';
import React, { useEffect } from 'react';
import Navbar from '@/app/components/navbar';

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Welcome />
        <AboutRoboSub />
        <Officers />
        <Projects />
        <Awards />
        <Sponsors />
        <Ending start={'#080124'} end={'#000000'} />
    </div>
  );
}

export default HomePage;
