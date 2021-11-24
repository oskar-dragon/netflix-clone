import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SIGN_IN} element={<p>I will be a sign in page</p>} />
      <Route path={ROUTES.SIGN_UP} element={<p>I will be a sign up page</p>} />
      <Route path={ROUTES.BROWSE} element={<p>I will be the browse page</p>} />
    </Routes>
  );
}

export default App;
