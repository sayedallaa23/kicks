import React from "react";
import kicks from "../assets/Logo.svg";
import lense from "../assets/lense.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-links">
        <a href="/categories">New Drops🔥</a>
        <a href="/categories">Men</a>
        <a href="/categories">Women</a>
      </div>
      <div className="ham-menu-bars">
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div className="ham-menu">
        <a href="">New Drops🔥</a>
        <a href="">Men</a>
        <a href="">Women</a>
      </div>
      <div className="nav-logo">
        <a href="/">
        <img src={kicks} alt="kicks logo" /></a>
      </div>
      <div className="nav-icons">
        <a href="">
          <img className="lense-icon" src={lense} alt="lense" />
        </a>
        <Link to={"/login"}>
          <img src={profile} alt="profile" />
        </Link>
        <a href="">
          <img src={cart} alt="cart" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
