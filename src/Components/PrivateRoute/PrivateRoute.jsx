import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingPage from "../LoadingPage/LoadingPage";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <LoadingPage></LoadingPage>
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