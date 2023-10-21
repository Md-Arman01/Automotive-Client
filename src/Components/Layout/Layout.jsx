import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Navber from "../Navber/Navber";
import { MagnifyingGlass } from "react-loader-spinner";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <ScrollRestoration />
      <Navber></Navber>
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center h-screen">
        <MagnifyingGlass
          visible={true}
          height="200"
          width="200"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
          />
          </div>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default Layout;
