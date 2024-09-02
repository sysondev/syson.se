import React, { ComponentProps } from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, meta = [], link = [] }: ComponentProps<typeof Helmet>) => (
  <Helmet title={title} meta={meta} link={link} />
);

export default SEO;
