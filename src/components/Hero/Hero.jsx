import { Button, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="home-hero">
        <h1 className="home-hero-h1">
          "Discover&nbsp;
          <span style={{ color: '#FF9D3D' }}> Everything </span>&nbsp;You Need"
        </h1>

        <div>
          <TextField
            placeholder="Search..."
            className="search-field"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    className="btn"
                    onClick={() => console.log('clicked')}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="btn-group-hero">
          <Button className="btn" onClick={() => navigate('/view-all-ad')}>
            View All Ads
          </Button>
          <Button className="btn" onClick={() => navigate('/post-ad')}>
            Post Your Ads
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
