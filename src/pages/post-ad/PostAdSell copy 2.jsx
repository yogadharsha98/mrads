import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostAdRent.css';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import { Button, Card, Grid, MenuItem, Select, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { fetchCategories } from '../../redux/slices/categorySlice'; // Correct path

const PostAdSell = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedFields, setSelectedFields] = useState({}); // Store fields dynamically based on category and subcategory

  const maxImages = 6;

  // Redux state for categories
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  const {
    categoryFields,
    loading: fieldsLoading,
    error: fieldsError,
  } = useSelector((state) => state.categoryFields);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNumber = () => {
    if (inputNumber.trim() !== '') {
      setNumbers((prevNumbers) => [...prevNumbers, inputNumber.trim()]);
      setInputNumber('');
    }
  };

  const handleRemoveNumber = (indexToRemove) => {
    setNumbers((prevNumbers) =>
      prevNumbers.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(''); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  // Find the subcategories based on the selected category
  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory
  );
  const subCategories = selectedCategoryData
    ? selectedCategoryData.subcategories
    : [];

  // Handle form field changes dynamically
  const handleFieldChange = (fieldId, value) => {
    setSelectedFields((prevFields) => ({
      ...prevFields,
      [fieldId]: value,
    }));
  };

  return (
    <>
      <Hero />

      <div className="form-container">
        <h3>Post Advertisement for Sell</h3>

        <div className="postad-form">
          {/* Category Selection */}
          <div className="form-field">
            <strong>
              <p>Category</p>
            </strong>
            <Select
              labelId="category-select-label"
              id="category-select"
              className="post-drp-down"
              value={selectedCategory || ''} // Ensure this is not undefined
              onChange={handleCategoryChange} // Handle category selection
              defaultValue=""
              displayEmpty // Ensure the placeholder is shown
            >
              {/* Placeholder */}
              <MenuItem value="" disabled>
                Select a Category
              </MenuItem>
              {loading && <MenuItem disabled>Loading categories...</MenuItem>}
              {error && (
                <MenuItem disabled>
                  Error loading categories: {error.message}
                </MenuItem>
              )}
              {categories.length > 0 &&
                categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.title}
                  </MenuItem>
                ))}
            </Select>
          </div>

          {/* Subcategory Selection */}
          {selectedCategory && (
            <div className="form-field">
              <strong>
                <p>Subcategory</p>
              </strong>
              <Select
                labelId="subcategory-select-label"
                id="subcategory-select"
                className="post-drp-down"
                value={selectedSubCategory || ''}
                onChange={handleSubCategoryChange} // Handle subcategory selection
                defaultValue=""
                displayEmpty // Ensure the placeholder is shown
              >
                {/* Placeholder */}
                <MenuItem value="" disabled>
                  Select a Sub Category
                </MenuItem>
                {subCategories.length > 0 &&
                  subCategories.map((subCategory) => (
                    <MenuItem key={subCategory.id} value={subCategory.id}>
                      {subCategory.title}
                    </MenuItem>
                  ))}
              </Select>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Condition</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Brand</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Model</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Trim/Edition (Optional)</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Manufactured year</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Millege (km) </p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Engine Capacity (cc)</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Fuel type</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Transmission</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Body Type</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <hr />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>District</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>City</p>
            </strong>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="post-drp-down"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <hr />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Title</p>
            </strong>
            <TextField className="title" />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Description</p>
            </strong>
            <TextField
              multiline
              className="des-text-area"
              rows={10} // Sets the default height via number of rows
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px', // Adjust border radius
                  backgroundColor: '#ffffff',
                },
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>Price</p>
              </strong>
              <TextField className="post-txt-field" />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <strong>
                <p>Select</p>
              </strong>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="post-month-drp-down"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </div>

          <hr />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Name</p>
            </strong>
            <TextField className="title" />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Whats app Number (Optional) </p>
            </strong>
            <TextField className="title" />
          </div>

          <div className="add-num-option">
            <Grid container spacing={2} columns={12}>
              {numbers.map((number, index) => (
                <Grid item lg={4} sm={6} xs={6} md={4} key={index}>
                  <div
                    style={{
                      width: 'max-content',
                      backgroundColor: '#f8f8f8',
                      borderRadius: '50px',
                      padding: '0px 10px 0px 10px',
                    }}
                  >
                    <div className="number-option">
                      <p>{number}</p>
                      <CancelRoundedIcon
                        style={{
                          marginTop: '15px',
                          color: '#ff9d3d',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleRemoveNumber(index)}
                      />
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Add telephone Number </p>
            </strong>
            <div style={{ display: 'flex', gap: '20px' }}>
              <TextField
                className="add-number"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
              />
              <Button
                className="btn"
                style={{ height: '40px' }}
                onClick={handleAddNumber}
              >
                Add
              </Button>
            </div>
          </div>

          <hr />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <strong>
              <p>Add photos </p>
            </strong>
            <div className="add-photo-div">
              <Grid container spacing={2} columns={12}>
                {images.length < maxImages && (
                  <Grid item lg={2} xs={4} sm={4} md={2}>
                    <Card
                      className="card-add"
                      sx={{ backgroundColor: '#dcdcdc' }}
                    >
                      <label style={{ cursor: 'pointer' }}>
                        <AddCircleIcon style={{ color: '#ff9d3d' }} />
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={handleAddPhoto}
                        />
                      </label>
                    </Card>
                  </Grid>
                )}
                {images.map((image, index) => (
                  <Grid item lg={2} xs={4} sm={4} md={2} key={index}>
                    <Card
                      className="sub-card"
                      sx={{ backgroundColor: '#dcdcdc' }}
                    >
                      <img
                        src={image}
                        alt={`uploaded-${index}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Card>
                  </Grid>
                ))}
                {/* Placeholder Slots */}
                {[...Array(maxImages - images.length)].map((_, index) => (
                  <Grid item lg={2} xs={4} sm={4} md={2} key={index}>
                    <Card
                      sx={{
                        backgroundColor: '#dcdcdc',
                      }}
                      className="sub-img-card"
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>

          <div
            style={{
              margin: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p>
              By clicking this button I agree to terms & conditions of MrAds.lk
            </p>
          </div>

          <Button className="btn">Post Ad</Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PostAdSell;
