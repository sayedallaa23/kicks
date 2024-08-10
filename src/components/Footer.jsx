import React from "react";
import logo from "../assets/whlogo.svg";
import footerlogo from "../assets/fologo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tiktok.svg";
function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-st-sec">
          <div className="left-sec">
            <h3>
              Join our KicksPlus <br /> Club & get 15% off
            </h3>
            <p>Sign up for free! Join the community.</p>
            <form action="">
              <input type="email" placeholder="Email address" />
              <button className="black-btn">SUBMIT</button>
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
                  <a href="">Runners</a>
                </li>
                <li>
                  <a href="">Sneakers</a>
                </li>
                <li>
                  <a href="">Basketball</a>
                </li>
                <li>
                  <a href="">Outdoor</a>
                </li>
                <li>
                  <a href="">Golf</a>
                </li>
                <li>
                  <a href="">Hiking</a>
                </li>
              </ul>
            </div>
            <div className="footer-help-sec">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="footer-social-sec">
              <h3>Follow Us</h3>
              <div className="social-logos">
                <img src={facebook} alt="" srcset="" />
                <img src={instagram} alt="" srcset="" />
                <img src={twitter} alt="" srcset="" />
                <img src={tiktok} alt="" srcset="" />
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
