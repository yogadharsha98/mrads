import React, { useEffect, useState } from 'react';
import './PostAdRent.css';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import { Button, Card, Grid, MenuItem, Select, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFieldsByCategoryAndSubcategory } from '../../redux/slices/fieldSlice';
import { fetchCategories } from '../../redux/slices/categorySlice';
import { fetchLocations } from '../../redux/slices/locationSlice';
import { getFieldOptions } from '../../redux/slices/fieldOptionSlice';
import { getSubLocations } from '../../redux/slices/subLocationSlice';
import { createPostRentAd } from '../../redux/slices/postAdRentSlice';
import { ToastContainer, toast } from 'react-toastify';

const PostAdRent = () => {
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedFields, setSelectedFields] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  const [titleInput, setTitleInput] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [priceUnit, setPriceUnit] = useState('');
  const [contactName, setContactName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const maxImages = 6;

  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  const { fields, isLoading, isError } = useSelector((state) => state.field);
  const { locations } = useSelector((state) => state.locations);

  const validateForm = () => {
    if (!titleInput.trim()) {
      alert('Please provide a title.');
      return false;
    }
    if (!selectedCategory || !selectedSubCategory) {
      alert('Please select a category and subcategory.');
      return false;
    }
    if (!description.trim()) {
      alert('Please provide a description.');
      return false;
    }
    if (!termsAccepted) {
      alert('You must agree to the terms and conditions.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const postRentAd = {
        title: titleInput,
        description,
        customer_id: 1,
        category_id: selectedCategory,
        sub_category_id: selectedSubCategory,
        district_id: selectedDistrict,
        city_id: selectedCity,
        price,
        price_unit: priceUnit,
        contact_name: contactName,
        contact_whatsapp: whatsappNumber,
        contact_numbers: JSON.stringify(numbers),
        images: JSON.stringify(images),
        fields: JSON.stringify(selectedFields),
        terms_accepted: termsAccepted,
        is_active: true,
        published_at: new Date().toISOString(),
      };

      try {
        const response = await dispatch(createPostRentAd(postRentAd));
        console.log('Response:', response);
        toast.success('Ad posted successfully');
      } catch (error) {
        console.error('Error posting ad:', error);
        toast.error('Failed to post. Please try again.');
      }
    }
  };

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
    setSelectedFields({});
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
    setSelectedFields({});
  };

  const handleFieldChange = (fieldId, value, checked = null) => {
    setSelectedFields((prev) => {
      const existingValues = Array.isArray(prev[fieldId]) ? prev[fieldId] : [];

      if (checked === true) {
        // Checkbox checked
        return { ...prev, [fieldId]: [...existingValues, value] };
      } else if (checked === false) {
        // Checkbox unchecked
        return {
          ...prev,
          [fieldId]: existingValues.filter((v) => v !== value),
        };
      } else {
        // Handle other inputs (text, select, radio)
        return { ...prev, [fieldId]: value };
      }
    });
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setSelectedDistrict(districtId);

    if (districtId) {
      dispatch(getSubLocations({ locationId: districtId }))
        .unwrap()
        .then((data) => {
          setCities(data);
        })
        .catch((error) => {
          console.error('Failed to fetch sub-locations:', error);
        });
    } else {
      setCities([]);
    }
  };

  // Find the subcategories based on the selected category
  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory
  );
  const subCategories = selectedCategoryData
    ? selectedCategoryData.subcategories
    : [];

  useEffect(() => {
    dispatch(getFieldOptions({ categoryId: 1, subCategoryId: 4, fieldId: 5 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchLocations());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory && selectedSubCategory) {
      console.log('Dispatching fetchFieldsByCategoryAndSubcategory:', {
        categoryId: selectedCategory,
        subCategoryId: selectedSubCategory,
      });
      dispatch(
        fetchFieldsByCategoryAndSubcategory({
          categoryId: selectedCategory,
          subCategoryId: selectedSubCategory,
        })
      );
    } else {
      console.warn('Category or Subcategory not selected');
    }
  }, [selectedCategory, selectedSubCategory, dispatch]);

  return (
    <>
      <Hero />

      <div className="form-container">
        <h3>Post Advertistment for Rent</h3>

        <form
          className="postad-form"
          onSubmit={(e) => {
            e.preventDefault(); // Prevents the default behavior
            handleSubmit(); // Calls your custom form submission logic
          }}
        >
          {/* Category Selection */}
          <div className="form-field">
            <strong>
              <p>Category</p>
            </strong>
            <Select
              required
              labelId="category-select-label"
              id="category-select"
              className="post-drp-down"
              value={selectedCategory || ''}
              displayEmpty
              onChange={handleCategoryChange}
            >
              <MenuItem value="" disabled>
                Select a Category
              </MenuItem>

              {categories?.length > 0 && (
                <MenuItem key={2} value={2}>
                  {categories.find((category) => category.id === 2)?.title ||
                    'Not Found'}
                </MenuItem>
              )}
            </Select>
          </div>

          {/* Subcategory Selection */}
          {selectedCategory && (
            <div className="form-field">
              <strong>
                <p>Subcategory</p>
              </strong>
              <Select
                required
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

                {subCategories?.length > 0 &&
                  [11, 13, 14, 15, 16, 17]
                    .map((id) => subCategories.find((sub) => sub.id === id))
                    .filter(Boolean) // Removes any undefined values
                    .map((subCategory) => (
                      <MenuItem key={subCategory.id} value={subCategory.id}>
                        {subCategory.title}
                      </MenuItem>
                    ))}
              </Select>
            </div>
          )}

          {fields && fields.length > 0 ? (
            fields.map((field) => (
              <div key={field.id} className="form-field">
                <strong>
                  <p>{field.name}</p>
                </strong>

                {/* Render Select Dropdown */}
                {field.type === 'select' && field.options && (
                  <Select
                    required
                    value={selectedFields[field.id] || ''}
                    onChange={(e) =>
                      handleFieldChange(field.id, e.target.value)
                    }
                    className="post-drp-down"
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select {field.name}
                    </MenuItem>
                    {field.options.map((option, index) => (
                      <MenuItem key={index} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </Select>
                )}

                {/* Render Text Input */}
                {field.type === 'text' && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <TextField
                      required
                      value={selectedFields[field.id] || ''}
                      onChange={(e) =>
                        handleFieldChange(field.id, e.target.value)
                      }
                      className="title"
                      style={{ flex: 1 }}
                    />
                    {field.name === 'Land size' && (
                      <Select
                        required
                        value={selectedFields['land_size_unit'] || 'Perches'}
                        onChange={(e) =>
                          handleFieldChange('land_size_unit', e.target.value)
                        }
                        className="unit-dropdown"
                        style={{ width: '100px' }}
                      >
                        <MenuItem value="Perches">Perches</MenuItem>
                        <MenuItem value="Acres">Acres</MenuItem>
                      </Select>
                    )}
                  </div>
                )}

                {/* Render Checkbox Group */}
                {/* Render Checkbox Group */}
                {field.type === 'checkbox_multiple' && field.options && (
                  <div className="check-box-field">
                    {field.options.map((option) => (
                      <label key={option.id}>
                        <input
                          type="checkbox"
                          checked={
                            selectedFields[field.id]?.includes(option.value) ||
                            false
                          }
                          onChange={(e) =>
                            handleFieldChange(
                              field.id,
                              option.value,
                              e.target.checked
                            )
                          }
                        />
                        {option.value}
                      </label>
                    ))}
                  </div>
                )}

                {/* Render Radio Buttons */}
                {field.type === 'radio' && field.options && (
                  <div className="radio-field">
                    {field.options.map((option) => (
                      <label key={option.id} style={{ marginRight: '10px' }}>
                        <input
                          required
                          type="radio"
                          name={`radio-${field.id}`} // Unique name for each radio group
                          value={option.value}
                          checked={selectedFields[field.id] === option.value}
                          onChange={(e) =>
                            handleFieldChange(field.id, e.target.value)
                          }
                        />
                        {option.value}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : isLoading ? (
            <p>Loading fields...</p>
          ) : (
            <></>
          )}

          <hr />

          <div>
            <strong>
              <p>District</p>
            </strong>
            <Select
              required
              value={selectedDistrict || ''}
              onChange={handleDistrictChange}
              className="post-drp-down"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select a District
              </MenuItem>
              {locations.length > 0 ? (
                locations.map((district) => (
                  <MenuItem key={district.id} value={district.id}>
                    {district.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No districts available</MenuItem>
              )}
            </Select>
          </div>

          <div>
            <strong>
              <p>City</p>
            </strong>
            <Select
              required
              value={selectedCity || ''}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="post-drp-down"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select a City
              </MenuItem>
              {cities.length > 0 ? (
                cities.map((city) => (
                  <MenuItem key={city.id} value={city.id}>
                    {city.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No cities available</MenuItem>
              )}
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
            <TextField
              required
              className="title"
              name="title"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
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
              required
              multiline
              name="description"
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              <TextField
                required
                className="post-txt-field"
                name="price"
                value={price}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^\d*$/.test(input)) {
                    // Only allow digits (0-9)
                    setPrice(input);
                  }
                }}
                type="tel"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
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
                defaultValue=""
                displayEmpty
                value={priceUnit}
                name="price_unit"
                onChange={(e) => setPriceUnit(e.target.value)} // Update state
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value="per month">Per Month</MenuItem>
                <MenuItem value="per year">Per Year</MenuItem>
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
            <TextField
              required
              className="title"
              value={contactName}
              name="contact_name"
              onChange={(e) => setContactName(e.target.value)}
            />
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
            <TextField
              className="title"
              value={whatsappNumber}
              onChange={(e) => {
                let onlyNums = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                if (onlyNums.length > 10) {
                  onlyNums = onlyNums.slice(0, 10); // Limit to 10 digits
                }
                setWhatsappNumber(onlyNums);
              }}
              type="tel" // Prevents number spinner
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
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
                name="contact_numbers"
                onChange={(e) => {
                  let onlyNums = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                  if (onlyNums.length > 10) {
                    onlyNums = onlyNums.slice(0, 10); // Limit to 10 digits
                  }
                  setInputNumber(onlyNums);
                }}
                type="tel"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
                    <label
                      htmlFor="upload-image"
                      style={{ cursor: 'pointer', width: '100%' }}
                    >
                      <Card
                        className="card-add"
                        sx={{ backgroundColor: '#dcdcdc' }}
                      >
                        <AddCircleIcon style={{ color: '#ff9d3d' }} />
                      </Card>
                    </label>
                    <input
                      id="upload-image"
                      required
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleAddPhoto}
                    />
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
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <input
              required
              type="checkbox"
              style={{ width: '17px', height: '17px' }}
              checked={termsAccepted}
              name="terms_accepted"
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <p>
              By clicking this button I agree to terms & conditions of MrAds.lk
            </p>
          </div>

          <Button className="btn" type="submit">
            Post Ad
          </Button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Footer />
    </>
  );
};

export default PostAdRent;
