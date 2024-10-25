import React, { useEffect } from 'react';
import ProductHero from '../components/ProductHero';
import ProductGrid from './../components/ProductGrid';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);
  return (
    <div>
      <Helmet>
        <title>Our Products | Premier Steels</title>
        <meta name="description" content="Explore our wide range of steel products including MS Joints, Plates, Channels, and more." />
        <meta name="keywords" content="steel products, MS Joints, MS Plates, steel supplier, Premier Steels" />
      </Helmet>
      
      <ProductHero />
      <ProductGrid />
    </div>
  );
}

export default Products;
