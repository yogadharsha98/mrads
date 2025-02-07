import React from 'react';
import Post from '../../components/Post/Post';
import Footer from '../../components/Footer/Footer';
import { Button, InputAdornment, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';

const PostAd = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />

      <div style={{ marginBottom: '150px' }}>
        <Post />
      </div>

      <br />

      <Footer />
    </>
  );
};

export default PostAd;
