import React, { createContext, useEffect } from "react";
import { auth } from "../components/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Authcontext = createContext(false);

export function Authprovider({ children }) {
  const [isSignin, setSignin] = React.useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignin(true);
      } else {
        setSignin(false);
      }
    });
  }, []);

  return (
    <Authcontext.Provider value={[isSignin, setSignin]}>
      {children}
    </Authcontext.Provider>
  );
}
