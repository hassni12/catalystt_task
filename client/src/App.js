import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Cart from "./screens/Cart";
import Photos from "./screens/Photos";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
