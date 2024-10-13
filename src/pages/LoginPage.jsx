import * as React from "react";
import { Link } from "react-router-dom";
import Credentials from "../components/Credentials";
import facebok from "../assets/facebookbl.svg";
import google from "../assets/google.svg";
import { Authcontext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import github from "../assets/github.svg";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "../components/firebase";
const LoginPage = () => {
  React.useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const value = React.useContext(Authcontext);
  const navigate = useNavigate();
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
  const Checkbox = ({ label }) => {
    return (
      <div className="checkbox-wrapper">
        <label>
          <input type="checkbox" style={{ marginRight: "10px" }} />
          <span>
            {label} <a href="">More info</a>
          </span>
        </label>
      </div>
    );
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isempty, setisempty] = React.useState(false);
  const [errmes, seterrmes] = React.useState(false);

  const validateInputs = () => {
    if (email.trim() === "" || password.trim() === "") {
      return false;
    } else {
      return true;
    }
  };
  const signIn = async () => {
    if (validateInputs) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
        seterrmes(true);
      }
      setisempty(false);
    }
    if (!validateInputs()) {
      setisempty(true);
      seterrmes(false);
    }
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      value[1](true);
      navigate("/");

      // ...
    } else {
      // User is signed out
      // ...
      value[1](false);
    }
  });
  return (
    <div className="w-[90%] mx-auto my-[6%] ">
      <div className="login-container2 flex flex-col lg:flex-row w-[100%]">
        <div className="login-top-left2">
          <h1 className="font-[700] text-[1.5rem]">Login</h1>
          <a href="">Forgot your password?</a>
          <Credentials
            type1="email"
            type2="password"
            placeholder1="Email"
            placeholder2="Password"
            setEmail={setEmail}
            setPassword={setPassword}
            handlerFuntion={signIn}
          />
          <Checkbox label="Keep me logged in - applies to all log in options below." />
          {isempty && (
            <span style={{ color: "red" }}>please fill all the fields</span>
          )}
          {errmes && (
            <span style={{ color: "red" }}>wrong email or password</span>
          )}
          <button
            className="bg-[#232321] w-[100%] md:w-[80%] text-[#fff] rounded-md p-[0.5rem] lg:w-[80%] mt-[1.5rem]"
            onClick={signIn}            
          >
            Email Login
          </button>
          <div className="reg-btns2 my-[5%]">
            <div className="flex gap-3 md:w-[80%] justify-between mb-[5%]">
              <Link
                href=""
                onClick={signInWithGoogle}
                className="w-[33%] border-[1px] border-black rounded-md flex justify-center items-center py-1 px-5 "
              >
                {" "}
                <div className="google">
                  <img src={google} alt="google" className="" />
                </div>
              </Link>
              <Link
                href=""
                onClick={signInWithGithub}
                className="w-[33%] border-[1px] border-black rounded-md flex justify-center items-center py-1 px-5 "
              >
                <div className="apple">
                  <img src={github} alt="github" className="" />
                </div>
              </Link>
              <Link
                href=""
                onClick={signInWithFacebook}
                className="w-[33%] border-[1px] border-black rounded-md flex justify-center items-center py-1 px-5 "
              >
                <div className="facebook">
                  <img src={facebok} alt="facebook" className="" />
                </div>
              </Link>
            </div>
            <p className="md:w-[80%]">
              By clicking 'Log In' you agree to our website KicksClub Terms &
              Conditions, Kicks Privacy Notice and Terms & Conditions.
            </p>
          </div>
        </div>
        <div className="bg-[#fafafa] rounded-xl lg:w-[50%] lg:ml-[1rem] p-[1.5rem] h-fit ">
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
    </div>
  );
};

export default LoginPage;
