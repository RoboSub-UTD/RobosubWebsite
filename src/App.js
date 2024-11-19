import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage/homePage';
import './index.css'
import MateROV from './views/ProjectViews/projects/MateROV'
import FloatTube from './views/ProjectViews/projects/FloatTube';
import MiniFloat from './views/ProjectViews/projects/MiniFloat';
import RoboBoat from './views/ProjectViews/projects/Roboboat';
function App() {
  return (
    <div className="App">
        {/* <h1 style={{color: "white"}}>hello</h1> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="Projects/MateROV" element={<MateROV/>}/>
            <Route path="Projects/FloatTube" element={<FloatTube/>}/>
            <Route path="Projects/MiniFloat" element={<MiniFloat/>}/>
            <Route path="Projects/Roboboat" element={<RoboBoat/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
