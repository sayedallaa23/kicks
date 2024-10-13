import "./App.css";
import React from "react";
import kicks from "../../assets/Logo.svg";
import lense from "../../assets/lense.svg";
import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import { Authcontext } from "../../store/AuthContext";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../../components/firebase";
import logout from "../../assets/logout.svg";
import { CartContext } from "../../store/CartContext";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
  const value = React.useContext(Authcontext);
  const hamref = React.useRef(null);
  const navref = React.useRef(null);
  const { cart, setCart } = React.useContext(CartContext);

  function handleHamMenu() {
    if (hamref.current.style.display === "flex") {
      hamref.current.style.display = "none";
      navref.current.style.borderRadius = "12px";
    } else {
      hamref.current.style.display = "flex";
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
    <div
      className="flex justify-between items-center mt-7 mx-auto bg-[#fafafa] p-3 md:p-6 rounded-2xl lg:rounded-3xl w-[90%]"
      ref={navref}
    >
      <div className="nav-links hidden lg:flex items-center ml-5 font-[600]">
        <Link to="/categories" className="mr-4">
          New Drops🔥
        </Link>
        <Link to="/categories/men" className="mr-4">
          Men
        </Link>
        <Link to="/categories/women" className="">
          Women
        </Link>
      </div>
      <div className="ham-menu-bars lg:hidden ml-4">
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
      <div
        className="ham-menu hidden flex-col fixed h-[100%] w-[100%] bg-[#fafafa] z-50 left-0 top-0 p-16"
        ref={hamref}
      >
        <div className="flex justify-between py-2 items-center">
          <Link
            to="/categories"
            onClick={() => {
              handleHamMenu();
            }}
            className=""
          >
            New Drops🔥
          </Link>
          <IoCloseSharp
            onClick={() => {
              handleHamMenu();
            }}
          />
        </div>

        <Link
          className="py-2"
          to="/categories/men"
          onClick={() => {
            handleHamMenu();
          }}
        >
          Men
        </Link>
        <Link
          className="py-2"
          to="/categories/women"
          onClick={() => {
            handleHamMenu();
          }}
        >
          Women
        </Link>
      </div>
      <div className="nav-logo w-[25%] lg:w-auto mx-auto">
        <Link href="/">
          <img src={kicks} alt="kicks logo" />
        </Link>
      </div>
      <div className="nav-icons flex items-center lg:mr-4 mr-2">
        <Link to="/under-construction" className="hidden lg:flex ml-4">
          <img className="lense-icon" src={lense} alt="lense" />
        </Link>
        {value[0] === false ? (
          <Link to={"/login"} className="lg:ml-4 w-[25px]">
            <img src={profile} alt="profile" />
          </Link>
        ) : (
          <Link onClick={signout2} to={"/"} className="lg:ml-4 w-[25px]">
            <img src={logout} />
          </Link>
        )}
        <div className="cart-div lg:ml-4 ml-2 bg-[#ffa52f] rounded-[50%] w-[1.5rem] flex justify-center items-center">
          <Link to={"/cart"}>{cart ? cart.length : "0"}</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
