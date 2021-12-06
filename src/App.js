import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";
import { AuthProvider } from "./context/AuthContext";
import { RequireAuth } from "./helpers/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route
          path={ROUTES.BROWSE}
          element={
            <RequireAuth>
              <Browse />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
