import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/contact" element={<Contacts />} />
         <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
