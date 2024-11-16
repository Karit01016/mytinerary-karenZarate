
  import { configureStore } from '@reduxjs/toolkit';
  import cityReducer from './reducers/cityReducers.js';
  import itineraryReducer from './reducers/itineraryReducers.js';

  const store = configureStore({
    reducer: {
      cities: cityReducer,
      itineraries: itineraryReducer,
    },
  });

  export default store;
