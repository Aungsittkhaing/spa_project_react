import React from "react";
import Nav from "./Nav";
import ImgOne from "./images/pizza-4.svg";
import ImgTwo from "./images/pizza-3.svg";
import ImgThree from "./images/ice-cream-1.svg";
import styled from "styled-components";
import { Button } from "../styles/Share";
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: ${(props) => props.theme.colors.primary};
`;
const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const H3Style = {
  marginTop: "10px",
};
const Home = () => {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>Foods Delivery System</h1>
          <h3 style={H3Style}>Pizza</h3>
          <Button>Order</Button>
        </Flex>
        <Flex>
          <img src={ImgOne} width="230px" />
        </Flex>
      </FlexDiv>

      <FlexDiv>
        <Flex>
          <img src={ImgTwo} width="230px" />
        </Flex>
        <Flex>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            rerum doloremque reiciendis fugiat veritatis omnis molestiae
            facilis. Vitae fugit blanditiis culpa magnam, nihil sapiente
            recusandae, eligendi accusantium voluptatum adipisci ea? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aut sed perferendis,
            animi modi tempore reprehenderit, consequuntur reiciendis suscipit
            hic commodi atque libero temporibus repellendus laudantium dolore
            rem tenetur natus eos?
          </p>
        </Flex>
      </FlexDiv>

      <FlexDiv>
        <Flex>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            rerum doloremque reiciendis fugiat veritatis omnis molestiae
            facilis. Vitae fugit blanditiis culpa magnam, nihil sapiente
            recusandae, eligendi accusantium voluptatum adipisci ea? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aut sed perferendis,
            animi modi tempore reprehenderit, consequuntur reiciendis suscipit
            hic commodi atque libero temporibus repellendus laudantium dolore
            rem tenetur natus eos?
          </p>
        </Flex>
        <Flex>
          <img src={ImgThree} width="230px" />
        </Flex>
      </FlexDiv>
    </>
  );
};

export default Home;
