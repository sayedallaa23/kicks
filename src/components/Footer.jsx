import React, { useState } from "react";
import logo from "../assets/whlogo.svg";
import footerlogo from "../assets/fologo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tiktok.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../store/AuthContext";

function Footer() {
  const navigate = useNavigate();
  const value = React.useContext(Authcontext);
  const [wamess,setwarmess] = useState(false)
  return (
    <div className="footer">
      <footer>
        <div className="footer-st-sec">
          <div className="left-sec">
            <h3>
              Join our KicksPlus <br /> Club & get 15% off
            </h3>
            <p>Sign up for free! Join the community.</p>
            <form action=""className="footer-submit-form">
              <input type="email" placeholder="Email address" />
              <button className="black-btn" onClick={()=>{
                if (!value[0]){
                  navigate("/register")
                }
                else{
                  setwarmess(true)
                  
                }
                
              }}>SUBMIT</button>
              {wamess&&<p style={{marginTop:"6px",fontSize:"15px"}}>you are already logged in </p>}
            </form>
          </div>
          <div className="right-sec">
            <img src={logo} alt="" srcset="" />
          </div>
        </div>
        <div className="footer-nd-sec">
          <div className="footer-links">
            <div className="footer-about-sec">
              <h3>About Us</h3>
              <p>
                We are the biggest hyperstore in the universe. <br />
                We got you all cover with our exclusive <br />
                collections and latest drops.
              </p>
            </div>

            <div className="footer-cat-sec">
              <h3>Categories</h3>
              <ul>
                <li>
                  <Link to="/categories">Runners</Link>
                </li>
                <li>
                  <Link to="/categories">Sneakers</Link>
                </li>
                <li>
                  <Link to="/categories">Basketball</Link>
                </li>
                <li>
                  <Link to="/categories">Outdoor</Link>
                </li>
                <li>
                  <Link to="/categories">Golf</Link>
                </li>
                <li>
                  <Link to="/categories">Hiking</Link>
                </li>
              </ul>
            </div>
            <div className="footer-help-sec">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/under-construction">About</Link>
                </li>
                <li>
                  <Link to="/under-construction">Contact</Link>
                </li>
                <li>
                  <Link to="/under-construction">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="footer-social-sec">
              <h3>Follow Us</h3>
              <div className="social-logos">
                <a href="https://www.facebook.com/">
                  <img src={facebook} alt="" srcset="" />
                </a>
                <a href="https://x.com/">
                  <img src={twitter} alt="" srcset="" />
                </a>
                <a href="https://www.instagram.com/">
                  <img src={instagram} alt="" srcset="" />
                </a>
                <a href="https://www.tiktok.com/">
                  <img src={tiktok} alt="" srcset="" />
                </a>
              </div>
            </div>
          </div>
          <img className="footer-end-logo" src={footerlogo} alt="" srcset="" />
        </div>
      </footer>
      <p className="cpr">© All rights reserved | Made with ❤️ by Sayed Allaa</p>
    </div>
  );
}

export default Footer;
