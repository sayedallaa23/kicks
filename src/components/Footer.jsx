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
  const [wamess, setwarmess] = useState(false);
  return (
    <div className="footer2 w-[90%] mx-auto mb-[1%]">
      <div className="bg-[#4a69e2] w-[100%] rounded-[32px] lg:rounded-[48px]  flex flex-col justify-between relative">
        <div className="footer-st-sec2 pt-[2rem] px-[1rem] lg:px-[2rem] pb-[1rem] flex justify-between lg:items-center flex-col lg:flex-row">
          <div className="left-sec2 text-[#FFFFFF]">
            <h3 className="font-[700] text-[7vw] lg:text-[3vw]">
              Join our KicksPlus <br /> Club & get 15% off
            </h3>
            <p className="text-[#E7E7E3] text-[3vw] lg:text-[1vw]">
              Sign up for free! Join the community.
            </p>
            <form action="" className="flex gap-2 my-3 w-[100%]">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 bg-[#4a69e2] border-[1px] rounded-lg w-[70%]"
              />
              <button
                className="black-btn2 bg-[#232321] p-2 rounded-lg"
                onClick={() => {
                  if (!value[0]) {
                    navigate("/register");
                  } else {
                    setwarmess(true);
                  }
                }}
              >
                SUBMIT
              </button>
              {wamess && (
                <p style={{ marginTop: "6px", fontSize: "15px" }}>
                  you are already logged in{" "}
                </p>
              )}
            </form>
          </div>
          <div className="right-sec2">
            <img src={logo} alt="" srcset="" />
          </div>
        </div>
        <div className="footer-nd-sec2 bg-[#232321] px-[1rem] pt-[2rem] rounded-[32px] lg:rounded-[48px] w-[100%]">
          <div className="footer-links2 flex justify-between items-start flex-col lg:flex-row md:px-[1rem] lg:px-[2rem] pb-[30%]">
            <div className="footer-about-sec2">
              <h3 className="text-[#ffa52f] font-[700] my-2 xl:text-[1.8rem] lg:text-[1.2rem]">About Us</h3>
              <p className="text-[#E7E7E3]">
                We are the biggest hyperstore in the universe. <br />
                We got you all cover with our exclusive <br />
                collections and latest drops.
              </p>
            </div>

            <div className="footer-cat-sec2">
              <h3 className="text-[#ffa52f] font-[700] my-2 xl:text-[1.8rem] lg:text-[1.2rem]">Categories</h3>
              <ul className="text-[#E7E7E3] leading-8 lg:text-[1.3rem]">
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
            <div className="footer-help-sec2">
              <h3 className="text-[#ffa52f] font-[700] my-2 xl:text-[1.8rem] lg:text-[1.2rem]">Company</h3>
              <ul className="text-[#E7E7E3] lg:text-[1.3rem]">
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
            <div className="footer-social-sec2">
              <h3 className="text-[#ffa52f] font-[700] my-2 xl:text-[1.8rem] lg:text-[1.2rem]">Follow Us</h3>
              <div className="social-logos2 flex gap-3 items-center">
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
          <div className="w-[100%]">
            <img
              className=" w-[90%] absolute bottom-0 mx-auto left-[5%]"
              src={footerlogo}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <p className="cpr2 text-center my-3">
        © All rights reserved | Made with ❤️ by Sayed Allaa
      </p>
    </div>
  );
}

export default Footer;
