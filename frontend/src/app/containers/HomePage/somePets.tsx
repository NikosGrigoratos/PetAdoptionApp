import React, { Dispatch, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import MoonLoader from "react-spinners/MoonLoader";
import { useGetAllPetsQuery } from "../../features/petApiSlice";
import { Pet as IPet } from "../../../typings/pet";
import { Pet } from "../../components/pet";

const SomePetsContainer = styled.div`
  ${tw`
    w-2/4
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg: text-5xl
    text-black
    font-black
    text-center
    mt-6
  `}
`;

export const PetsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-black
  `}
`;

export function SomePets() {

  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 1300 });
  const { data, error, isLoading } = useGetAllPetsQuery();
  const somePets = [] as IPet[];


  if (!error && data?.pets) {
    data.pets.forEach(pet => {
      somePets.push(pet);
    });
  }

  const pets = somePets.map((pet) => <Pet {...pet}/>)

  return (
    <SomePetsContainer>
      <Title>Explore some pets!</Title>
      {isLoading && 
        <LoadingContainer>
          <MoonLoader loading size={20}/>
        </LoadingContainer>
      }
      {!isLoading && (
        <PetsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={pets}
            plugins={[
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              1300: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
            }}
          />
          <Dots
            value={current}
            onChange={setCurrent}
            number={isMobile ? somePets.length : Math.ceil(somePets.length / 3)}
          />
        </PetsContainer>
      )}
    </SomePetsContainer>
  );
}
