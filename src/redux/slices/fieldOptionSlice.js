import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  fieldoptions: [],
  isLoading: false,
  isError: null,
};

export const getFieldOptions = createAsyncThunk(
  'fields/fetchFields',
  async ({ categoryId, subCategoryId, fieldId }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/field_option/${categoryId}/${subCategoryId}/${fieldId}`
      );
      console.log('API Response:', response.data); // Log the API response
      return {
        fields: response.data.fields || [], // Make sure this is the correct field data
      };
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
);

const fieldOptionSlice = createSlice({
  name: 'fieldoption',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFieldOptions.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getFieldOptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fieldoptions = action.payload.fieldoptions || []; // Ensure this is correctly populated
      })
      .addCase(getFieldOptions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default fieldOptionSlice.reducer;
