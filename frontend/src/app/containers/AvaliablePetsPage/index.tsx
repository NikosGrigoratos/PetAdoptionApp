import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/Navbar";
import { FilteredPets } from "./filteredPets";
import { SearchBar } from "./Searchbar";
import { FilterPets } from "./filterPets";

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const FilteredPetsContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-wrap
    justify-center
    mt-8
    mb-8
  `};
`;

export function AvailablePetsPage() {

  const [search, setSearch] = useState("");

  const petsFiltered = FilterPets(search);

  return (
    <PageContainer>
      <Navbar />
      <SearchBar changeSearch={setSearch} search={search}/>
      <FilteredPetsContainer>
        {petsFiltered && petsFiltered.map(pet => {
          return(
            <FilteredPets name={pet.name} location={pet.location} spot={pet.spot} img={pet.img} breed={pet.breed} age={pet.age}/>
          )
        })}
        {petsFiltered.length === 0 && <h1>No pets Found</h1>}
      </FilteredPetsContainer>
      <Footer />
    </PageContainer>
  );
}
