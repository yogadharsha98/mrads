import React, { useEffect } from 'react';
import SingleCard from './SingleCard';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categorySlice'; // Correct path

const CategoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get categories from Redux state
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    // Dispatch action to fetch categories
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          marginBottom: '40px',
        }}
      >
        Browse Advertisement By Category
      </h3>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading categories...</p>
      ) : error ? (
        <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Grid
            container
            spacing={2}
            columns={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '90%',
            }}
          >
            {categories.map((category, index) => (
              <Grid
                item
                key={index}
                lg={2}
                xs={6}
                sm={4}
                md={3}
                onClick={() => navigate(`/ads/${category.slug}`)} // Navigate with category slug
              >
                <SingleCard
                  image={category.image.replace(/\\/g, '')} // Remove escape characters
                  name={category.title}
                  count={category.count}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default CategoryList;
