import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export function RequireAuth({ children }) {
  const { authed } = useContext(AuthContext);
  const location = useLocation();

  return authed ? (
    children
  ) : (
    <Navigate to={ROUTES.SIGN_IN} replace state={{ path: location.pathname }} />
  );
}
