import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import './Category.css';
import SingleCard from '../../components/Category/SingleCard';
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categorySlice'; // Correct path
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showSubCategory, setShowSubCategory] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Added state for selected category

  // Get categories from Redux state
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    // Dispatch action to fetch categories when the component mounts
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCardClick = (category) => {
    setSelectedCategory(category); // Set the selected category
    setShowSubCategory(true); // Display the subcategories
    // Open the dialog only on mobile screens
    if (window.innerWidth <= 1024) {
      setOpenDialog(true);
      setShowSubCategory(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  return (
    <>
      <Hero />

      <div className="main-category-div">
        <div className="left-category">
          <h3 style={{ display: 'flex', justifyContent: 'center' }}>
            Select Category
          </h3>
          <Grid
            container
            spacing={2}
            columns={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '100%',
            }}
          >
            {/* Dynamically rendering categories from Redux */}
            {categories?.map((category, index) => (
              <Grid
                item
                lg={3}
                xs={6}
                sm={4}
                md={3}
                key={index}
                onClick={() => handleCardClick(category)}
              >
                <SingleCard
                  image={category.image.replace(/\\/g, '')}
                  name={category.title}
                  count={category.count}
                />
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="right-category">
          {showSubCategory && !openDialog && selectedCategory && (
            <div>
              <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                Select Sub Category
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {/* Dynamically render subcategories */}
                {selectedCategory.subcategories?.map((subCategory, index) => (
                  <div
                    className="sub-cat-tab"
                    key={index}
                    onClick={() => navigate('/post-ad-sell')}
                  >
                    <strong>{subCategory.title}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dialog for Sub Category Selection */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Select Sub Category</DialogTitle>
        <DialogContent>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Dynamically render subcategories in the dialog */}
            {selectedCategory?.subcategories?.map((subCategory, index) => (
              <div
                className="sub-cat-tab"
                key={index}
                onClick={() => {
                  const categoryId = selectedCategory.id; // Get category ID
                  const subCategoryId = subCategory.id; // Get subcategory ID
                  navigate(
                    `/post-ad-sell?type=for_sale&category=${categoryId}&subcategory=${subCategoryId}`
                  );
                  handleCloseDialog(); // Close the dialog
                }}
              >
                <strong>{subCategory.title}</strong>
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <br />

      <Footer />
    </>
  );
};

export default Category;
