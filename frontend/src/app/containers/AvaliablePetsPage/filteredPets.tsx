import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  AdoptButton,
  DetailsContainer,
  LocationContainer,
  LocationText,
  PetContainer,
  PetDetail,
  PetInfo,
  PetName,
  PetThumbnail,
  Seperator,
  SmallIcon,
  SpotText,
} from "../../components/pet";

interface FilteredPetProps {
  name: string
  location: string
  spot: string
  img: string
  breed: string
  age: number
}

export function FilteredPets({name, location, spot, img, breed, age}: FilteredPetProps) {
  return (
    <PetContainer>
      <PetThumbnail>
        <img src={img}/>
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
            <FontAwesomeIcon icon={faPaw} />
          </SmallIcon>
          <PetInfo>{breed}</PetInfo>
          <SmallIcon>
            <FontAwesomeIcon icon={faPaw} />
          </SmallIcon>
        </PetDetail>
      </DetailsContainer>
      <Seperator />
      <AdoptButton text="Adopt Now!" />
    </PetContainer>
  );
}
