import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from "../components/Carousel"; 

const Home = () => {
  return (
    <div className="w-full h-full">

      {/* Hero Section */}
      <div className="relative w-full h-screen  object-cover">
        <img
          src="https://img.freepik.com/foto-gratis/playa-tropical-arena-blanca_1203-1710.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid"
          alt="Nature background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      
     

        {/* Contenedor del texto y botón */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wider">
            My Tinerary
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md tracking-wide">
            Discover your perfect trip, crafted by insiders who truly know and love their cities!
          </p>

          <Link to="/cities">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform duration-300">
              Let's Explore Cities
            </button>
          </Link>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-12 bg-gradient-to-b from-blue-50 to-blue-100">
        <Carousel />
      </div>

    </div>
  );
};

export default Home;
