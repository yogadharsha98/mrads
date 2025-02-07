import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import './Home.css';

import CategoryList from '../../components/Category/CategoryList';
import BrowseAd from '../../components/BrowseAd/BrowseAd';
import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />

      <CategoryList />

      <BrowseAd />

      <Post />

      <Footer />
    </>
  );
};

export default Home;
