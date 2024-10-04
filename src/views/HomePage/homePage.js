import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import WelcomePage from './components/welcomePage';
import AboutRoboSub from './components/aboutRoboSub';
import Navbar from '../univeralComponents/navbar';
import Officers from './components/officers';
import ProjectsSection from './components/projects';
import Ending from '../univeralComponents/ending';
import Awards from './components/awards';
import Sponsors from './components/Sponsors';


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
            <Sponsors/>
            <Ending start={"#080124"} end={"#000000"}/>
            </ParallaxProvider>
        </div>
    )
}

export default HomePage