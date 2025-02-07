import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  fields: [],
  isLoading: false,
  isError: null,
};

export const fetchFieldsByCategoryAndSubcategory = createAsyncThunk(
  'fields/fetchFields',
  async ({ categoryId, subCategoryId }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/fields/${categoryId}/${subCategoryId}`
      );

      return {
        fields: response.data.fields || [], // Make sure this is the correct field data
      };
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
);

const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFieldsByCategoryAndSubcategory.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(
        fetchFieldsByCategoryAndSubcategory.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.fields = action.payload.fields || []; // Ensure this is correctly populated
        }
      )
      .addCase(
        fetchFieldsByCategoryAndSubcategory.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isError = action.error.message;
        }
      );
  },
});

export default fieldSlice.reducer;
