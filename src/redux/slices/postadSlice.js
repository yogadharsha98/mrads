import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  postAds: [],
  postAd: {},
  isLoading: false,
  isError: null,
};

export const createPostAd = createAsyncThunk(
  'post-ads/createPostAd',
  async (postAd) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/post-ads',
        postAd
      );

      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
);

const postadSlice = createSlice({
  name: 'postad',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostAd.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createPostAd.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.postAd = payload;
      })
      .addCase(createPostAd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default postadSlice.reducer;
