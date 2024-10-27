import React, { useEffect } from 'react'
import Blogs from './../components/BlogPage';
import BlogHero from '../components/BlogHero';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);
  return (
    <div className=''>
      <Helmet>
        <title>Blog | Premier Steels</title>
        <meta
          name="description"
          content="Learn more about steel properties, production methods, grades, and applications in our Factfile Blog."
        />
        <meta
          name="keywords"
          content="steel production, steel distribution, mild steel, stainless steel, steel properties, steel grades"
        />
      </Helmet>
      <BlogHero/> {/* this has the video */}
      <Blogs />
    </div>
  )
}

export default Blog