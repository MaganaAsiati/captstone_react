import { configureStore } from '@reduxjs/toolkit';
import casesReducer from './Cases/cases';
import detailReducer from './countries/countries';

const store = configureStore({
  reducer: {
    covid: casesReducer,
    details: detailReducer,
  },
});

export default store;
