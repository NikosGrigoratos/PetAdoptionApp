import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";
import { Link } from "react-router-dom";

const ListContainer = styled.div`
  ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
        `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          <NavItem menu>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem menu>
            <Link to="/available">Available Pets</Link>
          </NavItem>
          <NavItem menu>
            <a href="#">Contact us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/available">Available Pets</Link>
      </NavItem>
      <NavItem>
        <a href="#">Contact us</a>
      </NavItem>
    </ListContainer>
  );
}
