import { createReducer } from '@reduxjs/toolkit';
import { fetchCities, filterCities, searchInput, selectedCity } from '../actions/cityActions.js';

const initialState = {
  cities: [],
  filteredCities: [], // Inicializamos filteredCities
  selectCity: null, // Almacena la ciudad seleccionada
  search: "", 
  loading: true,
  error: null,
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCities.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      console.log("Payload en fetchCities.fulfilled:", action.payload); // Verifica si los datos son correctos
      state.loading = false;
      state.cities = action.payload;
      state.filteredCities = action.payload; // Inicia con todas las ciudades
    })
    .addCase(fetchCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.error("Error en fetchCities:", action.error.message);
    })
    .addCase(filterCities.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(filterCities.fulfilled, (state, action) => {
      state.loading = false;
      state.cities = action.payload;
      state.filteredCities = action.payload; // Actualiza filteredCities
    })
    .addCase(filterCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.error("Error en filterCities:", action.error.message);
    })
    .addCase(searchInput, (state, action) => {
      state.search = action.payload;
    })
    .addCase(selectedCity, (state, action) => {
      state.selectCity = action.payload; // Actualiza selectCity con la ciudad seleccionada
    });
});

export default cityReducer;
