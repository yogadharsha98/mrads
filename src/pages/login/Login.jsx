import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './Login.css';
import { Button, TextField } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp } from '../../redux/slices/otpSlice';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, success, error } = useSelector((state) => state.otp);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Dispatch the sendOtp action
    const resultAction = await dispatch(sendOtp(phoneNumber));

    if (sendOtp.fulfilled.match(resultAction)) {
      // Log the result to check the structure
      console.log('OTP request successful:', resultAction.payload);

      // On success, store the formatted phone number in session storage
      const formattedPhoneNumber = resultAction.payload.phone_number;
      console.log(
        'Formatted phone number from API response:',
        formattedPhoneNumber
      );

      if (formattedPhoneNumber) {
        // Store the formatted phone number in sessionStorage
        sessionStorage.setItem('phone_number', formattedPhoneNumber);
        console.log(
          'Formatted phone number stored in sessionStorage:',
          formattedPhoneNumber
        );
      } else {
        console.error('Formatted phone number not found in response');
      }

      // Get the redirect URL from the response
      const redirectUrl = resultAction.payload.redirect_url;

      if (redirectUrl) {
        // Redirect the user to the verification page
        navigate(redirectUrl); // This will redirect to /login-verification
      } else {
        console.error('Redirect URL not found in response');
      }
    } else {
      // Handle error (if needed)
      alert('Failed to send OTP. Please try again.');
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-div">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="login-content">
              <h5>Phone number</h5>

              <TextField
                variant="outlined"
                placeholder="Enter your phone number"
                className="phone-number"
                name="phone_number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                fullWidth
              />
              <br />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button className="btn" type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending OTP...' : 'Login'}
                </Button>
              </div>
            </div>

            <div className="hr-with-or">
              <hr />
              <span>or</span>
              <hr />
            </div>
          </form>

          <div className="btn-group">
            <Button
              className="social"
              onClick={() => navigate('/login-with-email')}
            >
              <EmailOutlinedIcon style={{ marginRight: '40px' }} />
              Continue With Email
            </Button>

            <Button className="social">
              <GoogleIcon style={{ marginRight: '40px' }} /> Continue With
              Google
            </Button>

            <Button className="social">
              <FacebookRoundedIcon style={{ marginRight: '20px' }} /> Continue
              With Facebook
            </Button>
            <br />
          </div>

          <p>
            New to MrAds.lk?{' '}
            <Link className="signup-link" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
