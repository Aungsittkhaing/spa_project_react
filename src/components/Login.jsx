import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Button } from "../styles/Share";

const SectionDiv = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 20px;
`;
const InputSyle = styled.input`
  display: block;
  padding: 10px 10px;
  margin-bottom: 10px;
  width: 250px;
  border: none;

  &:focus {
    outline: 0.1px solid #595a5c;
  }
`;

const H1Style = styled.h1`
  margin: 20px 0;
  color: #595a5c;
`;
const Login = () => {
  return (
    <>
      <Nav />
      <SectionDiv>
        <H1Style>Login Form to Home</H1Style>
        <form>
          <InputSyle type="text" placeholder="Phone" />
          <InputSyle type="password" placeholder="password" />
          <Button>Login</Button>
        </form>
      </SectionDiv>
    </>
  );
};

export default Login;
