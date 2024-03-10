import React from "react";
import { useLoginContext } from "../stores/LoginContextApi";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({ children }) => {
  const { loggedIn } = useLoginContext();
  if (loggedIn) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};
