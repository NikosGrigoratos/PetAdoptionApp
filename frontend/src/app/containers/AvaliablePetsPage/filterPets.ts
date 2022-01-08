import { Pet } from "../../../typings/pet";
import { useGetAllPetsQuery } from "../../features/petApiSlice";
import React from "react";

export const FilterPets = (input: string) => {
  const { data, error, isLoading } = useGetAllPetsQuery();
  const pets = [] as Pet[];
  const petsFinal = [] as Pet[];
  input = input.toLocaleLowerCase();

  if (!error && data?.pets) {
    data.pets.forEach((pet) => {
      pets.push(pet);
    });
  }

  if (!input){ 
    return pets;
  }

  pets.forEach((pet) => {
    if (
      pet.name.toLocaleLowerCase() === input ||
      pet.spot.toLocaleLowerCase() === input ||
      pet.location.toLocaleLowerCase() === input ||
      pet.breed.toLocaleUpperCase() === input
    ) {
      petsFinal.push(pet);
    }
  });
  return petsFinal;
};
