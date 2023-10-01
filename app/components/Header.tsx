"use client";

import styled from "styled-components";

import LilaHeading from "./LilaHeading";

const Header = () => {
  return (
    <>
      <StyledNav>
        <LilaHeading />
      </StyledNav>
    </>
  );
};

export default Header;

const StyledNav = styled.nav`
  top: 0;
  background-color: #9a1663;
  width: 100%;
  display: flex;
  justify-content: center;
`;
