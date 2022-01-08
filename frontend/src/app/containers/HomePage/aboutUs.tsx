import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { SCREENS } from "../../components/responsive"
import logo from "../../../assets/images/dog.svg";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white

  `}
`

const PetContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 80%
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`
const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`

 const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
 `


export function AboutUs(){
  return (
    <AboutUsContainer>
      <PetContainer>
        <img src={logo}/>
      </PetContainer>
      <InfoContainer>
        <Title>A service to help you get in contact with adoption centers!</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse elementum quis risus nec suscipit.
           Donec et nunc sit amet mauris commodo consequat. 
          Sed vel nisl eu augue bibendum egestas sit amet eu nisl. 
          Etiam dictum fermentum mi, quis facilisis nisl iaculis cursus. 
          Phasellus luctus ultrices metus, tincidunt semper nisl sagittis eget. 
          Etiam porttitor mauris sit amet mi consequat, id vestibulum turpis gravida. 
          Aliquam malesuada odio ut enim porttitor, ut malesuada nisi vehicula. 
          Morbi sagittis luctus lorem, quis faucibus massa pretium nec.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}