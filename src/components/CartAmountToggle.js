import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button style={{backgroundColor: "black" }} onClick={() => setDecrease()}>
          <FaMinus color="white"/>
        </button>
        <div className="amount-style" style={{color: "#ff0099"}}>{amount}</div>
        <button style={{backgroundColor: "black" }} onClick={() => setIncrease()}>
          <FaPlus color="white"/>
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
