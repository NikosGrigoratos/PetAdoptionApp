import {
  faCalendarAlt,
  faDog,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg: text-5xl
    text-black
    font-black
    text-center
  `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
  `}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    pl-10
    pr-10
    pt-6
    pb-6
  `}
`;
const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `}
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `}
`;

const StepIcon = styled.span`
  ${tw`
    text-red-500
    text-3xl
  `}
`;

export function AdoptingSteps() {
  return (
    <Container>
      <Title>Διαδικασία Υιοθεσίας</Title>
      <StepsContainer>
      <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faDog} />
            </StepIcon>
          </Step>
          <StepTitle>Διαλέξτε ένα κατοικίδιο!</StepTitle>
          <StepDescription>
            Υπάρχουν πολλά κατοικίδια που έχουν ανάγκη για ένα σπίτι!
            Διαλέξτε το αγαπημένο σας!
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Διαλέξτε τοποθεσία</StepTitle>
          <StepDescription>
            Η τοποθεσία καθώς και το ίδρυμα που φιλοξενεί το κατοικίδιο αναγράφονται
            στη καρτέλα του, βρείτε ενα κοντά σας!
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faPhone} />
            </StepIcon>
          </Step>
          <StepTitle>Επικοινωνήστε με το ίδρυμα</StepTitle>
          <StepDescription>
            Υπάρχουν πολλοί τρόποι να έρθετε σε επάφη με το εκάστοτε ίδρυμα,
            Πατήστε το κουμπί στη καρτέλα του κατοικιδιου!
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
