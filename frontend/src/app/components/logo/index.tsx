import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import logoImg from "../../../assets/images/logo.jpg";

interface LogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
        text-xl
        md: text-2xl
        font-bold
        text-black
        ml--14
    `}
    ${({color}: any ) => color === "white" ? tw`text-white` : tw`text-black`}
` as any;

const Image = styled.div`
  width: auto ${tw`
        h-6
        md: h-9
    `} img {
    width: 30%;
    height: auto;
  }
`;

export function Logo(props: LogoProps) {

  const {color} = props;
  
  return (
    <LogoContainer>
      <Image>
        <img src={logoImg} />
      </Image>
      <LogoText color={color || "dark"}>Adopt a pet!</LogoText>
    </LogoContainer>
  );
}
