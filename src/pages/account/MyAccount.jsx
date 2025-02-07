import React, { useState } from 'react';
import './MyAccount.css';
import profile from '../../images/profile.jpg';
import verify from '../../images/verify.png';
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const navigate = useNavigate();
  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState('');

  const handleAddNumber = () => {
    if (inputNumber.trim !== '') {
      setNumbers((prevNumbers) => [...prevNumbers, inputNumber.trim()]);
      setInputNumber('');
    }
  };

  const handleRemoveNumber = (indexToRemove) => {
    setNumbers((prevNumbers) =>
      prevNumbers.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
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

          <div style={{ display: 'flex', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>First Name</p>
              </strong>
              <TextField className="account-field" />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>Last Name</p>
              </strong>
              <TextField className="account-field" />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>District</p>
              </strong>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="account-drp-down"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>City</p>
              </strong>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="account-drp-down"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Email Address (Optional) </p>
            </strong>
            <TextField className="account-email-field" />
          </div>

          <div className="acc-num-option">
            <Grid container spacing={2} columns={12}>
              {numbers.map((number, index) => (
                <Grid item lg={4} sm={6} xs={12} md={4} key={index}>
                  <div
                    style={{
                      width: 'max-content',
                      backgroundColor: '#f8f8f8',
                      borderRadius: '50px',
                      padding: '0px 10px 0px 10px',
                    }}
                  >
                    <div className="acc-number-option">
                      <p>{number}</p>
                      <CancelRoundedIcon
                        style={{
                          marginTop: '15px',
                          color: '#ff9d3d',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleRemoveNumber(index)}
                      />
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Add telephone Number </p>
            </strong>
            <div style={{ display: 'flex', gap: '20px' }}>
              <TextField
                className="acc-number"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
              />
              <Button
                className="btn"
                style={{ height: '40px' }}
                onClick={handleAddNumber}
              >
                Add
              </Button>
            </div>
          </div>

          <h3>Delete Account</h3>
          <p>
            Do you need to delete your MrAd.lk Account?{' '}
            <Link to="/contact-us">Contact Us</Link> . If you delete your
            account you can’t recover it
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '30px',
            }}
          >
            <Button className="btn">Save</Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyAccount;
