import { useContext, useEffect, useState } from "react";
import logo from "../../../public/replicate-prediction-fsqnuvbb6fob7lzy6uii5netji-removebg-preview.png";
import userLogo from "../../assets/user.png";
import MenuItem from "./MenuItem";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Navber = () => {
  const menuItem = <MenuItem></MenuItem>;
  const { user, setUser, logoutUser } = useContext(AuthContext);

  // theme changes function---
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const handleToggle = (e) =>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  useEffect(()=> {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  },[theme])

//------



  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div>
      <nav className=" block h-max w-full max-w-full rounded-none bg-[#000000] bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex  items-center">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center space-y-4 lg:space-y-0 my-5 lg:my-0">
            <div>
              <img className="w-28" src={logo} alt="" />
            </div>
            <div>
              <ul className="items-center gap-6 lg:flex">{menuItem}</ul>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
              <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-5">
                <h1 className=" text-lg font-semibold bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                  {user && user.displayName}
                </h1>

                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={user ? user.photoURL : userLogo}
                  alt=""
                />
              </div>

              <div className="flex items-center gap-3">

              {user ? (
                <button
                  onClick={handleLogout}
                  className="block select-none rounded-lg hover:translate-y-1 hover:transition-transform bg-gradient-to-tr from-[#fa6d63] to-[#fa0844] py-2 px-5 text-center align-middle font-rancho text-lg normal-case text-white shadow-md shadow-[#fa6d63]/20 transition-all hover:shadow-lg hover:shadow-[#fa6d63]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true">
                  Log out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    className="block  select-none rounded-lg hover:translate-y-1 hover:transition-transform bg-gradient-to-tr from-[#fa6d63] to-[#fa0844] py-2 px-10 text-center align-middle font-rancho text-lg normal-case text-white shadow-md shadow-[#fa6d63]/20 transition-all hover:shadow-lg hover:shadow-[#fa6d63]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true">
                    Login
                  </button>
                </Link>
              )}
              <div>
                <label className="swap swap-rotate">
                  <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true}/>
                  <svg
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  <svg
                    className="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
