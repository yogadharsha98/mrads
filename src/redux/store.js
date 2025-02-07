import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice'; // Category slice
import locationReducer from './slices/locationSlice'; // Location slice
import otpReducer from './slices/otpSlice'; // OTP slice
import authReducer from './slices/authSlice'; // Auth slice
import fieldReducer from './slices/fieldSlice';
import fieldOptionReducer from './slices/fieldOptionSlice';
import postAdReducer from './slices/postadSlice';
import subLocationReducer from './slices/subLocationSlice';
import postRentAdReducer from './slices/postAdRentSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer, // Manages categories state
    locations: locationReducer, // Manages locations state
    otp: otpReducer, // Manages OTP state
    auth: authReducer, // Manages authentication state
    field: fieldReducer,
    fieldoption: fieldOptionReducer,
    postad: postAdReducer,
    sublocations: subLocationReducer,
    postrentad: postRentAdReducer,
  },
});

export default store;
