import React from 'react';
import Footer from '../../components/Footer/Footer';
import './Login.css';
import { Button, TextField } from '@mui/material';

const LoginVerification = () => {
  return (
    <>
      <div style={{ marginTop: '150px', marginBottom: '200px' }}>
        <div className="login-container">
          <div className="login-div">
            <h3>Verify OTP For:</h3>
            <form>
              <div className="login-content">
                <h5>Enter Verification Code</h5>

                <TextField
                  placeholder="Enter verification code received to your phone"
                  className="phone-number" name="otp"
                />

                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button className="btn">submit</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginVerification;
