import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);
const LoginContextApi = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = { loggedIn, setLoggedIn };
  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextApi;
