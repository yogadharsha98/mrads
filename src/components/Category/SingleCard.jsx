import './Card.css';
import React from 'react';

const SingleCard = ({ image, name, count }) => {
  return (
    <>
      <div className="singlecard-container">
        <div className="card-content">
          <img src={image} className="card-img" />
          <strong style={{ textAlign: 'center' }}>
            <p style={{ margin: 0, marginTop: '20px' }}>{name}</p>
          </strong>
          <p style={{ margin: 0, opacity: '0.8' }}>{count}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
