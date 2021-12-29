import React from "react";
import { Button, Container, Input } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section className="footer-main">
      <Container className="footer-container">
        <div className="footer-heading">
          <div className="footor-heading-logo">
            <h1>Feed A Child </h1>
          </div>
          <div className="footer-heading-desc">
            <p>
              Registered as Hunger Heroes. Under Indian Society Registration Act
              XXI, 1860
            </p>
            <p>
              All donations are tax-exempted as eligible under section 80G of
              the the Income Tax Act, 1961.
            </p>
          </div>
        </div>
        <div className="footer-about">
          <h1>Who we are</h1>

          <div className="footer-nav">
            <ul>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-get-involved">
          <h1>Get Involved</h1>

          <div className="footer-get-involved-nav">
            <ul>
              <li>
                <a href="/">Donate</a>
              </li>
              <li>
                <a href="/">Request For food</a>
              </li>
              <li>
                <a href="/">Partner With us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-div">
            <div className="footer-social-icons">
              <h1>Socials</h1>
              <ul>
                <li>
                  <a href="/">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <InstagramIcon />{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter-main">
              <p style={{ paddingBottom: ".5rem" }}>
                Subscribe to our newsletter
              </p>
              <div className="footer-newsletter">
                <Input
                  className="newsletter-input"
                  placeholder="Enter your e-mail."
                />
                <Button className="footer-newsletter-sub-button">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="footer-copyright">
          <p> &copy; {year} Feed A Child. All rights reserved.</p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
