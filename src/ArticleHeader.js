import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-green.png';

export default () => (
  <header style={{ padding: '32px' }}>
    <Link to='/'>
      <img
        src={logo}
        alt="Syson Logo"
        style={{ width: '150px'}}
      />
    </Link>
  </header>
);
