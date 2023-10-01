"use client";

import styled from "styled-components";

import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";

export default function Home() {
  return (
    <StyledDiv>
      <Header />
      <MenuContainer />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

