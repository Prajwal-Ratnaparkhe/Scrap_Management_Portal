import React, { useEffect } from "react";
// import styled from "styled-components";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink } from "./headers/Light.js";
// import { SectionHeading } from "../Components/misc/Headings.js";
// import { SectionDescription } from "../Components/misc/Typography.js";
// import { PrimaryButton as PrimaryButtonBase } from "../Components/misc/Buttons.js";
import Team from "../Components/Team";
// import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
// import { ReactComponent as QuotesLeftIconBase } from "../images/quotes-l.svg";
// import { ReactComponent as SvgDecoratorBlob1 } from "../images/dot-pattern.svg";
import { Count } from "./Count.js";
import { Contact } from "./Contact.js";
import { Review } from "./Review.js";

import Aos from "aos";
import "aos/dist/aos.css";

import { Faq } from "./Faq.js";

// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import ScrollToTop from "react-scroll-to-top";
import { Footer } from "./Footer.js";
import { Link } from "react-router-dom";

const Header = tw(HeaderBase)`max-w-none`;
// const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
// const Column = tw.div``;
// const TextColumn = tw(
//   Column
// )`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
// const Heading = tw(
//   SectionHeading
// )`text-left text-primary-900 leading-snug xl:text-6xl`;
// const Description = tw(
//   SectionDescription
// )`mt-4 lg:text-base text-gray-700 max-w-lg`;
// const PrimaryButton = tw(
//   PrimaryButtonBase
// )`mt-8 inline-block w-56 tracking-wide text-center py-5`;
// const FeatureList = tw.ul`mt-12 leading-loose`;
// const Feature = tw.li`flex items-center`;
// const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
// const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
// const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
// const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
// const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
// const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`;
// const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
// `;
// const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`;
// const QuotesLeftIcon = tw(
//   QuotesLeftIconBase
// )`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`;
// const Quote = tw.blockquote``;
// const CustomerName = tw.p`mt-4 font-bold`;
// const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`;

export const Landing = ({
  heading = "Get Instant Valuation of your household Scrap..",
  description = " Online Portal that aims to be a platform where people can sell their old or scrap items.From our website, an artist can buy those scrap items and customize that scrap items to make useful and decorative items. ",

  imageSrc = "https://scrapyardindia.com/wp-content/uploads/2022/08/Banner-3-1-1-1-1-1-scaled.jpg",
  imageDecoratorBlob = true,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",
  buttonRounded = true,
  features = [
    "Available in 7 Locations",
    "Premium Internet Backbone",
    "99.99% Uptime SLA",
  ],
  testimonial = {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    customerName: "Charlotte Hale",
    customerCompany: "Delos Inc.",
  },
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#landing">About</NavLink>
      <NavLink href="#counts">Our Value</NavLink>
      <NavLink href="#team">Team</NavLink>
      <NavLink href="#faq">F.A.Q</NavLink>
      <NavLink href="#contact">Contact Us</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      {/* <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink> */}

      <Link to="/login" className="mx-3">
        <button type="button" className="btn btn-primary btn-rounded">
          Login
        </button>
      </Link>

      <Link to="/signup" className="my-3">
        <button type="button" className="btn btn-primary btn-rounded">
          Sign Up
        </button>
      </Link>
    </NavLinks>,
  ];

  return (
    <>
      <div className="container" id="landing" style={{ marginTop: "25px" }}>
        <Header links={navLinks} />
        {/* <Container>
        
            
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <Link to="/signup">
                  <PrimaryButton as="a" css={buttonRoundedCss}>
                    {primaryButtonText}
                  </PrimaryButton>
                </Link>
                <FeatureList>
                  {features.map((feature, index) => (
                    <Feature key={index}>
                      <FeatureIcon />
                      <FeatureText>{feature}</FeatureText>
                    </Feature>
                  ))}
                </FeatureList>
              </TextColumn>
          
          
         
        </Container> */}

        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  Get Instant Valuation of your household Scrap.
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  India’s first Web based Online Portal that aims to be a
                  platform where people can sell their old or scrap items.
                </h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <Link
                      to="/signup"
                      className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 hero-img "
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div style={{ marginTop: "40px" }}>
                  <img
                    src="https://i.pinimg.com/originals/2f/98/c8/2f98c85245849297721c2337e10baafd.png"
                    className="img-fluid"
                    alt="main img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Count />

        <Review />
        <div data-aos="fade-right">
          {" "}
          <Team />
        </div>

        <Faq />

        <Contact />
      </div>

      <div>
        {" "}
        <ScrollToTop smooth />{" "}
      </div>

      <Footer />
    </>
  );
};
