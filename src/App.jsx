import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         <Route path="/about" element={<About />} />

         
      </Route>
      //   {/* <Route path="*" element={<NotFoundPage />} /> */}
    )
  );

  return (
    // <React.StrictMode>
      <RouterProvider router={router} />
    // </React.StrictMode>
  );
}

export default App;
