import React from 'react';
import './Post.css';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          marginBottom: '30px',
        }}
      >
        Post Advertisement or Job
      </h3>
      <div className="post-ad-container">
        <Grid container spacing={1} columns={12} className="post-grid-main">
          <Grid
            item
            lg={4}
            xs={12}
            sm={4}
            md={4}
            sx={{
              width: 'max-content',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="post-ad-div">
              <h3>Sell something</h3>
              <p> Post a advertisement for you want to sell a item</p>
              <br />
              <Button className="btn" onClick={() => navigate('/category')}>
                Post Ad
              </Button>
            </div>
          </Grid>
          {/* <Grid
            item
            lg={4}
            xs={12}
            sm={4}
            md={4}
            sx={{
              width: 'max-content',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="post-ad-div">
              <h3>Find Job Opportunity</h3>
              <p> Post a advertisement about job Opportunity you have</p>
              <Button className="btn" onClick={() => console.log('clicked')}>
                Post Ad
              </Button>
            </div>
          </Grid> */}
          <Grid
            item
            lg={4}
            xs={12}
            sm={4}
            md={4}
            sx={{
              width: 'max-content',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="post-ad-div">
              <h3>Rent something</h3>
              <p> Post a advertisement for you want to Rent a Item</p>
              <br />
              <Button className="btn" onClick={() => navigate('/post-ad-rent')}>
                Post Ad
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Post;
