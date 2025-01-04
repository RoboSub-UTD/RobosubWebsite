
import Welcome from '@/app/(pages)/(home)/components/welcome';
import AboutRoboSub from '@/app/(pages)/(home)/components/about';
import Officers from '@/app/(pages)/components/shared/officers';
import Projects from '@/app/(pages)/components/shared/projects';
import Awards from '@/app/(pages)/components/shared/awards';
import Sponsors from '@/app/(pages)/components/shared/sponsers';
import Ending from '@/app/(pages)/components/ending';
import DepthSection from '@/app/(pages)/(home)/components/depthSection';
import DepartmentsSection from './components/DepartmentsSection';
import SponsorsSection from './components/sponsors';
function HomePage() {
  return (
    <div>   
        <DepthSection/>
        <Welcome />
        <AboutRoboSub />
        <DepartmentsSection/>
        <SponsorsSection/>
        {/* <Officers /> */}
        {/* <Projects /> */}
        {/* <Awards /> */}
        {/* <Sponsors /> */}
        <Ending start={'#1b1149'} end={'#000000'} />
    </div>
  );
}

export default HomePage;
