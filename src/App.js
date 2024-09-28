import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage/homePage';
import './index.css'
import Admin from './views/AdminPage/Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Admin" element={<Admin/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
