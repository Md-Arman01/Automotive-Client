import {createContext, useState } from "react";
import {GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import auth from '../firebaseConfiq/firebase.confiq'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    // console.log(user)

    const createUser =  (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = ()=>  {
      return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = ()=>  {
      return signInWithPopup(auth, GithubProvider)
    }
    const logoutUser = ()=> {
      return signOut(auth)
    }
    


    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          return ()=> {
            unSubscribe()
          }
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
        

    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;