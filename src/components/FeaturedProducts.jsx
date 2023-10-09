import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import Product from "../components/Product"

const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        {/* <div className="intro-data">Common Heading</div> */}
        <div className="common-heading">Our Pride Pinnacles</div>
        <div className="grid grid-three-column">
          {featuredProducts.map((ele) => {
            return <Product key={ele.id} {...ele} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: #161821;
  background-image: 
      radial-gradient(at 47% 33%, hsl(150.00, 0%, 0%) 0, transparent 59%), 
      radial-gradient(at 82% 65%, hsl(240.00, 0%, 0%) 0, transparent 55%);

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 90%;
    }
    &:hover img {
      transform: scale(1.3);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 13%;
      right: 11%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default FeaturedProducts;
