import React from 'react';
import './components.css';

const Login = () => {
  const handleLogin = () => {
    const username = document.querySelector('.inputbox').value;
    const password = document.querySelectorAll('.inputbox')[1].value;
    if (username === '1061287' && password === '1061287') {
      window.location.href = '/pages/Dashboard';
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <div className="page">
      <div className="logindiv">
        <div className="titlediv">
          <p className="title">CUEA Student Portal</p>
        </div>
        <div className="inputdiv">
          <div className="formdiv">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="label">Username:</label>
            <input className="inputbox" type="text" placeholder="Username" />
          </div>
          <div className="formdiv">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="label">Password:</label>
            <input
              className="inputbox"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="buttondiv">
            <button type="button" className="buttonforgot">
              Forgot password?
            </button>
            <button onClick={handleLogin} type="button" className="buttonsign">
              Sign in
            </button>
          </div>
        </div>
        <div className="imgdiv">
          <img
            src="https://studentportal.cuea.edu/images/logo.png"
            alt="portal"
            className="imgportal"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
