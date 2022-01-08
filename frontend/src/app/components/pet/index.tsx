import {faPaw} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Pet as IPet } from "../../../typings/pet";
import { Button } from "../button";

interface PetProps extends IPet {}

export const PetContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;
  max-height: 26em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-4
    md:m-8
  `}
`;

export const PetThumbnail = styled.div`
  width: 100%;
  height: 180px;
  
  img {
    width: 100%;
    height: 180px;
  }
`;

export const PetName = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-black
    mt-1
    mb-1
  `}
`
export const LocationContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    mt-3
  `}
`
export const SpotText = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`

export const LocationText = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
  `}
`

export const SmallIcon = styled.span`
  ${tw`
    text-red-500
    text-sm
    mr-1
    ml-1
  `}
`

export const DetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-center
  `}
`

export const PetDetail = styled.span`
  ${tw`
    flex
    items-center
  `}
`
export const PetInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`
export const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;

  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `}
`
export const AdoptButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`

export function Pet(props: PetProps) {
  const {name, img, breed, location, spot, age} = props;

  return(
    <PetContainer>
      <PetThumbnail>
        <img src={img} />
      </PetThumbnail>
      <PetName>{name} ({age})</PetName>
      <LocationContainer>
        <LocationText>{location}</LocationText>
      </LocationContainer>
      <LocationContainer>
        <SpotText>{spot}</SpotText>
      </LocationContainer>
      <Seperator />
      <DetailsContainer>
        <PetDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faPaw}/>
          </SmallIcon>
            <PetInfo>{breed}</PetInfo>
          <SmallIcon>
            <FontAwesomeIcon icon={faPaw}/>
          </SmallIcon>
        </PetDetail>
      </DetailsContainer>
      <Seperator/>
      <AdoptButton text="Adopt Now!"/>
    </PetContainer>    
  )
}
