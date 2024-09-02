import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, meta = [], link = [] }) => (
  <Helmet title={title} meta={meta} link={link} />
);

export default SEO;
