import logo from '../../../public/replicate-prediction-fsqnuvbb6fob7lzy6uii5netji-removebg-preview.png'
import MenuItem from './MenuItem';

const Navber = () => {
    const menuItem = <MenuItem></MenuItem>

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

          </div>
        </div>
      </nav>
    </div>
    );
};

export default Navber;