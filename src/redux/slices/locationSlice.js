// src/redux/slices/locationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch locations from API
export const fetchLocations = createAsyncThunk(
  'locations/fetchLocations',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:8000/api/location');
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const locationSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default locationSlice.reducer;
