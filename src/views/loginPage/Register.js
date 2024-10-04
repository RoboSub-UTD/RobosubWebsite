import React, { useState } from 'react';
import Navbar from '../univeralComponents/navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase';
import { doc, setDoc } from 'firebase/firestore';
import './styles/Login.css';
import img1 from '../HomePage/images/subROV.png'
import img2 from '../HomePage/images/projects/Float.png'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        // Step 1: Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Step 2: Save user info in Firestore with their uid
        await setDoc(doc(db, 'users', user.uid), {
          email: email,
          uid: user.uid // Optionally store the email in Firestore
        });
    
        setError('');
        navigate('/');
    
        // Optionally redirect to login or another page
      } catch (err) {
        setError('Failed to register. Please try again.');
        console.log(err)
      }
  };

  return (
    <div className='authContainer'>
      <img className="rovLoginScreen" alt="ROV" src={img1}></img>
      <img className='floatLoginScreen' alt="Tube" src={img2}></img>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Register</h2>
          {error && <p className="error-message">{error}</p>}
          <form id="registerForm" onSubmit={handleRegister}>
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
            <button type="submit">Register</button>
          </form>
          <p>Already have a account? <Link className="RegisterLink"to="/Login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
