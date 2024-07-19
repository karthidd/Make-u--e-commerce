import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" placeholder='Your name' />
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder='Email address' />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the Terms of Use & Privacy Policy.
          </label>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
