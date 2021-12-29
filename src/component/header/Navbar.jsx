import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
const Navbar = () => {
  const [slideNavbar, setSlideNavbar] = useState(false);

  return (
    <nav className="nav">
      <div className="responsive-navbar">
        <div
          onClick={() => {
            slideNavbar ? setSlideNavbar(false) : setSlideNavbar(true);
          }}
        >
          {slideNavbar ? <Close /> : <Menu />}
        </div>
        <h1 className="main-nav-logo">FEED A CHILD</h1>

        <div
          className={`navbar-left-slide ${
            slideNavbar && "responsive-navbar-btn-active"
          }`}
        >
          <ul className="navbar-left-slide-ul">
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">CAMPAIGNS</a>
            </li>
            <li>
              <a href="/">REQUEST FOR FOOD</a>
            </li>
            <li>
              <a href="/">PARTNER</a>
            </li>
            <li>
              <a href="/">CONTACT US</a>
            </li>
          </ul>
          <Button className="nav-bar-btn "> Donate </Button>
        </div>
      </div>
      <Container>
        <div className="nav-bar-main">
          <div className="nav-bar-logo">
            <h1>FEED A CHILD</h1>
          </div>
          <div className="nav-bar-navigation">
            <ul className="nav-bar-navigation-ul">
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">CAMPAIGNS</a>
              </li>
              <li>
                <a href="/">REQUEST FOR FOOD</a>
              </li>
              <li>
                <a href="/">PARTNER</a>
              </li>
              <li>
                <a href="/">CONTACT US</a>
              </li>
            </ul>
            <Button className="nav-bar-btn "> Donate </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
