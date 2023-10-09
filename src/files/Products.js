import React from "react";
import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        {/* Filter Section: Left  */}
        <div>
          <FilterSection />
        </div>

        {/* Product View Section: Right */}
        <div className="product-view--sort">
          {/* Sort Row */}
          <div className="sort-filter">
            <Sort />
          </div>
          {/* Main Product Grid */}
          <div className="main-product">
            <ProductList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  .white{
    color: white;
  }
  .pink{
    color: ${({theme}) => theme.colors.pink};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
