import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Send OTP request to the API
export const sendOtp = createAsyncThunk(
  'otp/sendOtp',
  async (phoneNumber, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:8000/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone_number: phoneNumber }),
      });
      const data = await response.json();
      
      // Check if OTP is successfully sent and include redirect_url in the response
      if (response.ok) {
        return {
          success: data.success,  // Include success message
          phone_number: phoneNumber,  // Include phone number
          redirect_url: data.redirect_url,  // Include the redirect URL if provided
        };
      } else {
        return thunkAPI.rejectWithValue(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Verify OTP request to the API
export const verifyOtp = createAsyncThunk(
  'otp/verifyOtp',
  async ({ phoneNumber, otp }, thunkAPI) => {
    try {
      console.log('Requesting OTP verification with:', { phone_number: phoneNumber, otp }); // Log the data
      const response = await fetch('http://localhost:8000/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone_number: phoneNumber, otp }),
      });
      const data = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message || 'Failed to verify OTP');
      }

      // Assuming the backend sends a redirect_url upon successful verification
      return {
        message: data.message,
        redirectUrl: data.redirect_url, // Add redirectUrl from response
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    isLoading: false,
    success: null,
    error: null,
    phoneNumber: null,
    redirectUrl: null, // Store the redirectUrl here
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle sendOtp actions
    builder
      .addCase(sendOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload.success;
        state.phoneNumber = action.payload.phone_number; // Save the phone number
        state.redirectUrl = action.payload.redirect_url; // Store redirect URL if available
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Handle verifyOtp actions
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload.message;
        state.redirectUrl = action.payload.redirectUrl; // Store redirect URL
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default otpSlice.reducer;
