"use client";

import styled from "styled-components";

import BigMenuButton from "./BigMenuButton";

const MenuContainer = () => {
  return (
    <StyledDiv>
      <BigMenuButton buttonText="login" />
      <BigMenuButton buttonText="register" />
    </StyledDiv>
  );
};

export default MenuContainer;

const StyledDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
