// src/store/itineraryActions.js
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItineraries = createAsyncThunk('FETCH_ITINERARIES', async (id)=>{
    try {
        console.log(id);
        const response = await axios.get(`http://localhost:8080/api/itineraries/city/${id}`)
        return response.data.response
    } catch (error) {
        console.log(error)
    }
});
