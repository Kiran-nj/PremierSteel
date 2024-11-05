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


      {/*SEO SEgment   keywords*/}
      <div className="hidden lg:block absolute -z-10 top-0 opacity-0 pointer-events-none">
        <p>
          Steel, TMT, Steel distributor, Steel wholesale, Channels, Beam, Joists, Angle, Plates, Sail,
          Steel Suppliers, Steel Dealers, Steel Wholesalers, Steel Sheets, Stainless Steel Pipes, Mild
          Steel, Structural Steel, Steel Tubes, Industrial Steel Products, Steel Fabrication, Steel
          Sections, Metal Suppliers, Steel Construction Materials, Galvanized Steel, Reinforcement
          Steel, Heavy Steel Beams, Steel Bars, Steel Manufacturing, Vizag Steel Suppliers, Kerala
          Steel Suppliers, SAIL Steel Dealers, Steel Products for Construction, Durable Steel Materials,
          Stainless Steel Plates, Bulk Steel Supply, Custom Steel Solutions, Quality Steel Products,
          Affordable Steel Wholesaler, Trusted Steel Suppliers, Steel Distributor Near Me, Premium
          Quality Steel, India
        </p>
      </div>
      <div class="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
    <h1 class="hidden">Steel</h1>
    <h2 class="hidden">TMT</h2>
    <h2 class="hidden">Steel distributor</h2>
    <h2 class="hidden">Steel wholesale</h2>
    <h2 class="hidden">Channels</h2>
    <h2 class="hidden">Beam</h2>
    <h2 class="hidden">Joists</h2>
    <h2 class="hidden">Angle</h2>
    <h2 class="hidden">Plates</h2>
    <h2 class="hidden">SAIL</h2>
    <h2 class="hidden">Steel Suppliers</h2>
    <h2 class="hidden">Steel Dealers</h2>
    <h2 class="hidden">Steel Wholesalers</h2>
    <h2 class="hidden">Steel Sheets</h2>
    <h2 class="hidden">Stainless Steel Pipes</h2>
    <h2 class="hidden">Mild Steel</h2>
    <h2 class="hidden">Structural Steel</h2>
    <h2 class="hidden">Steel Tubes</h2>
    <h2 class="hidden">Industrial Steel Products</h2>
    <h2 class="hidden">Steel Fabrication</h2>
    <h2 class="hidden">Steel Sections</h2>
    <h2 class="hidden">Metal Suppliers</h2>
    <h2 class="hidden">Steel Construction Materials</h2>
    <h2 class="hidden">Galvanized Steel</h2>
    <h2 class="hidden">Reinforcement Steel</h2>
    <h2 class="hidden">Heavy Steel Beams</h2>
    <h2 class="hidden">Steel Bars</h2>
    <h2 class="hidden">Steel Manufacturing</h2>
    <h2 class="hidden">Kerala Steel Suppliers</h2>
    <h2 class="hidden">SAIL Steel Dealers</h2>
    <h2 class="hidden">Steel Products for Construction</h2>
    <h2 class="hidden">Durable Steel Materials</h2>
    <h2 class="hidden">Stainless Steel Plates</h2>
    <h2 class="hidden">Bulk Steel Supply</h2>
    <h2 class="hidden">Custom Steel Solutions</h2>
    <h2 class="hidden">Quality Steel Products</h2>
    <h2 class="hidden">Affordable Steel Wholesaler</h2>
    <h2 class="hidden">Trusted Steel Suppliers</h2>
    <h2 class="hidden">Steel Distributor Near Me</h2>
    <h2 class="hidden">Premium Quality Steel</h2>
    <h2 class="hidden">Indian Steel Supplier</h2>
    </div>
    </div>
  );
}

export default Products;
