"use client";

import styled from "styled-components";

import BigMenuButtonProps from "../interfaces/BigMenuButton";

const BigMenuButton = ({ buttonText }: BigMenuButtonProps) => {
  return (
    <>
      <StyledButton>{buttonText}</StyledButton>
    </>
  );
};

export default BigMenuButton;

const StyledButton = styled.button`
  padding: 20px 0;
  margin: 1em;
  width: 50%;
  background-color: #9a1663;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;
