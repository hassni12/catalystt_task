import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Context } from "../Context";

const Image = ({ className, img }) => {
  // console.log(img,"data from image");
  const [hovered, setHovered] = useState(false);
  console.log(hovered);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);


  const heartIcon = () => {
      if (img.isFavorite) {
        // console.log(img.isFavorite,"fvarie")
        return (
          <i
            className="ri-heart-fill favorite"
            onClick={() => toggleFavorite(img._id)}
          ></i>
        );
      } else if (hovered) {
        return (
          <i
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(img._id)}
          ></i>
        );
      }
   
  };

  const cartIcon = () => {
    const alreadyInCart = cartItems.some((item) => item._id === img._id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img._id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  };

  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className={`${className} image-container `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        className="g-0 mx-auto my-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20rem",

          borderRadius: "4px",
          height: "25rem",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          border: "none",
        }}
      >
        <div
          className="w-100 text-center py-3"
          style={{ background: "#ffa710" }}
        >
          <img src={img.image} width={100} height={100} />
        </div>
        <div className="d-flex bg-light w-25 justify-content-around ">
          {heartIcon()}
          {cartIcon()}
        </div>

        <Card.Title
          className="text-align-left mt-4 font-weight-bolder underline font-bold px-4 "
          style={{
            fontStyle: "underline",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          {img.title} {img.price}$
          <hr
            className="-mt-16"
            style={{
              marginTop: "-1px",
              fontWeight: "bolder",
              height: "2px",
              background: "black",
            }}
          />
        </Card.Title>
        <Card.Body
          className="d-flex flex-column pt-0 p-1 w-full"
          style={{ gap: "6px", width: "100%" }}
        >
          {img.description}
        </Card.Body>
      </Card>
    </Col>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
