import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-500 to-black  text-yellow-500 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} MyTinerary</p>
      <nav className="flex justify-center space-x-4">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
