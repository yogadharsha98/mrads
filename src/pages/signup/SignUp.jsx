import React from 'react';
import Footer from '../../components/Footer/Footer';
import './SignUp.css';
import { Button, TextField } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <div className="login-div">
          <h2>Sign Up</h2>
          <form>
            <div className="login-content">
              <h5>Phone number</h5>

              <TextField
                placeholder="Enter your phone number"
                className="txt-field"
              />

              <br />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  className="btn"
                  onClick={() => navigate('/register-details')}
                >
                  Sign Up
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
              onClick={() => navigate('/register-details')}
            >
              <EmailOutlinedIcon style={{ marginRight: '40px' }} />
              Continue With Email
            </Button>

            <Button className="social">
              <GoogleIcon style={{ marginRight: '50px' }} /> Continue With
              Google
            </Button>

            <Button className="social">
              <FacebookRoundedIcon style={{ marginRight: '50px' }} /> Continue
              With Facebook
            </Button>
            <br />
          </div>

          <p>
            New to MrAds.lk? <Link className="signup-link">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;