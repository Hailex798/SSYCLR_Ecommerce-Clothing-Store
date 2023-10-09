import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { gridView, setGridView, setListView, filterProducts, sorting } =
    useFilterContext();

  return (
    <Wrapper className="sort-section">
      {/* COLUMN 1: GRID/LIST VIEW */}
      <div className="sorting-list--grid">
        <button
          className={gridView ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={gridView ? "sort-btn" : "active sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      {/* COLUMN 2: TOTAL ITEMS AVAIL */}
      <div className="product-data">
        <p className="white">{`${filterProducts.length} Products Available`}</p>
      </div>

      {/* COLUMN 3: SORT BASED ON NAME/PRICE */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort">
            <select
              name="sort"
              id="sort"
              className="sort-selection--style"
              onClick={sorting}>
              <option value="lowest">Price: Low to High</option>
              <option value="#" disabled></option>
              <option value="highest">Price: High to Low</option>
              <option value="#" disabled></option>
              <option value="a-z">Name: a to z</option>
              <option value="#" disabled></option>
              <option value="z-a">Name: z to a</option>
            </select>
          </label>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
