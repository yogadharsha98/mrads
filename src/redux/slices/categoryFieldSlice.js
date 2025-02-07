// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Define the initial state
// const initialState = {
//   fields: [],
//   status: 'idle',  // status can be 'idle', 'loading', 'succeeded', 'failed'
//   error: null,
// };

// // Create an async thunk to fetch category fields from the API
// export const fetchCategoryFields = createAsyncThunk(
//   'categoryFields/fetchCategoryFields',
//   async ({ categoryId, subCategoryId }) => {
//     const response = await fetch(`http://localhost:8000/api/fields-with-options/${categoryId}/${subCategoryId}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch fields');
//     }
//     const data = await response.json();
//     return data;  // Return the fetched data to be used in the slice
//   }
// );

// // Create the slice
// const categoryFieldSlice = createSlice({
//   name: 'categoryFields',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategoryFields.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCategoryFields.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.fields = action.payload;  // Store the fetched fields
//       })
//       .addCase(fetchCategoryFields.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;  // Store error message if request fails
//       });
//   },
// });

// // Export the selector to get the fields state from the store
// export const selectFields = (state) => state.categoryFields.fields;
// export const selectStatus = (state) => state.categoryFields.status;
// export const selectError = (state) => state.categoryFields.error;

// // Export the reducer to be added to the store
// export default categoryFieldSlice.reducer;
