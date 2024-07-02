import React, { useState } from 'react';
import "../style/login.css";
import { useFirebase } from '../context/Firebase';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

function Login() {
  const firebaseComponent = useFirebase();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await firebaseComponent.loginUser(loginEmail, loginPassword);
    navigate('/travel');
  }

  const googleLogin = () => {
    firebaseComponent.google();
  }
  
  

  return (
    <>
      <Navbar />
      <div className="main-login-container">
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <form>
          <input 
            type="email" 
            placeholder="Email" 
            id="input3" 
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)} 
          />
          <br />
          <input 
            type="password" 
            placeholder="Password" 
            id="input4"
            value={loginPassword} 
            onChange={(e) => setLoginPassword(e.target.value)} 
          />
        </form>
        <div className="btn-container">
          <button id="login-btn" onClick={handleLogin}>Login</button>
          <button id="signup-btn-google" onClick={googleLogin}>Log In Using Google</button> 
        </div>

        <div className="register-redirect-div">
          <p className='register-form'>New to TripWise <a href="/register" className='register-here-link'>Register Here</a></p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
