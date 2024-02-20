// NavBarComponent.js
import Logout from "./LogoutComponent";
import { IoGridOutline, IoSearchOutline } from "react-icons/io5";

const NavBarComponent = () => {
  return (
    <>
      <div className="bg-customBlue text-white h-16 shadow-md flex items-center fixed left-0 right-0">
        <div className="flex items-center justify-between w-full ml-60">
          {/* Left Content */}
          <div className="flex items-center">
            {/* Menu Icon */}
            <div className="mr-5 ml-10" style={{ fontSize: "22px" }}>
              <IoGridOutline />
            </div>

            {/* Search Bar */}
            <div className="flex items-center ml-5">
              <IoSearchOutline />
              <input
                type="text"
                placeholder="Search Now"
                className="bg-customBlue text-white rounded-md px-3 py-1 focus:outline-none"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center">
            {/* Log Out */}
            <div className="md:flex mr-10">
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarComponent;
