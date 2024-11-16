import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-amber-600 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
     
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-400">MyTinerary</h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} MyTinerary. All rights reserved.</p>
        </div>
        
        {/* Menú de Navegación Adicional */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
            Contact Us
          </a>
        </div>
        
        {/* Redes Sociales */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="text-yellow-400 hover:text-white transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-yellow-400 hover:text-white transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-yellow-400 hover:text-white transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
