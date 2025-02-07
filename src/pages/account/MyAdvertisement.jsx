import React from 'react';
import profile from '../../images/profile.jpg';
import verify from '../../images/verify.png';
import house from '../../images/house.jpeg';
import Layer from '../../images/Layer_x0020_1.png';
import { useNavigate } from 'react-router-dom';
import './MyAccount.css';
import { Button } from '@mui/material';
import Footer from '../../components/Footer/Footer';

const MyAdvertisement = () => {
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

          <h4>Published Advertisements</h4>
          <div className="ad-main-container">
            <div className="ad-container">
              <img
                src={house}
                className="ad-img-container"
                width={'150px'}
                height={'150px'}
                style={{ borderRadius: '10px', objectFit: 'cover' }}
              />

              <div
                style={{
                  display: 'flex',

                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <h2 style={{ margin: '0px' }}>House for Sale</h2>
                    <h5 style={{ marginTop: '5px' }}>
                      5 Bed rooms, 5 Bath rooms
                    </h5>
                    <p className="p-tag-location">Kurunagala, House</p>
                  </div>

                  <h4 style={{ margin: '0px' }}>LKR 2 500 000.00</h4>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                  }}
                >
                  <div className="edit-delete-div">
                    <Button className="btn">Edit</Button>
                    <Button className="btn-delete">Delete</Button>
                  </div>

                  <p className="justnow">Just Now</p>
                </div>
              </div>
            </div>

            <br />
            <hr />
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                }}
              >
                <p>Read more MrAds.lk Users</p>
                <div>
                  <Button className="btn">Boost Ad</Button>
                </div>
              </div>
            </div>
          </div>

          <h4>Pending Advertisements</h4>
          <div className="ad-main-container">
            <div className="ad-container">
              <img
                src={house}
                className="ad-img-container"
                width={'150px'}
                height={'150px'}
                style={{ borderRadius: '10px', objectFit: 'cover' }}
              />

              <div
                style={{
                  display: 'flex',

                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <h2 style={{ margin: '0px' }}>House for Sale</h2>
                    <h5 style={{ marginTop: '5px' }}>
                      5 Bed rooms, 5 Bath rooms
                    </h5>
                    <p className="p-tag-location">Kurunagala, House</p>
                  </div>

                  <h4 style={{ margin: '0px' }}>LKR 2 500 000.00</h4>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                  }}
                >
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <Button className="btn">Pay Now</Button>
                  </div>

                  <p className="justnow">Just Now</p>
                </div>
              </div>
            </div>

            <br />
            <hr />
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                }}
              >
                <p>Read more MrAds.lk Users</p>
                <div>
                  <Button className="btn">Boost Ad</Button>
                </div>
              </div>
            </div>
          </div>

          <h4>Rejected Advertisements</h4>
          <div className="ad-main-container">
            <div className="ad-container">
              <img
                src={house}
                className="ad-img-container"
                width={'150px'}
                height={'150px'}
                style={{ borderRadius: '10px', objectFit: 'cover' }}
              />

              <div
                style={{
                  display: 'flex',

                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <h2 style={{ margin: '0px' }}>House for Sale</h2>
                    <h5 style={{ marginTop: '5px' }}>
                      5 Bed rooms, 5 Bath rooms
                    </h5>
                    <p className="p-tag-location">Kurunagala, House</p>
                  </div>

                  <h4 style={{ margin: '0px' }}>LKR 2 500 000.00</h4>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                  }}
                >
                  <div className="edit-delete-div">
                    <div>
                      <Button className="btn">Edit</Button>
                    </div>
                    <div>
                      <Button className="btn-delete">Delete</Button>
                    </div>
                  </div>

                  <p className="justnow">Just Now</p>
                </div>
              </div>
            </div>

            <br />
            <hr />
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                }}
              >
                <p>Read more MrAds.lk Users</p>
                <div>
                  <Button className="btn">Review</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyAdvertisement;
