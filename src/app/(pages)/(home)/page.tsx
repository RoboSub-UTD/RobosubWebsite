
import Welcome from '@/app/(pages)/(home)/components/welcome';
import AboutRoboSub from '@/app/(pages)/(home)/components/about';
import Officers from '@/app/(pages)/(home)/components/officers';
import Projects from '@/app/(pages)/(home)/components/projects';
import Awards from '@/app/(pages)/(home)/components/awards';
import Sponsors from '@/app/(pages)/(home)/components/sponsers';
import Ending from '@/app/(pages)/components/ending';

function HomePage() {
  return (
    <div>   
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
