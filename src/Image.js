/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Product from './product';

const Image = ({ src, alt }) => {
  return (
    <img src={Product.image} alt={Product.nom} style={{ maxWidth: '100%' }} />
  );
};

export default Image;