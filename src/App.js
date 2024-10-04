import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage/homePage';
import './index.css'
import Admin from './views/AdminPage/Admin';
import Login from './views/loginPage/Login';
import Register from './views/loginPage/Register';
import MateROV from './views/ProjectViews/MateROV'
import FloatTube from './views/ProjectViews/FloatTube';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="Projects/MateROV" element={<MateROV/>}/>
          <Route path="Projects/FloatTube" element={<FloatTube/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
