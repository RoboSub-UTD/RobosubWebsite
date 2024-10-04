import React, {useState} from 'react'
import Navbar from '../univeralComponents/navbar'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

import img1 from '../HomePage/images/subROV.png'
import img2 from '../HomePage/images/projects/Float.png'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setError('');
        navigate('/')

      } catch (err) {
        setError('Failed to login. Please check your credentials.');
      }
    };
    
    return(
        <div className='authContainer'>
        <img className="rovLoginScreen" alt="ROV" src={img1}></img>
        <img className='floatLoginScreen' alt="Tube" src={img2}></img>

        <Navbar/>
        <div className="login-container">
            <div className="login-box">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form id="loginForm" onSubmit={handleLogin}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p>Dont have a account? <Link className="RegisterLink" to="/Register">Register</Link></p>
            </div>
        </div>  
      </div>
    )

    
}

export default Login