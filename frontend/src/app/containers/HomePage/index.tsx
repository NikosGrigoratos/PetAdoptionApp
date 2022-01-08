import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Footer } from "../../components/footer"
import { Marginer } from "../../components/marginer"
import { Navbar } from "../../components/Navbar"
import { AboutUs } from "./aboutUs"
import { AdoptingSteps } from "./adoptingSteps"
import { SomePets } from "./somePets"
import { TopSection } from "./topSIdeSection"


const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`

export function HomePage () {
    return(
        <PageContainer>
            <Navbar/>
            <TopSection />
            <Marginer direction="vertical" margin="8em"></Marginer>
            <AdoptingSteps />
            <Marginer direction="vertical" margin="8em"></Marginer>
            <AboutUs/>
            <Marginer direction="vertical" margin="8em"></Marginer>
            <SomePets />
            <Footer />
        </PageContainer>
    )
}