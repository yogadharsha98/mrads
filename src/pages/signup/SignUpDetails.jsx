import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './SignUp.css';
import { Button, TextField, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const SignUpDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch registration action
    dispatch(registerUser(formData))
      .then((res) => {
        if (res.payload.success) {
          // Redirect to home page after successful registration
          navigate(res.payload.redirect_url);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div style={{ marginTop: '50px', marginBottom: '100px' }}>
        <div className="login-container">
          <div className="login-div">
            <h3>Enter Your Name and Email</h3>
            <form onSubmit={handleSubmit}>
              <div className="login-content">
                <h5>Enter Your Name</h5>
                <TextField
                  placeholder="Enter your name"
                  className="txt-field"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <h5>Enter Your Email</h5>
                <TextField
                  placeholder="Enter your email"
                  className="txt-field"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <h5>Enter Your Password</h5>
                <TextField
                  placeholder="Enter your password"
                  className="txt-field"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                />

                <h5>Enter Your Password To Confirm</h5>
                <TextField
                  placeholder="Enter your password to confirm"
                  className="txt-field"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  type="password"
                />

                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button className="btn" type="submit" disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Submit'}
                  </Button>
                </div>
              </div>
            </form>

            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpDetails;
