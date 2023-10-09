import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>404 Error Page 🤭</h2>
        <h3>UH OH! You're lost.</h3>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <NavLink to="/">
          <Button>Go back to Home</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    color: #fff;

    h2 {
      font-size: 8rem;
      color: ${({ theme }) => theme.colors.white};
      margin: 2rem;
    }
    
    h3 {
      margin: 2rem;
      font-size: 4.2rem;
    }
    
    p {
      color: ${({ theme }) => theme.colors.white};
      margin: 2rem 0;
    }
  }
`;

export default Error;
