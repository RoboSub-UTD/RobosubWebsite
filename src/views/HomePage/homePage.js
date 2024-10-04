import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import WelcomePage from './components/welcomePage';
import AboutRoboSub from './components/aboutRoboSub';
import Navbar from '../univeralComponents/navbar';
import Officers from './components/officers';
import ProjectsSection from './components/projects';
import Ending from '../univeralComponents/ending';
import Awards from './components/awards';


function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0);  // Scrolls to the top of the page
      }, []);
    return(
        <div>
            <ParallaxProvider>
            <Navbar/>
            <WelcomePage/>
            <AboutRoboSub/>
            <Officers/>
            <ProjectsSection/>
            <Awards/>
            <Ending start={"#0d023a"} end={"#000000"}/>
            </ParallaxProvider>
        </div>
    )
}

export default HomePage