import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1  className="heading">SERVICES</h1>
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-column-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-column-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>
          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .heading{
    color: white;
    text-align: center;
    margin-bottom: 55px;
    font-size: 6rem;
    font-weight: 700;
  }
  .grid {
    gap: 4.8rem;
    color: white;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    // background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: #161821;
    background-image: 
        radial-gradient(at 47% 33%, hsl(150.00, 0%, 0%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(240.00, 0%, 0%) 0, transparent 55%);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.services-2 {
    gap: 4rem;
    background-color: black;
    border: none;
    
    .services-column-2 {
        background: ${({ theme }) => theme.colors.bg};
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        backdrop-filter: blur(25px) saturate(200%);
        -webkit-backdrop-filter: blur(25px) saturate(200%);
        background-color: #161821;
        background-image: 
            radial-gradient(at 47% 33%, hsl(150.00, 0%, 0%) 0, transparent 59%), 
            radial-gradient(at 82% 65%, hsl(240.00, 0%, 0%) 0, transparent 55%);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border: 2px solid black;
    border-radius: 50%;
    background-color: black;
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export default Services;
