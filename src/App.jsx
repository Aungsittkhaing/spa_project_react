import React from "react";
import { Container } from "./styles/Share";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalCss } from "./styles/GlobalCss";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContextApi from "./components/stores/LoginContextApi";
import { RouteGuard } from "./components/helpers/RouteGuard";
const theme = {
  colors: {
    primary: "#dee1ec",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Container>
        <LoginContextApi>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <RouteGuard>
                  <Home />
                </RouteGuard>
              }
            ></Route>
          </Routes>
        </LoginContextApi>
      </Container>
    </ThemeProvider>
  );
};

export default App;
