import React from 'react';
import { Link } from 'react-router-dom';

function SideMenu({ setMenuOpen }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setMenuOpen(false)}>
      <div className="bg-white w-64 h-full p-4" onClick={(e) => e.stopPropagation()}>
        <nav className="flex flex-col space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/cities" onClick={() => setMenuOpen(false)}>Cities</Link>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
