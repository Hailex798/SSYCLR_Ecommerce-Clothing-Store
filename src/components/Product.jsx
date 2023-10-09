import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (prop) => {
  const { id, name, image, price, category } = prop;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card" style={{backgroundColor: "black"}}>
        <figure style={{backgroundColor: "yellow"}}>
          <img src={image} alt="FeaturedImage" />
          <figcaption className="caption" style={{backgroundColor: "black"}}>{category}</figcaption>
        </figure>
        <div className="card-data" style={{backgroundColor: "black"}}>
          <div className="card-data-flex">
            <h3 style={{color: "white"}}>{name}</h3>
            <p className="card-data--price"><FormatPrice price={price} /></p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
