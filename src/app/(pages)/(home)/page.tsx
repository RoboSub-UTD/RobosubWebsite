
import Welcome from '@/app/(pages)/(home)/components/welcome';
import AboutRoboSub from '@/app/(pages)/(home)/components/about';
import DepthSection from '@/app/(pages)/(home)/components/depthSection';
import DepartmentsSection from './components/DepartmentsSection';
import CallToAction from './components/CallToAction';

function HomePage() {
  return (
    <div>   
        <DepthSection/>
        <Welcome />
        <AboutRoboSub />
        <DepartmentsSection/>
        <CallToAction/>        
    </div>
  );
}

export default HomePage;
