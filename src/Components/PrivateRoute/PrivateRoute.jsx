import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <h1>loading.....</h1>
    }
    if(user){
        return children
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoute;