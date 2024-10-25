import React from "react";
import { blogPosts } from "../utils/constants";

const Blogs = () => {
  


  return (
    <div className="bg-selBlack text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center  mb-12">
          Discover comprehensive information on steel production, grades, and applications in various industries.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 text-black">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold  mb-2">{post.title}</h2>
              <p className=" mb-4">{post.summary}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
