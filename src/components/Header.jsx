import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fav-icon.jpeg";

const Header = ({ path }) => {
  return (
    <div className="w-full p-3 bg-white shadow-lg fixed top-0 z-50">
      <div className="flex px-4 items-center justify-between">
        <Link to="/">
          <img src={logo} alt="" className="w-[80px] h-[60px] cursor-pointer" />
        </Link>
        <span className="px-5 py-2 bg-[#2d7adf] rounded-2xl text-white font-bold">
          <Link to={path}>dApps</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
