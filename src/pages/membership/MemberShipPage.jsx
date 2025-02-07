import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import Membership from '../../images/Membership.png';
import './Membership.css';
import Property from '../../images/property.png';
import business_industry from '../../images/business_insustry.png';
import agriculture from '../../images/agriculture.png';
import trust from '../../images/Trust  1.png';
import customer_service from '../../images/customer-service.png';
import best_pricing from '../../images/best-pricing 1.png';
import verify from '../../images/verify.png';
import Footer from '../../components/Footer/Footer';

const MemberShip = () => {
  return (
    <>
      <div className="membership-container">
        <div className="membership-left">
          <h1>Discover the advantages of being an MrAds.lk member</h1>
          <p>
            Check out our membership options and gain access to a range of
            benefits aimed at boosting your online presence and driving sales
            growth.
          </p>
          <div style={{ marginTop: '40px' }}>
            <Button className="btn">Apply Membership</Button>
          </div>
        </div>
        <div className="membership-right">
          <img src={Membership} alt="img" className="member-img" />
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3>Register in just three simple steps!</h3>
        </div>

        <div className="membership-sub-div">
          <strong>
            <p>1.Select your business category</p>
          </strong>

          <Grid
            container
            spacing={2}
            columns={12}
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              width: '100%',
            }}
          >
            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img src={Property} alt="img" width={'40px'} height={'40px'} />

                <p>Property</p>
              </div>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img
                  src={business_industry}
                  alt="img"
                  width={'40px'}
                  height={'40px'}
                />

                <p>Business industry</p>
              </div>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img
                  src={agriculture}
                  alt="img"
                  width={'40px'}
                  height={'40px'}
                />

                <p>Agriculture</p>
              </div>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img src={Property} alt="img" width={'40px'} height={'40px'} />

                <p>Property</p>
              </div>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img src={Property} alt="img" width={'40px'} height={'40px'} />

                <p>Property</p>
              </div>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img src={Property} alt="img" width={'40px'} height={'40px'} />

                <p>Property</p>
              </div>
            </Grid>
            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img src={Property} alt="img" width={'40px'} height={'40px'} />

                <p>Property</p>
              </div>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img src={Property} alt="img" width={'40px'} height={'40px'} />

                <p>Property</p>
              </div>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={3}>
              <div className="div-single-card">
                <img src={Property} alt="img" width={'40px'} height={'40px'} />

                <p>Property</p>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="membership-sub-div">
          <strong>
            <p>2.Select a Plan</p>
          </strong>

          <div className="plan-main-div">
            <div className="plan-div">
              <h3 style={{ color: '#196CDF' }}>Monthly</h3>
              <hr />
              <div>
                <p>
                  Cost per ad - <strong>LKR 500.00</strong>
                </p>
                <p>
                  Validity period - <strong>1 month</strong>
                </p>
                <p>
                  Number of ads per month - <strong>20 ads</strong>
                </p>
                <p>
                  Free promotion voucher - <strong>LKR 7800</strong>
                </p>
              </div>
              <h1 style={{ color: '#196CDF' }}>LKR 10,000</h1>
              <div style={{ width: '100%' }}>
                <Button className="btn" style={{ width: '100%' }}>
                  Select Plan
                </Button>
              </div>
            </div>

            <div className="plan-div">
              <h3 style={{ color: '#196CDF' }}>Quarterly</h3>
              <hr />
              <div>
                <p>
                  Cost per ad - <strong>LKR 350.00</strong>
                </p>
                <p>
                  Validity period - <strong>3 months</strong>
                </p>
                <p>
                  Number of ads per month - <strong>50 ads</strong>
                </p>
                <p>
                  Free promotion voucher - <strong>LKR 7800</strong>
                </p>
              </div>
              <h1 style={{ color: '#196CDF' }}>LKR 52,500</h1>
              <div style={{ width: '100%' }}>
                <Button className="btn" style={{ width: '100%' }}>
                  Select Plan
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="membership-sub-div">
          <strong>
            <p>3. Share some information about your business</p>
          </strong>
          <div className="simple-form">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>Business Name</p>
              </strong>
              <TextField
                className="member-txt-field"
                placeholder="RTP Lanka Solution"
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>Email</p>
              </strong>
              <TextField
                className="member-txt-field"
                placeholder="rtplankasolutions@gmail.com"
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>Mobile Number</p>
              </strong>
              <TextField
                className="member-txt-field"
                placeholder="0112234566"
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <Button className="btn">Buy Membership</Button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <h3>Advantages of Membership</h3>
        </div>

        <div className="membership-sub-div">
          <div className="advantage-main-div">
            <div className="advantage-div">
              <img
                src={best_pricing}
                alt="img"
                style={{ width: '70px', height: '70px' }}
              />
              <strong>
                <p
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Discounted Price
                </p>
              </strong>
            </div>

            <div className="advantage-div">
              <img
                src={verify}
                alt="img"
                style={{ width: '70px', height: '70px' }}
              />
              <strong>
                <p
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Display Verified Seller Badge
                </p>
              </strong>
            </div>

            <div className="advantage-div">
              <img
                src={customer_service}
                alt="img"
                style={{ width: '70px', height: '70px' }}
              />
              <strong>
                {' '}
                <p
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Dedicated Customer Support
                </p>
              </strong>
            </div>

            <div className="advantage-div">
              <img
                src={trust}
                alt="img"
                style={{ width: '70px', height: '70px' }}
              />
              <strong>
                {' '}
                <p
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Build Trust On Your Business
                </p>
              </strong>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MemberShip;
