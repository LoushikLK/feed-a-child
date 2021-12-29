import React from "react";
import { Container } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import homebg from "../../asset/home/homebg.jpg";
import Maincontent from "../common/Maincontent";
import BasicCards from "../common/BasicCards";
import ReadMoreCard from "../common/ReadMoreCard";

const Home = () => {
  return (
    <>
      <section className="home-main">
        <Container>
          <img src={homebg} alt="" className="bg-image-main" />

          <Maincontent
            heading="Daily Feeding Program"
            slogan=" We serve cooked meals to people in need daily across India."
          />
        </Container>
      </section>
      <section className="home-campaigns">
        <Container>
          <BasicCards image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg" />
          <BasicCards image="https://picsum.photos/200/300" />
        </Container>
      </section>
      <section className="home-past-campaign">
        <Container>
          <h1>Past Campaigns</h1>
          <div className="home-read-more-container">
            <a href="/" className="home-read-more-container-link">
              <ReadMoreCard image="https://picsum.photos/seed/picsum/200/300" />
            </a>
            <a href="/" className="home-read-more-container-link">
              <ReadMoreCard image="https://picsum.photos/200/300?grayscale" />
            </a>
            <a href="/" className="home-read-more-container-link">
              <ReadMoreCard image="https://picsum.photos/id/237/200/300" />
            </a>
          </div>
        </Container>
      </section>
      <section className="home-social-page">
        <Container>
          <div className="home-social-page-main-container"></div>
          <div className="home-social-page-registration">
            <h1>Get Support</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              obcaecati aperiam aliquid totam recusandae quas voluptatem, ipsam
              odit vero dolor?
            </p>
            <div className="home-register-link">
              <a href="/">
                Register now <ArrowRightIcon />{" "}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
