import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button"

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((ele) => {
          const { id, name, image, price, description } = ele;
          return (
            <div className="grid grid-two-column background">
              {/* Left Side Image */}
              <figure style={{backgroundColor: "yellow", borderRadius: "8px 20px"}}>
                <img src={image} alt={name} />
              </figure>
              {/* Right Side Info */}
              <div className="card-data">
                <h2 className="white" style={{marginBottom: "8px"}}>{name}</h2>
                <p className="pink">
                  <FormatPrice price={price} />
                </p>
                <p className="white" style={{marginBottom: "10px"}}>{description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${id}`} className="main-btn">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  
  .container {
    max-width: 120rem;
  }
  .background{
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: #161821;
    background-image: 
        radial-gradient(at 47% 33%, hsl(150.00, 0%, 0%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(240.00, 0%, 0%) 0, transparent 55%);
    border-radius: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  .white{
    color: white;
  }
  .pink{
    color: ${({theme}) => theme.colors.pink};
  }
  .grid {
    gap: 3.2rem;
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
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

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

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;
