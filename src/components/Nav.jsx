import React from "react";
import logoImg from "./images/maker-check.svg";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  background: ${(props) => props.theme.colors.primary};
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
const RightDiv = styled.div`
  flex: 1;
`;
const UlDiv = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
const LiStyle = styled.li`
  padding: 0 10px;
  &:after {
    content: "";
    display: block;
    height: 5px;
    background-color: black;
    transform: scaleX(0);
    transition: 300ms;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
const H1_STYLE = {
  marginLeft: "10px",
  color: "#595a5c",
};
const ATAG_STYLE = {
  color: "#595a5c",
};
const Nav = () => {
  return (
    <FlexDiv>
      <LeftDiv className="">
        <img src={logoImg} width="40px" height="40px" />
        <strong style={H1_STYLE}>Food Delivery System</strong>
      </LeftDiv>
      <RightDiv className="">
        <UlDiv>
          <LiStyle>
            <a style={ATAG_STYLE} href="#">
              Order
            </a>
          </LiStyle>
          <LiStyle>
            <a style={ATAG_STYLE} href="#">
              Log Out
            </a>
          </LiStyle>
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  );
};

export default Nav;
