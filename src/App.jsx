import React from "react";
import { Container } from "./styles/Share";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { GlobalCss } from "./styles/GlobalCss";
import Home from "./components/Home";
import Login from "./components/Login";

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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
