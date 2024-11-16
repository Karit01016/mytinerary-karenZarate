import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'New York', image: 'https://img.freepik.com/foto-gratis/toma-aerea-edificios-ciudad-cielo-nublado_181624-46386.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid' },
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
  { name: 'Tokyo', image: 'https://img.freepik.com/foto-gratis/horizonte-tokio-puente-rainbow-torre-tokio-tokio-japon_335224-174.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid' },
  { name: 'Sydney', image: 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5' },
  { name: 'Rome', image: 'https://img.freepik.com/foto-gratis/hermosa-foto-famoso-anfiteatro-coliseo-romano-impresionante-cielo-al-amanecer_181624-6998.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid' },
  { name: 'Barcelona', image: 'https://img.freepik.com/foto-gratis/vista-badalona-espana_1398-178.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid' },
  { name: 'London', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b' },
  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1' },
  { name: 'Singapore', image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6' },
  { name: 'Berlin', image: 'https://img.freepik.com/fotos-premium/antiguo-palacio-potsdam-cerca-berlin-alemania_134785-10048.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid' },
  { name: 'Amsterdam', image: 'https://img.freepik.com/fotos-premium/mujer-joven-impermeable-amarillo-disfrutando-vista-manana-hermosa-vista-paisaje-urbano-amsterdam_506452-9595.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid' },
  { name: 'Hong Kong', image: 'https://img.freepik.com/foto-gratis/escena-puerto-victoria-hong-kong-puerto-victoria_74190-7852.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cities.length - 3) % cities.length);
  };

  const visibleCities = cities.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 p-4 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Popular Destinations</h2>

      <div className="flex items-center justify-between space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg focus:outline-none transform hover:scale-110 transition-transform"
        >
          &#8249;
        </button>

        <div className="flex space-x-6 w-full justify-center">
          {visibleCities.map((city, index) => (
            <Link
              to="/cities"
              key={index}
              className="w-1/3 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg focus:outline-none transform hover:scale-110 transition-transform"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
