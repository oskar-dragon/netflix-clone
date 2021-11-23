import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<p>I will be a sign in page</p>} />
      <Route path="/signup" element={<p>I will be a sign up page</p>} />
      <Route path="/browse" element={<p>I will be the browse page</p>} />
    </Routes>
  );
}

export default App;
