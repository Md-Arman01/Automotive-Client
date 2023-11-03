import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://assignment-10-server-eight-sigma.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("errrrrrrrrrr", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser()
            .then(() => {
              // Sign-out successful.
              navigate("/login");
            })
            .catch((error) => {
              // An error happened.
              console.log(error);
            });
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxios;
