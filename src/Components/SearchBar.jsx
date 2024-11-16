
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchInput } from '../store/actions/cityActions.js';

const SearchBar = () => {
  const { search } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  // Función para manejar cambios en el input
  const handleInputChange = (e) => {
    dispatch(searchInput(e.target.value));
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="✈ Search City"
        value={search}
        onChange={handleInputChange}
        className="h-[8vh] border text-center md:w-[30vw] border-blue-600 focus:border-blue-800 focus:outline-none focus:border-4 rounded-lg"
      />
    </div>
  );
};

export default SearchBar;
