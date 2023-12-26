import React from "react";
import "../../css/Us.css";
import styled from "styled-components";

const Body = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

const CardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 3px 3px 20px #2a363b;
  width: 70%;
  margin: auto;
  padding: 25px;
  display: flex;
  min-width: 550px;
  flex-direction: column;
  height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Oculta el thumb del scrollbar */
  }
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: transparent transparent; /* Para Firefox */
`;

const Card = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const NameTitle = styled.h3`
  color: #2a363b;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;

  @media (max-width: 1200px) {
    margin-bottom: 0.1rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #2a363b;
  text-align: justify;
  margin: 0.5rem;
`;

const Excercises = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Problemas</NameTitle>
            <DescriptionText>
              Dentro de este apartado se proponen una serie de problemas, tanto
              para las valoraciones de un catión, como para valoración de dos o
              más cationes. Con estos ejercicios se busca dar evidencia de las
              habilidades químico – matemáticas, relacionadas con la modelación
              y simulación, adquiridas durante el proceso.
            </DescriptionText>
            <DescriptionText>
              Una vez resueltos los problemas es posible llevarlos al simulador
              para obtener la respectiva curva de valoración y corroborar la
              veracidad de los cálculos realizados.
            </DescriptionText>
            <DescriptionText>
              Para lograr un adecuado uso del simulador se sugiere observar
              detenidamente la pestaña denominada “Uso del Simulador” donde, por
              medio de un video, se explica detalladamente cada función.
            </DescriptionText>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default Excercises;
