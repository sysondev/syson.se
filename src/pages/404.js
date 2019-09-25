import React from 'react';
import image from '../images/404.gif';

export default () => {
  return (
    <>
      <h1>404 :(</h1>
      <img style={{ maxWidth: '90vw' }} src={image} alt='Not found' />
    </>
  );
};
