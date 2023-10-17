import {createContext, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import auth from '../firebaseConfiq/firebase.confiq'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    console.log(user)
    const createUser =  (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
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