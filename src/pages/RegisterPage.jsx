import * as React from "react";
import facebok from "../assets/facebookbl.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import Credentials from "../components/Credentials";
import { defer, Link } from "react-router-dom";

const RegisterPage = () => {
  const Checkbox = (props) => {
    return (
      <div className="checkbox-wrapper">
        <label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            style={{ marginRight: "10px" }}
          />
          <span>{props.label}</span>
        </label>
      </div>
    );
  };
  return (
    <div className="register-container">
      <div className="reg-top-left">
        <h1>Register</h1>
        <p>Sign up with</p>
        <div className="reg-btns">
          <div className="logs-mails">
            <a href="">
              {" "}
              <div className="google">
                <img src={google} alt="google" />
              </div>
            </a>
            <a href="">
              <div className="apple">
                <img src={apple} alt="apple" />
              </div>
            </a>
            <a href="">
              <div className="facebook">
                <img src={facebok} alt="facebook" />
              </div>
            </a>
          </div>
        </div>
        <p>OR</p>
        <h2>Your Name</h2>
        <Credentials
          type1="name"
          type2="name"
          placeholder1="First Name"
          placeholder2="Last Name"
        />
        <h2>Gender</h2>
        <div className="gender-selector">
          <Checkbox label="Male" value="male" type="radio" name="gender"/>
          <Checkbox label="Female" value="female" type="radio"  name="gender"/>
          <Checkbox label="Other" value="other" type="radio"  name="gender"/>
        </div>
        <h2>Login Details</h2>
        <Credentials
          type1="email"
          type2="password"
          placeholder1="Email"
          placeholder2="Password"
        />
        <p>
          Minimum 8 characters with at least one uppercase, one lowercase, one
          special character and a number
        </p>
        <div className="checkbox-wrapper" >
        <label>
          <input type="checkbox" style={{ marginRight: "10px" }} />
          <span >By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span>
        </label>
      </div>
      <div className="checkbox-wrapper" >
        <label>
          <input type="checkbox" style={{ marginRight: "10px" }} />
          <span >Keep me logged in - applies to all log in options below. <a href="" style={{textDecoration:"none"}}>More info</a></span>
        </label>
      </div>
      <button className="wide-black-btn">Register</button>
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
  );
};

export default RegisterPage;
