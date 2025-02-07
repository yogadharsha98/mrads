// src/redux/slices/locationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch locations from API
export const getSubLocations = createAsyncThunk(
  'sublocations/getSubLocations',
  async ({ locationId }) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/sub-locations/${locationId}`
      );
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const subLocationSlice = createSlice({
  name: 'sublocations',
  initialState: {
    subLocations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.subLocations = action.payload;
      })
      .addCase(getSubLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subLocationSlice.reducer;
