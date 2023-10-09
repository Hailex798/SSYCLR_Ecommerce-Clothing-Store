import React from "react";
import styled from "styled-components"
import { useFilterContext } from "../context/FilterContext";
import { BiSad } from "react-icons/bi"
import GridView from "./GridView";
import ListView from "./ListView";
import Button from "../styles/Button"

const ProductList = () => {
  const { gridView, filterProducts } = useFilterContext();

  if(!filterProducts.length){
    return (
      <NoProduct>
      <div className="no-product">
        <h3>No Products Available</h3>
        <BiSad className="cart-icon" color="white" style={{marginBottom: "25px"}}/>
          <Button className="cont-shop" onClick={() => {window.location.replace(window.location.href)}} style>LOOK OTHER PRODUCTS</Button>
      </div>
      </NoProduct>
    );
  }
  if(gridView === true){
    return <GridView products={filterProducts} />
  }
  if(gridView === false){
    return <ListView products={filterProducts} />
  }
};
const NoProduct = styled.section`
.no-product{
  margin-top: 22rem;
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
`;

export default ProductList;
