import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: rgb(31, 42, 76);
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `}
`;
const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
    h-full
    max-w-screen-2xl
  `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `}
`

const CopyrightText = styled.small`
  font-size: 13px;
  ${tw`
    text-gray-300
  `}
`

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-3
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;
const ListItem = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-300
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`

const RedIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`

const SmallText =  styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            Pet adoption is a service which brings points in contact with you!
            You are able to adopt any pet in need in Greece!
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem><a href="#">Home</a></ListItem>
            <ListItem><a href="#">About Us</a></ListItem>
            <ListItem><a href="#">Some stuff</a></ListItem>
            <ListItem><a href="#">More</a></ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem><a href="#">FAQ</a></ListItem>
            <ListItem><a href="#">Contact Us</a></ListItem>
            <ListItem><a href="#">Support</a></ListItem>
            <ListItem><a href="#">Privacy Policy</a></ListItem>
            <ListItem><a href="#">Terms &amp; Conditions</a></ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhone}/>
            </RedIcon>
            <SmallText>+30 6979039154</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Email Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope}/>
            </RedIcon>
            <SmallText>nikos.grigoratos@gmail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>Copyright &copy; {new Date().getFullYear} PetAdoption. All rights 
        reserved.</CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
