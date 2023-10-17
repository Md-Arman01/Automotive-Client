import { NavLink } from "react-router-dom";


const MenuItem = () => {
    return (
        <div className="flex gap-5">
            <NavLink to='/' className={({ isActive}) => isActive ? "text-lg font-semibold bg-gradient-to-t from-[#ff0844] to-[#ffb199] text-transparent bg-clip-text border-b-2" : "text-lg font-semibold"}>Home</NavLink>
            <NavLink to='/addProduct' className={({ isActive}) => isActive ? "text-lg font-semibold bg-gradient-to-t from-[#ff0844] to-[#ffb199] text-transparent bg-clip-text border-b-2" : "text-lg font-semibold"}>Add Product</NavLink>
            <NavLink to='/myCart' className={({ isActive}) => isActive ? "text-lg font-semibold bg-gradient-to-t from-[#ff0844] to-[#ffb199] text-transparent bg-clip-text border-b-2" : "text-lg font-semibold"}>My Cart</NavLink>
            <NavLink to='/login' className={({ isActive}) => isActive ? "text-lg font-semibold bg-gradient-to-t from-[#ff0844] to-[#ffb199] text-transparent bg-clip-text border-b-2" : "text-lg font-semibold"}>Login</NavLink>
        </div>
    );
};

export default MenuItem;