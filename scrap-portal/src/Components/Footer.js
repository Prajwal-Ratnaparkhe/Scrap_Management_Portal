import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import LogoImage from "../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../images/youtube-icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { async } from "@firebase/util";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;
const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const subscribe = async (e) => {
    e.preventDefault();
    if (email) {
      const res = await fetch(
        "https://smp-feedback-default-rtdb.firebaseio.com/subscribe.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      toast.success("Message sent successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <ToastContainer />
      <Container>
        <div className="container">
          <Content>
            <SixColumns>
              <Column>
                <ColumnHeading>Main</ColumnHeading>
                <LinkList>
                  <LinkListItem>
                    <Link>Blog</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>FAQs</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Support</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>About Us</Link>
                  </LinkListItem>
                </LinkList>
              </Column>
              <Column>
                <ColumnHeading>Product</ColumnHeading>
                <LinkList>
                  <LinkListItem>
                    <Link>Log In</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Personal</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Business</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Team</Link>
                  </LinkListItem>
                </LinkList>
              </Column>
              <Column>
                <ColumnHeading>Press</ColumnHeading>
                <LinkList>
                  <LinkListItem>
                    <Link>Logos</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Events</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Stories</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Office</Link>
                  </LinkListItem>
                </LinkList>
              </Column>
              <Column>
                <ColumnHeading>Legal</ColumnHeading>
                <LinkList>
                  <LinkListItem>
                    <Link>GDPR</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Privacy Policy</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Terms of Service</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link>Disclaimer</Link>
                  </LinkListItem>
                </LinkList>
              </Column>
              <SubscribeNewsletterColumn>
                <SubscribeNewsletterContainer>
                  <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
                  <SubscribeText>
                    We deliver high quality blog posts written by professionals
                    weekly. And we promise no spam.
                  </SubscribeText>
                  <SubscribeForm>
                    <Actions>
                      <input
                        type="text"
                        placeholder="Your E-mail Address"
                        name="email"
                        onChange={handleChange}
                        value={email.email}
                      />
                      <button onClick={subscribe}>Subscribe</button>
                    </Actions>
                  </SubscribeForm>
                </SubscribeNewsletterContainer>
              </SubscribeNewsletterColumn>
            </SixColumns>
            <Divider />
            <ThreeColRow>
              <LogoContainer>
                <LogoImg src={LogoImage} />
                <LogoText>SMP Inc.</LogoText>
              </LogoContainer>
              <CopywrightNotice>
                &copy; 2022 SMP Inc. All Rights Reserved.
              </CopywrightNotice>
              <SocialLinksContainer>
                <SocialLink href="https://facebook.com">
                  <FacebookIcon />
                </SocialLink>
                <SocialLink href="https://twitter.com">
                  <TwitterIcon />
                </SocialLink>
                <SocialLink href="https://youtube.com">
                  <YoutubeIcon />
                </SocialLink>
              </SocialLinksContainer>
            </ThreeColRow>
          </Content>
        </div>
      </Container>
    </div>
  );
};
