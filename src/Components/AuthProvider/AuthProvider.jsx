import { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebaseConfiq/firebase.confiq";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  // console.log(user)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const unSubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
      setUser(user);
    } else {
      return () => {
        unSubscribe();
      };
    }
  });

  const authInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    loginWithGoogle,
    loginWithGithub,
    logoutUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
