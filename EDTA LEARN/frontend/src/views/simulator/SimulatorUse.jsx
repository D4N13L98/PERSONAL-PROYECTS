import React from "react";
import "../../css/Us.css";
import styled from "styled-components";

const Body = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const CardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 3px 3px 20px #2a363b;
  width: 95%;
  margin: auto;
  display: flex;
  min-width: 500;
  height: 100%;
`;

const Card = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NameTitle = styled.h3`
  color: #2a363b;
  font-size: 2rem;
  margin: 1.2rem;
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #2a363b;
  text-align: justify;
  margin: 0.5rem;

  &.descriptionText {
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 0;
    text-align: center;
  }
`;

const SimulatorUse = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Uso del simulador</NameTitle>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/870944277?h=5439ddce84"
              width="60%"
              height="500"
              frameborder="1"
              allowfullscreen
            ></iframe>
            <DescriptionText className="descriptionText">
              Video 8 - Uso del simulador (Elaboración propia)
            </DescriptionText>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default SimulatorUse;
