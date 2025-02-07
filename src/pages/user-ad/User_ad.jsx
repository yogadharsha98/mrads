import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './User_ad.css';

import { Link } from 'react-router-dom';
import profile from '../../images/profile.jpg';
import verify from '../../images/verify.png';
import whatsapp1 from '../../images/whatsapp (4).png';
import call from '../../images/call.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import house3 from '../../images/house3.jpg';
import house4 from '../../images/house4.jpg';
import house5 from '../../images/house5.jpg';
import house6 from '../../images/house6.jpg';
import house7 from '../../images/house7.jpg';
import house8 from '../../images/house8.jpg';

import Footer from '../../components/Footer/Footer';
import SingleList from '../../components/SingleList/SingleList';

const User_Ad = () => {
  const images = [house3, house4, house5, house6, house7, house8];

  const [image, setImage] = useState(house3);

  return (
    <>
      <div className="main">
        <div className="left">
          <p>
            Home / All Ads / Property / House for sale / Kurunagal / Mawathagama
            / Advertistment
          </p>
          <div className="left-main-div">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>House for Sale in Kurunagala</h3>
              <Link style={{ color: '#ff9d3d' }} className="share-ad">
                <h3>Share Ad</h3>
              </Link>
            </div>

            <p>
              Posted on 16 November 2024 at 8.00 am From Kurunagala Mawathagama
              Sale by <strong>Kavindu</strong>
            </p>
            <img src={image} alt="image" className="main-image" />

            {/* Carousel */}
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
              <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                style={{ width: '100%' }}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`carousel-image-${index}`}
                      className="carousel-img"
                      onClick={() => setImage(img)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '30px',
              }}
            >
              <h3 style={{ color: '#196CDF' }}>Rs. 500 000 000.00</h3>

              <Link>Report Ad</Link>
            </div>

            <table className="info-table">
              <tbody>
                <tr>
                  <th>Address</th>
                  <td style={{ padding: '8px' }}>
                    No 102, Colombo Road, Colombo 12
                  </td>
                </tr>
                <tr>
                  <th>Bedrooms</th>
                  <td>3</td>
                </tr>
                <tr>
                  <th>Bathrooms</th>
                  <td>2</td>
                </tr>
                <tr>
                  <th>House size</th>
                  <td>4012 Square Feet</td>
                </tr>
                <tr>
                  <th>Land size</th>
                  <td>15 perches</td>
                </tr>
              </tbody>
            </table>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris. Integer in mauris eu
              nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
              Donec lobortis risus a elit. Etiam tempor. <br /> <br />
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus. Nam nulla
              quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque
              fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices
              ut, elementum vulputate, nunc. Sed adipiscing ornare risus. Morbi
              est est, blandit sit amet, sagittis vel, euismod vel, velit.
              Pellentesque egestas, neque sit amet convallis pulvinar, justo
              nulla eleifend augue, ac auctor orci leo non est. Ut convallis,
              sem sit amet interdum consectetuer, odio augue aliquam leo, nec
              dapibus tortor nibh sed augue.
            </p>
          </div>
        </div>

        <div className="right">
          <div className="top-right">
            <h3>For Sale By</h3>
            <hr style={{ borderColor: '#196CDF', opacity: '0.4' }} />

            <div className="profile">
              <div className="profile-content">
                <img
                  src={profile}
                  alt="profile"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <h3>Kavindu Dilshan</h3>
                  <p>Member since November 2024</p>
                </div>
              </div>

              <img src={verify} alt="verified" width={'20px'} height={'20px'} />
            </div>

            <hr style={{ borderColor: '#196CDF', opacity: '0.4' }} />

            <h3>Contact Seller</h3>

            <div className="contact-div">
              <img
                src={whatsapp1}
                alt="contact"
                width={'20px'}
                height={'20px'}
                style={{ marginTop: '18px' }}
              />
              <p>+91 223 3434 </p>
            </div>

            <div className="contact-div">
              <img
                src={call}
                alt="contact"
                width={'20px'}
                height={'20px'}
                style={{ marginTop: '18px' }}
              />
              <p>+91 223 3434 </p>
            </div>
          </div>

          <div className="sub-right">
            <h3>Advertisement </h3>
          </div>

          <div className="sub-right">
            <h3>Security Message </h3>
          </div>
        </div>
      </div>

      <div>
        <Grid container spacing={2} columns={12} className="grid-main">
          <Grid item lg={6} xs={12} sm={12} md={12}>
            <SingleList />
          </Grid>

          <Grid item lg={6} xs={12} sm={12} md={12}>
            <SingleList />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </>
  );
};

export default User_Ad;
