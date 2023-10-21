import { Outlet, ScrollRestoration } from "react-router-dom";
import Navber from "../Navber/Navber";


const Layout = () => {
    return (
        <div>
            <ScrollRestoration />
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;