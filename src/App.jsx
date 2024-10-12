import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         
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
