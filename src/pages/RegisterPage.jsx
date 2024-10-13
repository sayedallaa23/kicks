import * as React from "react";
import facebok from "../assets/facebookbl.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import Credentials from "../components/Credentials";
import { defer, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import github from "../assets/github.svg";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "../components/firebase";

const RegisterPage = () => {
  const navigate = useNavigate();
  const Checkbox = (props) => {
    return (
      <div className="checkbox-wrapper">
        <label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            style={{ marginRight: "10px" }}
            onChange={props.onChange}
          />
          <span>{props.label}</span>
        </label>
      </div>
    );
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [userHasAccount, setuserhasaccount] = React.useState(false);
  const [isempty, setisempty] = React.useState(false);
  const [errmes, seterrmes] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const validateInputs = () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      gender === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return false;
    } else {
      return true;
    }
  };
  const signUp = async () => {
    const user = auth.currentUser;
    if (checkboxChecked && validateInputs()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
        setuserhasaccount(true);
      } catch (err) {
        console.error(err.message);
        if (err.message.includes("email-already-in-use")) {
          setuserhasaccount(true);
          seterrmes(false);
        } else if (err.message.includes("invalid-email")) {
          setuserhasaccount(false);
          seterrmes(true);
        }
      }
      setisempty(false);
    }
    if (!validateInputs()) {
      setisempty(true);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="register-container w-[90%] mx-auto my-[6%] flex flex-col lg:flex-row">
      <div className="reg-top-left">
        <h1 className="font-[700] text-[1.5rem]">Register</h1>
        <p>Sign up with</p>
        <div className="reg-btns2 my-[5%]">
          <div className="logs-mails2 flex gap-3 md:w-[80%] justify-between mb-[5%]">
            <Link
              href=""
              onClick={signInWithGoogle}
              className="w-[33%] border-[1px] border-black rounded-md flex justify-center items-center py-1 px-5 "
            >
              {" "}
              <div className="google">
                <img src={google} alt="google" />
              </div>
            </Link>
            <Link
              href=""
              onClick={signInWithGithub}
              className="w-[33%] border-[1px] border-black rounded-md flex justify-center items-center py-1 px-5 "
            >
              <div className="apple">
                <img src={github} alt="github" />
              </div>
            </Link>
            <Link
              href=""
              onClick={signInWithFacebook}
              className="w-[33%] border-[1px] border-black rounded-md flex justify-center items-center py-1 px-5 "
            >
              <div className="facebook">
                <img src={facebok} alt="facebook" />
              </div>
            </Link>
          </div>
        </div>
        <p className="font-[700] mb-[1rem]">OR</p>
        <h2 className="font-[700]">Your Name</h2>
        <Credentials
          type1="name"
          type2="name"
          placeholder1="First Name"
          placeholder2="Last Name"
          setEmail={setFirstName}
          setPassword={setLastName}
          handlerFuntion={() => {
            return null;
          }}
        />

        <h2 className="font-[700] ">Gender</h2>
        <div className="gender-selector">
          <div className="flex items-center my-[0.25rem] ">
            <input
              value="male"
              type="radio"
              name="gender"
              style={{ marginRight: "10px" }}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />{" "}
            <span>Male</span>
          </div>
          <div className="flex items-center my-[0.25rem] ">
            <input
              value="female"
              type="radio"
              name="gender"
              style={{ marginRight: "10px" }}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <span>Female</span>
          </div>
          <div className="flex items-center my-[0.25rem] ">
            <input
              value="other"
              type="radio"
              name="gender"
              style={{ marginRight: "10px" }}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <span>Other</span>
          </div>
        </div>
        <h2 className="font-[700] mt-[2rem]">Login Details</h2>
        <Credentials
          type1="email"
          type2="password"
          placeholder1="Email"
          placeholder2="Password"
          setEmail={setEmail}
          setPassword={setPassword}
        />
        {userHasAccount === true ? (
          <span style={{ color: "red" }}>
            this email is already registered <Link to={"/login"}>Log in</Link>
          </span>
        ) : (
          ""
        )}
        {errmes ? (
          <span style={{ color: "red" }}>please enter a valid email</span>
        ) : (
          ""
        )}
        <p className="text-[0.8rem] md:w-[80%] mb-[1rem] ">
          Minimum 8 characters with at least one uppercase, one lowercase, one
          special character and a number
        </p>
        <div className="flex items-center mb-[1rem] md:w-[80%]">
          <label>
            <input
              type="checkbox"
              style={{ marginRight: "10px" }}
              onChange={(e) => setCheckboxChecked(e.target.checked)}
            />
            <span>
              By clicking 'Log In' you agree to our website KicksClub Terms &
              Conditions, Kicks Privacy Notice and Terms & Conditions.
            </span>
          </label>
        </div>
        <div className="flex items-center mb-[1rem] md:w-[80%]">
          <label>
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <span>
              Keep me logged in - applies to all log in options below.{" "}
              <a href="" style={{ textDecoration: "none" }}>
                More info
              </a>
            </span>
          </label>
        </div>
        {isempty && (
          <span style={{ color: "red" }}>please fill all the fields</span>
        )}
        <button
          className={`bg-[#232321] w-[100%] md:w-[80%] text-[#fff] rounded-md p-[0.5rem] lg:w-[80%] ${
            checkboxChecked === false ? "is-dark" : ""
          }`}
          onClick={signUp}
          style={{ marginTop: "10px" }}
        >
          Register
        </button>
      </div>
      <div className="bg-[#fafafa] rounded-xl lg:w-[50%] lg:ml-[1rem] p-[1.5rem] h-fit mt-[5%]">
          <h1 className="font-[700] text-[1.5rem] ">
            Join Kicks Club Get Rewarded Today.
          </h1>
          <p className="my-[1rem]">
            As kicks club member you get rewarded with what you love for doing
            what you love. Sign up today and receive immediate access to these
            Level 1 benefits:
          </p>
          <ul className="list-disc ml-[1rem] mb-[1rem] ">
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
          <a href="/register">
            <button className="bg-[#232321] text-[#fff] rounded-md p-[0.5rem] my-[1rem] w-[100%] ">Join the club</button>
          </a>
        </div>
    </div>
  );
};

export default RegisterPage;
