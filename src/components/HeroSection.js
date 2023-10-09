import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";
import homeImg from "../images/main--hero.png"
import aboutImg from "../images/about-section.png"

const HeroSection = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1>{props.name}</h1>
            <p>
              {props.data}
              <br />
              {props.extra}
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src={props.img === "home" ? homeImg : aboutImg} alt="HeroImage" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 50rem;
    box-shadow: 0 0 10px #ffff00 10px;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      color: white;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: #f15bb5;
      // color: #3D405D;
    }

    .intro-data {
      margin-bottom: 0;
      color: black;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 90%;
      background-color: yellow;
      position: absolute;
      left: 35%;
      top: -1rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: yellow;
    }
  }
`;
export default HeroSection;
