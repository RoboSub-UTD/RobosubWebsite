import { ParallaxProvider } from 'react-scroll-parallax';
import WelcomePage from './components/welcomePage';
import AboutRoboSub from './components/aboutRoboSub';
import Navbar from '../univeralComponents/navbar';
import Officers from './components/officers';
import ProjectsSection from './components/projects';
import Ending from './components/ending';
import Awards from './components/awards';


function HomePage(){
    return(
        <div>
            <ParallaxProvider>
            <Navbar/>
            <WelcomePage/>
            <AboutRoboSub/>
            <Officers/>
            <ProjectsSection/>
            <Awards/>
            <Ending/>
            </ParallaxProvider>
        </div>
    )
}

export default HomePage