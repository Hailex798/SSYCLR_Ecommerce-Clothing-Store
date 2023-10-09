import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useProductContext } from "../context/ProductContext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";
import { Container } from "../styles/Container";
import FormatPrice from "../Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

const API = "https://api.pujakaitem.com/api/products";

export const SingleProduct = () => {
  const { isSingleLoading, singleProduct, getSingleProduct } = useProductContext();
  const { id } = useParams();

  const {
    // id: alias,
    name,
    company,
    price,
    description,
    image,
    stock,
    stars,
    reviews,
  } = singleProduct;

  React.useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading...</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage img={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2 className="pink">{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            <p className="product-data-price white">
              MRP:
              <del>
                <FormatPrice price={(price + 250000)*10} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <span className="pink"><FormatPrice price={price*10}/></span>
            </p>
            <p className="white">{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p className="pink">
                Available:
                <span className="white"> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p className="pink">
                ID : <span className="white"> {id} </span>
              </p>
              <p className="pink">
                Brand :<span className="white"> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart singleProduct={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: black;
  .white{
    color: white;
  }
  .black{
    color: black;
  }
  .pink{
    color: ${({theme}) => theme.colors.pink};
  }
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: #fff;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.white};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #fff;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
