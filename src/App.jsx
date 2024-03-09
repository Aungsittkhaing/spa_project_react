import React from "react";
import { Container } from "./styles/Share";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#2d6cdf",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>App</Container>
    </ThemeProvider>
  );
};

export default App;
