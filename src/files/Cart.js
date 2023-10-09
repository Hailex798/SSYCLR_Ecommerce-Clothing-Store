import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Button from "../styles/Button"
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import { BsFillCartXFill } from "react-icons/bs"
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cartItems, clearCart, totalAmount, shippingFees } = useCartContext();

  const { isAuthenticated, user } = useAuth0();

  return (
    <Wrapper>
      {cartItems.length ?
      <div className="container">
        {/* USER PROFILE INFO */}
        {isAuthenticated && (
          <div className="cart-user--profile">
            <img src={user.picture} alt={user.name} />
            <h2 className="cart-user--name">{user.name}</h2>
          </div>
        )}
        {/* MAIN ROW HEADINGS (CART SECTION) */}
        <div className="cart_heading grid grid-five-column">
          <p>ITEM</p>
          <p className="cart-hide">PRICE</p>
          <p>QUANTITY</p>
          <p className="cart-hide">SUBTOTAL</p>
          <p>REMOVE</p>
        </div>
        <hr />
        {/* CART DATA BELOW HR */}
        <div className="cart-item">
          {cartItems.map((ele) => {
            return <CartItem key={ele.id} product={ele} />
          })}
        </div>
        <hr />
        {/* CART BUTTONS */}
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button className="cont-shop">CONTINUE SHOPPING</Button>
          </NavLink>
          <Button onClick={() => clearCart()}>CLEAR CART</Button>
        </div>
        {/* CART EXIT */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>SubTotal: </p>
              <p>
                <FormatPrice price={totalAmount*10}/>
              </p>
            </div>
            <div>
              <p>Shipping Fees: </p>
              <p>
                <FormatPrice price={shippingFees}/>
              </p>
            </div>
            <hr />
            <div>
              <p>Order Total: </p>
              <p>
                <FormatPrice price={totalAmount*10 + shippingFees}/>
              </p>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="empty-cart">
        <h3>No Items in Cart</h3>
        <BsFillCartXFill className="cart-icon" color="white" style={{marginBottom: "25px"}}/>
        <NavLink to="/products">
          <Button className="cont-shop" style>CONTINUE SHOPPING</Button>
        </NavLink>
      </div>
      }
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
    color: white;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn{
      color: white;
    }
  }
  .cont-shop {
    background-color: ${({theme}) => theme.colors.pink};
  }
  
  .empty-cart{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3{
      font-size: 4.2rem;
      text-transfrom: capitalize;
      font-weight: 100;
      color: white;
      margin: 15px;
    }
    .cart-icon{
      font-size: 5.5rem;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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

  .remove_icon {
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.pink};
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    
    p{
      color: white;
    }
    
    .order-total--subdata {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
      backdrop-filter: blur(25px) saturate(200%);
      -webkit-backdrop-filter: blur(25px) saturate(200%);
      background-color: #161821;
      background-image: 
          radial-gradient(at 47% 33%, hsl(150.00, 0%, 0%) 0, transparent 59%), 
          radial-gradient(at 82% 65%, hsl(240.00, 0%, 0%) 0, transparent 55%);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.125);
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
