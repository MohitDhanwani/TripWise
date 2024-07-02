import React, { useState } from 'react';
import "../style/login.css";
import { useFirebase } from '../context/Firebase';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

function Register() {
  const firebaseComponent = useFirebase();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await firebaseComponent.registerUser(loginEmail, loginPassword);
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
        <h1 className="login-heading">Register</h1>
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
          <button id="login-btn" onClick={handleRegister}>Create Account</button>
          <button id="signup-btn-google" onClick={googleLogin}>Create account Using Google</button> 
        </div>

        <div className="register-redirect-div">
          <p className='register-form'>Already a user? <a href="/login" className='register-here-link'>Login here</a></p>
        </div>
      </div>
      </div>
     
    </>
  );
}

export default Register;
