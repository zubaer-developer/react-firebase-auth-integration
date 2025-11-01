import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  // get current user info
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("inside observer: if", currentUser);
  //   } else {
  //     console.log("inside observer: else", currentUser);
  //   }
  // });
  useEffect(() => {
    // set observer
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observer from useEffect", currentUser);
      setUser(currentUser);
      setLoading(false);
      // clear observer
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signOutUser,
    user,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
