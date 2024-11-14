// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./reducers/carsReducer";
import { alertsReducer } from "./reducers/alertsReducer";

// Configure the store with Redux Toolkit
const store = configureStore({
  reducer: {
    // Add the carsReducer here
    carsReducer,
    alertsReducer,
    bookingsReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Automatically enables DevTools in dev mode
});

export default store;
