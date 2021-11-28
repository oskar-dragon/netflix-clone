import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.BROWSE} element={<Browse />} />
    </Routes>
  );
}

export default App;
