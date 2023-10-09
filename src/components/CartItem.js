import React from "react";
import { FaTrash } from "react-icons/fa"
import { useCartContext } from "../context/CartContext";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({product}) => {
    const { id, name, currColor, amount, price, image, maxStock } = product;
    const { setAmount, removeItem } = useCartContext();

    function setIncrease() {
        amount < maxStock ? setAmount(id, amount + 1, "increase") : setAmount(id, maxStock, "maxStock");
    }
    function setDecrease() {
        amount > 1 ? setAmount(id, amount - 1, "decrease") : setAmount(id, 1, "initial");
    }

  return (
    <div className="cart_heading grid grid-five-column">
        {/* ITEM AREA */}
        <div className="cart-image--name">
            {/* IMAGE */}
            <div>
                <figure>
                    <img src={image} alt={name} />
                </figure>
            </div>
            {/* NAME + COLOR */}
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>Color:</p>
                    <div
                    className="color-style"
                    style={{ backgroundColor: currColor, border: "2px solid white" }}
                    ></div>
                </div>
            </div>
        </div>

        {/* PRICE AREA */}
        <div className="cart-hide">
            <p>
                <FormatPrice price={price*10}/>
            </p>
        </div>

        {/* QUANTITY AREA */}
        <div>
            <CartAmountToggle
            amount={amount}
            setIncrease={setIncrease}
            setDecrease={setDecrease}
            />
        </div>

        {/* SUBTOTAL AREA */}
        <div className="cart-hide">
            <p>
                <FormatPrice price={price * 10 * amount}/>
            </p>
        </div>

        {/* REMOVE AREA */}
        <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
    </div>
  );
};

export default CartItem;
