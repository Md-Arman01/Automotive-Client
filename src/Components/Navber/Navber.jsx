import { useContext } from 'react';
import logo from '../../../public/replicate-prediction-fsqnuvbb6fob7lzy6uii5netji-removebg-preview.png'
import userLogo from '../../assets/user.png'
import MenuItem from './MenuItem';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItem = <MenuItem></MenuItem>
    const {user, setUser, logoutUser} = useContext(AuthContext)

    const handleLogout = ()=> {
      logoutUser()
      .then(() => {
        // Sign-out successful.
        setUser(null)
        console.log('Sign-out successful.')
      }).catch((error) => {
        // An error happened.
        console.log(error.code)
      });
      
    }

    return (
        <div>
      <nav className=" block h-max w-full max-w-full rounded-none bg-[#000000] bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex  items-center">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center space-y-4 lg:space-y-0 my-5 lg:my-0">
            <div>
              <img className="w-28" src={logo} alt="" />
            </div>
            <div>
              <ul className="items-center gap-6 lg:flex">
                {menuItem}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
              <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-5">
              <h1 className=" text-lg font-medium bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                {user && user.displayName}
              </h1>

              <img
                className="w-12 h-12 object-cover rounded-full"
                src={user ? user.photoURL : userLogo}
                alt=""
              />
              </div>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="block select-none rounded-lg bg-gradient-to-tr from-[#fa6d63] to-[#fa0844] py-3 px-5 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#fa6d63]/20 transition-all hover:shadow-lg hover:shadow-[#fa6d63]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true">
                  Log out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    className="block  select-none rounded-lg bg-gradient-to-tr from-[#fa6d63] to-[#fa0844] py-3 px-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#fa6d63]/20 transition-all hover:shadow-lg hover:shadow-[#fa6d63]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true">
                    Login
                  </button>
                </Link>
              )}
            </div>

          </div>
        </div>
      </nav>
    </div>
    );
};

export default Navber;