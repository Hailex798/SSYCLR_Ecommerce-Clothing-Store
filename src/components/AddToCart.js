import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = singleProduct;
  const [currColor, setCurrColor] = React.useState(colors[0]);
  const [amount, setAmount] = React.useState(1);

  function setIncrease() {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }
  function setDecrease() {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  return (
    <Wrapper>
      <div className="colors">
        <p className="white">
          Colors:
          {colors.map((ele, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: ele, border: "solid 2px white" }}
                className={currColor === ele ? "btnStyle active" : "btnStyle"}
                onClick={() => setCurrColor(ele)}
              >
                {ele === currColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      {/* Add to Cart Feature */}
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <NavLink to="/cart" onClick={() => addToCart(id+currColor, currColor, amount, singleProduct)}>
        <Button className="btn">Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
