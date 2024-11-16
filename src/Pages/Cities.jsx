import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, selectedCity } from '../store/actions/cityActions.js';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar.jsx';

const Cities = () => {
  const dispatch = useDispatch();
  const { cities, loading, search, error } = useSelector((state) => state.cities);
  const [page, setPage] = useState(0);

  // Cargar ciudades solo al montar el componente
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  // Filtrar ciudades localmente en función de `search`
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  // Función para manejar el clic en una ciudad y despachar la ciudad seleccionada
  const handleCityClick = (city) => {
    dispatch(selectedCity(city));
  };

  // Función para cambiar de página
  const itemsPerPage = 2;
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);
  const goToNextPage = () => setPage((prevPage) => (prevPage + 1) % totalPages);
  const goToPreviousPage = () => setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);

  if (loading) {
    return <p className="text-center text-xl">Loading cities...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 text-gray-800">Discover Cities</h1>

      {/* Search Bar */}
      <SearchBar />

      <div className="flex justify-center items-center space-x-6 mt-10">
        <button
          onClick={goToPreviousPage}
          className="bg-gray-300 text-gray-600 p-3 rounded-full hover:bg-gray-400 transition duration-300 shadow-md"
        >
          &#8249;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          {filteredCities.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage).map((city, index) => (
            <Link 
              to={`/city/${city._id}`}
              key={index}
              onClick={() => handleCityClick(city)}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              {/* Imagen de la Ciudad */}
              <img
                src={city.photo}
                alt={city.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Superposición Oscura y Nombre de la Ciudad */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-3xl font-semibold text-white">{city.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          className="bg-gray-300 text-gray-600 p-3 rounded-full hover:bg-gray-400 transition duration-300 shadow-md"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Cities;
