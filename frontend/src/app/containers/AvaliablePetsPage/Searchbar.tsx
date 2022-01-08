import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface SearchbarProps {
  changeSearch: React.Dispatch<React.SetStateAction<string>>
  search: string
}

const SearchBarContainer = styled.div`
  min-height: 50px;
  margin-top: 2em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-center
    items-center
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `}
`;

const SearchInput = styled.input`
  box-shadow: 0 2.3px 15px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    w-3/5
    min-h-full
    rounded-l-xl
    border-2
    border-red-500
    focus:outline-none
    focus:border-4
    text-3xl
    pl-5
  `}
`;

const IconContainer = styled.div`
  ${tw`
    p-3
    rounded-r-lg
    bg-red-500
    border-red-500
    cursor-pointer
  `}
`;

const SearchIcon = styled.span`
  ${tw`
    text-white
    lg:text-xl
  `}
`;

export function SearchBar({changeSearch, search}: SearchbarProps) {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearch(e.target.value);
  }

  return (
    <SearchBarContainer>
      <SearchInput value={search} onChange={handleInputChange} placeholder="Search anything related to pets"/>
      <SearchIcon>
        <IconContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconContainer>
      </SearchIcon>
    </SearchBarContainer>
  );
}
