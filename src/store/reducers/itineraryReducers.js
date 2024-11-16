// src/store/itineraryReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { fetchItineraries } from '../actions/itineraryActions';

const initialState = {
  itineraries: [],
  loading: false,
  error: null,
};

const itineraryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchItineraries.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchItineraries.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      
      state.itineraries = action.payload;
    })
    .addCase(fetchItineraries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default itineraryReducer;
