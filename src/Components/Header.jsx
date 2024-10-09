import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-500 to-black  h-24 text-yellow-300 p-4 flex items-center justify-between">
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {<CiMenuBurger />}
        <svg className="w-15 h-15" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Link to="/" className="text-4xl font-bold">
        MyTinerary
      </Link>
      <div className="hidden md:flex space-x-4 text-3xl">
        <Link to="/" className="hover:underline ">
          Home
        </Link>
        <Link to="/cities" className="hover:underline">
          Cities
        </Link>
      </div>
      <div className="flex flex-col items-center">
        {<FaUserAlt className="text-4xl"/>}

        <p className="">LOGIN</p>
      </div>
      {menuOpen && <SideMenu setMenuOpen={setMenuOpen} />}
    </header>
  );
}

export default Header;
