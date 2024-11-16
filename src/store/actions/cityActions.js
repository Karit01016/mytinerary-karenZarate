    import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
    import axios from 'axios';
   

    export const filterCities = createAsyncThunk('cities/filterCities ', async (search) => { 
      try {
        const response = await axios.get( `http://localhost:8080/api/cities/name/${search}`);
        console.log("Datos obtenidos de la API:", response.data);
        return response.data.response;  
      } catch (error) {
        console.error("Error en fetchCities:", error);
        throw error;
      }
    });
      export const searchInput = createAction('cities/searchInput');

    // Acción para obtener ciudades desde el backend con el filtro de búsqueda
    export const fetchCities = createAsyncThunk("cities/fetchCities", async () => { 

      try {
        const response = await axios.get("http://localhost:8080/api/cities/all");
        console.log("Datos obtenidos de la API:", response.data);
        return response.data.response;  
      } catch (error) {
        console.error("Error en fetchCities:", error);
        throw error;
      }
    });


    // Acción para seleccionar una ciudad
    export const selectedCity = createAction('cities/selectedCity');
