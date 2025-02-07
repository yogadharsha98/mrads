import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Frame = () => {
  return (
    <>
      <Navigation>
        <Outlet />
      </Navigation>
    </>
  );
};

export default Frame;
