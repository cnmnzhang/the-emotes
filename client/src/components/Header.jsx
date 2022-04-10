import React from "react";
import { Link } from "react-router-dom";
import iceCreamSVG from "../assets/ice-cream-svgrepo-com.svg";

function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex center">
          <div>
            emotes
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex appearance-none p-1 text-gray-500 md:hidden">
              <img src={iceCreamSVG} alt="SVG" />
            </button>
          </div>
        </div>
        <div className="absolute right-4 flex items-center space-x-1 text-sm font-medium text-gray-800">
          <Link
            to="/login"
            className="rounded border bg-white px-3 py-2 transition duration-500 hover:bg-gray-100 sm:inline"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded border bg-rose-400 px-3 py-2 text-white transition duration-500 hover:bg-rose-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
