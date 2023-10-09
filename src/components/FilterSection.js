import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/FilterContext";
import FormatPrice from "../Helpers/FormatPrice";
import Button from "../styles/Button"

const FilterSection = () => {
  const {
    allProducts,
    filters: { text, category, color, price, maxPrice, minPrice },
    clearFilterValue,
    updateFilterValue
  } = useFilterContext();

  const getUniqueData = (property) => {
    let data = allProducts.map((ele) => {
      return ele[property]
    })
    if(property === "colors"){
      // Union of Array
      // return (data = ["All", ...new Set([].concat(...data))])

      // Make a Single Array of Subarrays inside a array
      data = data.flat();
    }
    data = ["All", ...new Set(data)]
    return data;
  }

  const categoryData = getUniqueData("category");
  const companyData = getUniqueData("company");
  const colorsData = getUniqueData("colors");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Wrapper>
      {/* SEARCH SECTION */}
      <div className="filter-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            name="text"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      {/* CATEGORY SECTION */}
      <div className="filter-category">
        <h3 className="pink">CATEGORY</h3>
        <div>
          {categoryData.map((ele, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={ele}
                className={ele === category ? "active white" : "white"}
                onClick={updateFilterValue}>
                {ele}
              </button>
            );
          })}
        </div>
      </div>

      {/* COMPANY SECTION */}
      <div className="filter-company">
        <h3 className="pink">COMPANY</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            // value={company}
            className="filter-company--select"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      {/* COLOR SECTION */}
      <div className="filter-colors colors">
        <h3 className="pink">COLORS</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if(curColor === "All"){
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className={color === curColor ? "color-all--style yellow" : "color-all--style"}
                  onClick={updateFilterValue}>
                  {curColor}
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor, border: "solid 2px white" }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* PRICE SECTION */}
      <div className="filter_price">
        <h3 className="pink">PRICE</h3>
        <p className="white">
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          max={maxPrice}
          min={minPrice}
          value={price}
          className="price-slider"
          onChange={updateFilterValue}
        />
      </div>

      {/* CLEAR FILTER */}
      <div className="filter-clear">
        <Button className="btn pink" onClick={clearFilterValue}>
          Clear Filters 
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  h3 {
    padding: 2rem 0;
    font-weight: bolder;
  }
  .price-slider {
    accent-color: ${({theme}) => theme.colors.yellow};
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.pureBlack};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid yellow;
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.pureBlack};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    color: white;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .yellow{
    color: yellow;
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

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: ${({theme}) => theme.colors.pink};
    color: #000;
    font-weight: bolder;
  }
`;

export default FilterSection;
