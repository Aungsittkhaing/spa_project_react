import React from "react";
import { Container } from "./styles/Share";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { GlobalCss } from "./styles/GlobalCss";

const theme = {
  colors: {
    primary: "#2d6cdf",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Container>
        <Routes>
          <Route path="/" element={<Nav />}></Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
