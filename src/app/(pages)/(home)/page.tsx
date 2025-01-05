
import Welcome from '@/app/(pages)/(home)/components/welcome';
import AboutRoboSub from '@/app/(pages)/(home)/components/about';
import Officers from '@/app/(pages)/components/shared/officers';
import Projects from '@/app/(pages)/components/shared/projects';
import Awards from '@/app/(pages)/components/shared/awards';
import Sponsors from '@/app/(pages)/components/shared/sponsers';
import Ending from '@/app/(pages)/components/ending';
import DepthSection from '@/app/(pages)/(home)/components/depthSection';
import DepartmentsSection from './components/DepartmentsSection';
function HomePage() {
  return (
    <div>   
        <DepthSection/>
        <Welcome />
        <AboutRoboSub />
        <DepartmentsSection/>
        {/* <SponsorsSection/> */}
        {/* <Officers /> */}
        {/* <Projects /> */}
        {/* <Awards /> */}
        {/* <Sponsors /> */}
        
    </div>
  );
}

export default HomePage;
