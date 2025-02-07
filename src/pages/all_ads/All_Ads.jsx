import React, { useState } from 'react';
import './All_Ads.css';
import Hero from '../../components/Hero/Hero';
import { MenuItem, Select, TextField } from '@mui/material';
import Property from '../../images/property.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import house from '../../images/house.jpeg';
import house2 from '../../images/house2.jpg';
import Layer from '../../images/Layer_x0020_1.png';
import verify from '../../images/verify.png';
import TuneIcon from '@mui/icons-material/Tune';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SingleList from '../../components/SingleList/SingleList';

const All_Ads = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

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

  const hanldeClick = () => {
    navigate('/user-ad');
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
            <div className="cat-div" onClick={() => navigate('/search-ad')}>
              <img src={Property} className="img-categories" alt="img" />
              <p>Property</p>
            </div>
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
            <p>Ampara</p>
            <p>Anuradhapura</p>
            <p>Ampara</p>
            <p>Anuradhapura</p>
            <p>Ampara</p>
            <p>Anuradhapura</p>
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

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="select-drp-down"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div style={{ width: '100%' }}>
                <h4>Category</h4>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="select-drp-down"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>
          </div>

          <SingleList />
          <SingleList />
        </div>

        <br />
      </div>
    </>
  );
};

export default All_Ads;
