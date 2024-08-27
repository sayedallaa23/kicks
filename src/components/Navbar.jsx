import React from "react";
import kicks from "../assets/Logo.svg";
import lense from "../assets/lense.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { Authcontext } from "../store/AuthContext";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../components/firebase";
import logout from "../assets/logout.svg";
function Navbar() {
  const value = React.useContext(Authcontext);
  const hamref = React.useRef(null);
  const navref = React.useRef(null);
  function handleHamMenu() {
    if (hamref.current.style.display === "block") {
      hamref.current.style.display = "none";
      navref.current.style.borderRadius = "12px";
    } else {
      hamref.current.style.display = "block";
      navref.current.style.borderRadius = "12px 12px 12px 0px";
    }
  }

  const signout2 = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="nav-bar" ref={navref}>
      <div className="nav-links">
        <Link to="/categories">New Drops🔥</Link>
        <Link to="/categories">Men</Link>
        <Link to="/categories">Women</Link>
      </div>
      <div className="ham-menu-bars">
        <a
          href="javascript:void(0);"
          class="icon"
          onClick={() => {
            handleHamMenu();
          }}
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div className="ham-menu" ref={hamref}>
        <Link
          to=""
          onClick={() => {
            handleHamMenu();
          }}
        >
          New Drops🔥
        </Link>
        <Link
          to="/categories"
          onClick={() => {
            handleHamMenu();
          }}
        >
          Men
        </Link>
        <Link
          to="/categories"
          onClick={() => {
            handleHamMenu();
          }}
        >
          Women
        </Link>
      </div>
      <div className="nav-logo">
        <Link href="/">
          <img src={kicks} alt="kicks logo" />
        </Link>
      </div>
      <div className="nav-icons">
        <a href="">
          <img className="lense-icon" src={lense} alt="lense" />
        </a>
        {value[0] === false ? (
          <Link to={"/login"}>
            <img src={profile} alt="profile" />
          </Link>
        ) : (
          <Link onClick={signout2} to={"/"}>
            <img src={logout} />
          </Link>
        )}

        <a href="">
          <img src={cart} alt="cart" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
