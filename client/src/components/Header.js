import { Link } from "react-router-dom";
import { Context } from "../Context";
import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems?.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header ${sticky ? " sticky" : ""}`}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={`header navbar navbar-expand-lg ${
          sticky ? " sticky" : ""
        }  align-items-center`}
      >
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="link-wrapper">
              <h2>Pic Some</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" me-1  m-auto ">
              <Link to="/cart" className="link-wrapper">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
