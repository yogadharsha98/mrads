import React from 'react';
import './SingleList.css';
import { useNavigate } from 'react-router-dom';
import house from '../../images/house.jpeg';
import Layer from '../../images/Layer_x0020_1.png';

const SingleList = () => {
  const navigate = useNavigate();
  const hanldeClick = () => {
    navigate('/user-ad');
  };
  return (
    <div className="single-container1" onClick={hanldeClick}>
      <img
        src={house}
        className="img-container"
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
            <h5 style={{ marginTop: '5px' }}>5 Bed rooms, 5 Bath rooms</h5>
            <p className="p-tag-location">Kurunagala, House</p>
          </div>

          <h4 style={{ margin: '0px' }}>LKR 2 500 000.00</h4>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img
            src={Layer}
            width={'20px'}
            height={'auto'}
            className="layer-img"
          />
          <p className="justnow">Just Now</p>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
