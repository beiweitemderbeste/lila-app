"use client";

import styled from "styled-components";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function Page() {
  return (
    <StyledDiv>
      <Header />
      <LoginForm />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
