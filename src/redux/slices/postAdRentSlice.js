import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  postRentAds: [],
  postRentAd: {},
  isLoading: false,
  isError: null,
};

export const createPostRentAd = createAsyncThunk(
  'post-ads/createPostRentAd',
  async (postRentAd) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/post-rent-ads',
        postRentAd
      );

      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
);

const postrentadSlice = createSlice({
  name: 'postrentad',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostRentAd.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createPostRentAd.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.postRentAd = payload;
      })
      .addCase(createPostRentAd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default postrentadSlice.reducer;
