import WelcomePage from './views/welcomePage';
import AboutRoboSub from './views/aboutRoboSub';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './views/navbar';
import Officers from './views/officers';
import ProjectsSection from './views/projects';
import Ending from './views/ending';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Navbar/>
        <WelcomePage/>
        <AboutRoboSub/>
        <Officers/>
        <ProjectsSection/>
        <Ending/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
