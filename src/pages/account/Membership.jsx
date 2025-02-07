import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../images/profile.jpg';
import verify from '../../images/verify.png';
import { Button, Grid } from '@mui/material';
import Footer from '../../components/Footer/Footer';

const Membership = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="account-container">
        <div className="left-account-div">
          <div
            style={{
              display: 'flex',
              gap: '20px',
              backgroundColor: '#F8F8FF',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '10px',
            }}
          >
            <img
              src={profile}
              alt="profile"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <div>
              <h3>Kavindu Dilshan</h3>
              <p>example@gmail.com</p>
            </div>
          </div>

          <div className="tab-account" onClick={() => navigate('/my-account')}>
            My Account
          </div>

          <div
            className="tab-account"
            onClick={() => navigate('/my-account/advertisement')}
          >
            My Advertisement
          </div>
          <div
            className="tab-account"
            onClick={() => navigate('/my-account/membership')}
          >
            Membership
          </div>
        </div>

        <div className="right-account-div">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#F8F8FF',
              padding: '15px 30px 15px 30px',
              marginBottom: '20px',
            }}
          >
            <h2>Hi, Kavindu Dilshan</h2>
            <img
              src={verify}
              alt="verified"
              width={'30px'}
              height={'30px'}
              style={{ marginTop: '25px' }}
            />
          </div>

          <div className="single-tab-main">
            <div className="single-tab">
              <h3>Package Name</h3>
              <strong>
                <p style={{ color: '#196CDF' }}>Standard Package</p>
              </strong>
            </div>

            <hr style={{ borderColor: '#196CDF', opacity: '0.3' }} />

            <div className="single-tab">
              <h3>Published Ads</h3>
              <strong>
                <p style={{ color: '#196CDF' }}>12</p>
              </strong>
            </div>

            <hr style={{ borderColor: '#196CDF', opacity: '0.3' }} />

            <div className="single-tab">
              <h3>Remaining Ads</h3>
              <strong>
                <p style={{ color: '#196CDF' }}>8</p>
              </strong>
            </div>

            <hr style={{ borderColor: '#196CDF', opacity: '0.3' }} />

            <div className="single-tab">
              <h3>Expire Date</h3>
              <strong>
                <p style={{ color: '#196CDF' }}>2024.12.09</p>
              </strong>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <Button className="btn" onClick={() => navigate('/membership')}>
              Apply New Package
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
