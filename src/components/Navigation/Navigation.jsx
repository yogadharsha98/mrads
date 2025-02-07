import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Navigation.css';
import LoginIcon from '@mui/icons-material/Login';

const Navigation = ({ children }) => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div>
        <Box
          sx={{
            flexGrow: 1,
            borderBottom: '1px solid #fff',
            width: '100%',
          }}
        >
          <AppBar position="static" sx={{ backgroundColor: '#196CDF' }}>
            <Toolbar
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: '0 8px',
              }}
            >
              <div className="menu-icon">
                <MenuIcon
                  onClick={toggleDrawer(true)}
                  style={{
                    fontSize: '30px',
                    marginTop: '5px',
                    color: '#fff',
                  }}
                />
              </div>
              &nbsp; &nbsp;
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: { xs: '20px', sm: '20px' },
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
              >
                MrAds.lk
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: '8px', sm: '16px' },
                }}
              >
                <Button>
                  <AccountCircleOutlinedIcon
                    style={{
                      fontSize: '30px',
                      color: '#fff',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate('/my-account')}
                  />
                </Button>

                <div className="mobile-login-toggle">
                  <Button
                    color="inherit"
                    sx={{
                      textTransform: 'none',
                      marginRight: '20px',
                      fontSize: { xs: '14px', sm: '18px' }, // Adjust font size for smaller screens
                    }}
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>

                  <ToggleButtonGroup
                    value={language}
                    exclusive
                    onChange={handleLanguageChange}
                    aria-label="language selection"
                    sx={{
                      backgroundColor: 'primary',
                      border: '1px solid #ccc',
                      height: '30px',
                      borderRadius: '20px',
                      '& .MuiToggleButtonGroup-grouped': {
                        border: 'none',
                        '&:not(:last-of-type)': {
                          borderRadius: '20px 0 0 20px',
                        },
                        '&:not(:first-of-type)': {
                          borderRadius: '0 20px 20px 0',
                        },
                      },
                    }}
                  >
                    <ToggleButton
                      value="sinhala"
                      sx={{
                        textTransform: 'none',
                        color: '#fff',
                        fontSize: { xs: '12px', sm: '14px' }, // Smaller font size for small screens
                        '&.Mui-selected': {
                          backgroundColor: '#fff',
                          color: 'black',
                          '&:hover': {
                            backgroundColor: '#fff',
                          },
                        },
                      }}
                    >
                      Sinhala
                    </ToggleButton>

                    <ToggleButton
                      value="english"
                      sx={{
                        textTransform: 'none',
                        color: '#fff',
                        fontSize: { xs: '12px', sm: '14px' },
                        '&.Mui-selected': {
                          backgroundColor: '#fff',
                          color: 'black',
                          '&:hover': {
                            backgroundColor: '#fff',
                          },
                        },
                      }}
                    >
                      English
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          anchor="left"
          PaperProps={{
            sx: {
              width: '50%', // Adjust the width here
              backgroundColor: '#124fa4',
            },
          }}
        >
          <div
            style={{
              height: '100%',
              padding: '30px 20px 20px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              gap: '5px',
            }}
          >
            <div
              style={{
                width: '100%',
                borderBottom: '1px solid rgba(248, 248, 255, 0.17)',
                paddingBottom: '10px',
              }}
            >
              <Button
                color="inherit"
                sx={{
                  textTransform: 'none',
                  color: '#f8f8ff',
                  fontSize: { xs: '14px', sm: '18px' },
                }}
                onClick={() => navigate('/login')}
              >
                <LoginIcon /> &nbsp; &nbsp; Login
              </Button>
            </div>

            <br />

            <div
              style={{
                width: '100%',
                borderBottom: '1px solid rgba(248, 248, 255, 0.17)',
                paddingBottom: '10px',
              }}
            >
              <Button
                color="inherit"
                sx={{
                  textTransform: 'none',
                  color: '#f8f8ff',
                  fontSize: { xs: '14px', sm: '18px' },
                }}
                onClick={() => navigate('/login')}
              >
                <LoginIcon /> &nbsp; &nbsp; Login
              </Button>
            </div>

            <div
              style={{
                width: '100%',
                marginTop: '50px',
              }}
            >
              <ToggleButtonGroup
                value={language}
                exclusive
                onChange={handleLanguageChange}
                aria-label="language selection"
                sx={{
                  backgroundColor: 'primary',
                  border: '1px solid #ccc',
                  height: '30px',
                  borderRadius: '20px',
                  '& .MuiToggleButtonGroup-grouped': {
                    border: 'none',
                    '&:not(:last-of-type)': {
                      borderRadius: '20px 0 0 20px',
                    },
                    '&:not(:first-of-type)': {
                      borderRadius: '0 20px 20px 0',
                    },
                  },
                }}
              >
                <ToggleButton
                  value="sinhala"
                  sx={{
                    textTransform: 'none',
                    color: '#fff',
                    fontSize: { xs: '12px', sm: '14px' },
                    '&.Mui-selected': {
                      backgroundColor: '#fff',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: '#fff',
                      },
                    },
                  }}
                >
                  Sinhala
                </ToggleButton>

                <ToggleButton
                  value="english"
                  sx={{
                    textTransform: 'none',
                    color: '#fff',
                    fontSize: { xs: '12px', sm: '14px' },
                    '&.Mui-selected': {
                      backgroundColor: '#fff',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: '#fff',
                      },
                    },
                  }}
                >
                  English
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </Drawer>
      </div>

      <div>{children}</div>
    </>
  );
};

export default Navigation;
