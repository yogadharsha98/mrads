import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Search_ad.css';
import Hero from '../../components/Hero/Hero';
import { MenuItem, Select } from '@mui/material';
import Property from '../../images/property.png';
import { Link } from 'react-router-dom';
import house from '../../images/house.jpeg';
import house2 from '../../images/house2.jpg';
import Layer from '../../images/Layer_x0020_1.png';
import verify from '../../images/verify.png';
import TuneIcon from '@mui/icons-material/Tune';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';
import { fetchLocations } from '../../redux/slices/locationSlice'; // Import your action
import { fetchCategories } from '../../redux/slices/categorySlice'; // Correct path
import { useParams } from 'react-router-dom';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Search_Ad = () => {
  const { slug } = useParams();  // Get the slug from the URL
  const [open, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [showMoreSubCategories, setShowMoreSubCategories] = useState(false); // State for toggling subcategories

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenCategories(false);
    setOpenFilter(false);
  };

  const handleOpenCategory = () => {
    setOpenCategories(true);
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const [showMore, setShowMore] = useState(false); // State to toggle the visibility of more locations
  const dispatch = useDispatch();

  // Access the Redux store state
  const { locations, loading, error } = useSelector((state) => state.locations);

  // Dispatch action to fetch locations when the component mounts
  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  // Function to toggle showing more locations
  const handleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  // Get categories from Redux state
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.categories);
  // Dispatch action to fetch locations when the component mounts
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Get the first 5 locations and the remaining locations
  const displayedLocations = showMore ? locations : locations.slice(0, 5);
  // Find the category that matches the slug
  const selectedCategory = categories.find(category => category.slug === slug);

  // Function to toggle showing more subcategories
  const handleShowMoreSubCategories = () => {
    setShowMoreSubCategories((prevState) => !prevState);
  };


  return (
    <>
      <Hero />

      <div className="mobile-div">
        <div
          className="mobile-sub-div"
          onClick={handleOpen}
          style={{ cursor: 'pointer' }}
        >
          <LocationOnIcon style={{ marginTop: '20px' }} />

          <h4>Location</h4>
        </div>

        <hr
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            borderColor: '#196CDF',
            opacity: '0.1',
          }}
        />

        <div
          className="mobile-sub-div"
          onClick={handleOpenCategory}
          style={{ cursor: 'pointer' }}
        >
          <CategoryIcon style={{ marginTop: '20px' }} />
          <h4>Category</h4>
        </div>
        <hr
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            borderColor: '#196CDF',
            opacity: '0.1',
          }}
        />

        <div className="mobile-sub-div">
          <TuneIcon
            style={{ marginTop: '20px', cursor: 'pointer' }}
            onClick={handleOpenFilter}
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h6" style={{ color: '#196CDF' }}>
            Location
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#333',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Ampara
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Anuradhapura
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Ampara
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Anuradhapura
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Ampara
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Anuradhapura
          </Typography>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openCategories}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <Typography variant="h6" style={{ color: '#196CDF' }}>
            Categories
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#333',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Ampara
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Anuradhapura
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Ampara
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Anuradhapura
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Ampara
          </Typography>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Anuradhapura
          </Typography>
        </DialogContent>
      </Dialog>

      <Dialog open={openFilter} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#333',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography style={{ margin: '10px 0', cursor: 'pointer' }}>
            Ampara
          </Typography>

          <h4>Sort Result By</h4>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="select-drp-down"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <h4>Advertiser</h4>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="select-drp-down"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </DialogContent>
      </Dialog>

      <div className="container">
        <div className="left-side">
          <h4>Sort Result By</h4>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="select-drp-down"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <h4>Advertiser</h4>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="select-drp-down"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <br />

          <div className="categories">
            <hr
              style={{
                marginTop: '30px',
                marginBottom: '30px',
                borderColor: '#196CDF',
                opacity: '0.4',
              }}
            />
            <h4>Categories</h4>

            {/* Check if the selected category exists */}
            {selectedCategory ? (
              <div>
                <div className="cat-div">
                  <img
                    src={selectedCategory.image.replace(/\\/g, '')} // Clean up any escape characters
                    className="img-categories"
                    alt={selectedCategory.title}
                  />
                  <strong>
                    <p style={{ color: '#196CDF' }}>{selectedCategory.title}</p>
                  </strong>
                </div>
                <div className="sub-cat-div">
                  {/* Render subcategories */}
                  {selectedCategory.subcategories && selectedCategory.subcategories.length > 0 ? (
                    <>
                      {/* Show the first 5 subcategories and toggle rest */}
                      {showMoreSubCategories
                        ? selectedCategory.subcategories.map((subCategory, index) => (
                          <p key={index}>{subCategory.title}</p>
                        ))
                        : selectedCategory.subcategories.slice(0, 5).map((subCategory, index) => (
                          <p key={index}>{subCategory.title}</p>
                        ))
                      }
                      {/* Show More Button */}
                      {selectedCategory.subcategories.length > 5 && (
                        <span
                          className="show-text--13FcL filter-tree--SnrdH"
                          onClick={handleShowMoreSubCategories}
                          style={{ cursor: 'pointer', color: '#196CDF' }}
                        >
                          {showMoreSubCategories ? 'Show less' : 'Show more'}
                        </span>
                      )}
                    </>
                  ) : (
                    <p>No subcategories available.</p>
                  )}
                </div>
              </div>
            ) : (
              <p>Category not found.</p>
            )}
          </div>

          <br />

          <div className="location">
            <hr
              style={{
                marginBottom: '30px',
                borderColor: '#196CDF',
                opacity: '0.4',
              }}
            />
            <h4>Location</h4>

            {loading && <Typography>Loading locations...</Typography>}
            {error && <Typography color="error">Error loading locations: {error}</Typography>}

            {/* Dynamically render the locations */}
            {!loading && !error && displayedLocations.length > 0 && (
              <div>
                {displayedLocations.map((location) => (
                  <p key={location.id} style={{ marginBottom: '10px', cursor: 'pointer' }}>
                    {location.title}
                  </p>
                ))}
              </div>
            )}

            {/* If no locations are found */}
            {!loading && !error && locations.length === 0 && (
              <Typography>No locations available.</Typography>
            )}

            {/* Show More Button */}
            {!loading && !error && locations.length > 5 && (
              <span
                className="show-text--13FcL filter-tree--SnrdH"
                onClick={handleShowMore}
                style={{ cursor: 'pointer', color: '#196CDF' }}
              >
                {showMore ? 'Show less' : 'Show more'}
              </span>
            )}
          </div>
        </div>

        <div className="right-side">
          <div className="sub-right-side">
            <div>
              <Link>All Ads</Link> /
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                gap: '20px',
              }}
            >
              <div style={{ width: '100%' }}>
                <h4>Location</h4>

                {/* Select dropdown for locations */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="select-drp-down"
                  defaultValue=""
                  displayEmpty // Ensure the placeholder is shown
                >
                  {/* Placeholder */}
                  <MenuItem value="" disabled>
                    Select a Location
                  </MenuItem>
                  {loading && <MenuItem disabled>Loading locations...</MenuItem>}
                  {error && <MenuItem disabled>Error loading locations: {error}</MenuItem>}
                  {/* Dynamically render locations in the dropdown */}
                  {!loading && !error && locations.length > 0 ? (
                    locations.map((location) => (
                      <MenuItem key={location.id} value={location.id}>
                        {location.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No locations available</MenuItem>
                  )}
                </Select>
              </div>

              <div style={{ width: '100%' }}>
                <h4>Category</h4>

                {/* Select dropdown for locations */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="select-drp-down"
                  defaultValue=""
                  displayEmpty // Ensure the placeholder is shown
                // You can add an event handler for onChange if needed
                >
                   {/* Placeholder */}
                   <MenuItem value="" disabled>
                    Select a Category
                  </MenuItem>
                  {loading && <MenuItem disabled>Loading categories...</MenuItem>}
                  {error && <MenuItem disabled>Error loading categories: {error}</MenuItem>}

                  {/* Dynamically render locations in the dropdown */}
                  {!loading && !error && categories.length > 0 ? (
                    categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.title}
                      </MenuItem>
                    ))
                  ) : (
                    // If no locations are found
                    <MenuItem disabled>No categories available</MenuItem>
                  )}
                </Select>
              </div>
            </div>
          </div>

          <div className="single-container1">
            <img
              src={house}
              className="img-container"
              width={'150px'}
              height={'150px'}
              style={{ borderRadius: '10px' }}
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
                  <h5 style={{ marginTop: '5px' }}>
                    5 Bed rooms, 5 Bath rooms
                  </h5>
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

          <div className="single-container2">
            <img
              src={house2}
              className="img-container"
              width={'150px'}
              height={'150px'}
              style={{ borderRadius: '10px' }}
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
                  <h5 style={{ marginTop: '5px' }}>
                    5 Bed rooms, 5 Bath rooms
                  </h5>
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
                  src={verify}
                  width={'20px'}
                  height={'auto'}
                  className="verify-img"
                />
                <p className="justnow">Just Now</p>
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
    </>
  );
};

export default Search_Ad;
