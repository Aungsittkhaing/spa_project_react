import React from "react";
import logoImg from "./images/maker-check.svg";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  background: ${(props) => props.theme.colors.primary};
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
const H1_STYLE = {
  marginLeft: "10px",
  color: "#fff",
};
const ATAG_STYLE = {
  color: "white",
  padding: "0 5px",
};
const Nav = () => {
  return (
    <FlexDiv>
      <LeftDiv className="">
        <img src={logoImg} width="30px" height="30px" />
        <strong style={H1_STYLE}>Food Delivery System</strong>
      </LeftDiv>
      <RightDiv className="">
        <UlDiv>
          <li>
            <a style={ATAG_STYLE} href="#">
              Order
            </a>
          </li>
          <li>
            <a style={ATAG_STYLE} href="#">
              Log Out
            </a>
          </li>
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  );
};

export default Nav;
