import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-28 bg-blue-200 text-yellow-800 py-4 px-8 shadow-lg text-3xl">

      {/* Logo */}
      <Link
        to="/"
        className="hover:text-yellow-400 transition-colors duration-300 font-bold"
      >
        MY TINERARY
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-300 font-bold"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/cities"
              className="hover:text-yellow-400 transition-colors duration-300 font-bold"
            >
              CITIES
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Icon */}
      <div>
        <FaUserCircle size={35} className="text-yellow-400 hover:text-white transition-colors duration-300 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
