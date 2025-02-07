import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { loginUser } from '../../redux/slices/authSlice'; // Adjust the import path based on your file structure
import Footer from '../../components/Footer/Footer';

const EmailLogin = () => {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch login action
    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <div style={{ marginTop: '100px', marginBottom: '150px' }}>
        <div className="login-container">
          <div className="login-div">
            <h3>Login with your email</h3>
            <form onSubmit={handleSubmit}>
              <div className="login-content">
                <h5>Enter Your Email</h5>
                <TextField
                  placeholder="Enter your email"
                  className="txt-field"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
                <br />
                <h5>Password</h5>
                <TextField
                  placeholder="password"
                  className="txt-field"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button className="btn" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Submit'}
                  </Button>
                </div>
              </div>
            </form>

            {/* Show success or error message */}
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmailLogin;
