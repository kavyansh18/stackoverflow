import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import {useNavigate,Link} from 'react-router-dom'
import icon from "../../assets/logo.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";



const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      alert("Enter email and password")
    }
    if(isSignup){
      if(!name){
        alert("Enter a name to continue")
      }
      dispatch(signup({name,email,password},navigate))
    }else{
      dispatch(login({email,password},navigate))
    }
  }

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Name</h4>
              <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}} />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <Link to="/Auth/RequestReset" className="forgetpass">
                Forget Password?
              </Link>
              )}
            </div>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Password must contain atleast eight, characters including
                atleast 1 letter and 1 number
              </p>
            )}
          </label>
          {isSignup && (
            <label
              htmlFor="check"
              style={{ display: "flex", alignItems: "center",flexDirection:'row' }}
            >
              <input
                type="checkbox"
                name="check"
                id="check"
                style={{ marginRight: 10 }}
              />
              <span style={{ fontSize: "13px" }}>
                I agree to the terms and conditions
              </span>
            </label>
          )}
          <br />
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
          {isSignup && (
            <p
              style={{
                color: "#666767",
                fontSize: "13px",
                marginBottom: "5px",
              }}
            >
              By clickig "Sign up", you agree to our
              <span style={{ color: "#007ac6" }}> terms of service</span>,
              <span style={{ color: "#007ac6" }}> privacy policy</span> and
              <span style={{ color: "#007ac6" }}> cookie poilicy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
