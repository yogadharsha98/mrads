import { Button, TextField } from '@mui/material';
import React from 'react';
import './ContactUs.css';
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
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
            <p>Email Address</p>
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
            <p>Telephone Number</p>
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
            <p>Subject</p>
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
            <p>Message</p>
          </strong>
          <TextField
            multiline
            className="mess-text-area"
            rows={8}
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                backgroundColor: '#ffffff',
              },
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
          }}
        >
          <Button className="btn">Send Message</Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
