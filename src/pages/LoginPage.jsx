import * as React from "react";
import { defer, Link } from "react-router-dom";
import Credentials from "../components/Credentials";
import facebok from "../assets/facebookbl.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
const LoginPage = () => {
  const Checkbox = ({ label }) => {
    return (
      <div className="checkbox-wrapper" >
        <label>
          <input type="checkbox" style={{ marginRight: "10px" }} />
          <span >{label} <a href="">More info</a></span>
        </label>
      </div>
    );
  };
  return (
    <div className="App">
        <div className="login-container">
      <div className="login-top-left">
        <h1>Login</h1>
        <a href="">Forgot your password?</a>
        <Credentials type1="email" type2="password" placeholder1="Email" placeholder2="Password"/>
        <Checkbox label="Keep me logged in - applies to all log in options below."/>
        <button className="wide-black-btn">Email Login</button>
        <div className="reg-btns">
          <div className="logs-mails">
           <a href=""> <div className="google">
              <img src={google} alt="google" />
            </div></a>
            <a href=""><div className="apple">
              <img src={apple} alt="apple" />
            </div></a>
            <a href=""><div className="facebook">
              <img src={facebok} alt="facebook" />
            </div></a>
          </div>
          <p>
            By clicking 'Log In' you agree to our website KicksClub Terms &
            Conditions, Kicks Privacy Notice and Terms & Conditions.
          </p>
        </div>
      </div>
      <div className="login-top-right">
        <h1>Join Kicks Club Get Rewarded Today.</h1>
        <p>
          As kicks club member you get rewarded with what you love for doing
          what you love. Sign up today and receive immediate access to these
          Level 1 benefits:
        </p>
        <ul>
          <li>Free shipping​</li>
          <li>A 15% off voucher for your next purchase​</li>
          <li>Access to Members Only products and sales​</li>
          <li>Access to adidas Running and Training apps​</li>
          <li>Special offers and promotions​</li>
        </ul>
        <p>
          Join now to start earning points, reach new levels and unlock more
          rewards and benefits from adiClub.​
        </p>
        <a href="/register" >
        <button className="wide-black-btn">Join the club</button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
