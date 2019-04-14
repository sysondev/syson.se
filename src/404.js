import React from 'react';
import image from './404.gif';

export default () => {
  return (
    <>
        <h1>404 :(</h1>
        <img src={image} alt="Not found" />
    </>
  )
}