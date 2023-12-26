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
  width: 60%;
  margin: auto;
  display: flex;
  min-width: 750px;

  @media (max-width: 1200px) {
    flex-direction: column;
    min-width: 400px;
  }
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

const Us = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Objetivo del OVA</NameTitle>
            <DescriptionText>
              Atendiendo a la temática enfocada en el análisis volumétrico de
              formación de complejos, se decidió crear un Objeto Virtual de
              Aprendizaje (OVA), con el fin de brindar un acercamiento a la
              formación de complejos estables resultantes de una reacción entre
              un ión metálico (ácido de Lewis) y especies iónicas o moleculares
              con pares libres de electrones (base de Lewis). En este sentido,
              el OVA se enfoca en las volumetrías de formación de quelatos,
              específicamente haciendo uso del quelón Ácido
              Etilendiaminotetraacético (EDTA) teniendo en cuenta el tratamiento
              sistemático de equilibrios, los cuales implican la descripción
              químico - matemática de estos sistemas al incorporar una serie de
              balances que permiten abordar el estudio de las valoraciones
              potenciométricas con sus respectivas curvas de valoración
            </DescriptionText>
            <DescriptionText>
              A partir de lo mencionado previamente, se espera que, con ayuda
              del OVA, los usuarios desarrollen habilidades científicas
              relacionadas con la simulación y modelación químico – matemática,
              permitiendo la comprensión de los equilibrios dinámicos asociados
              a la formación de complejos quelométricos, ya que estos son
              ampliamente usados en las industrias hídricas, farmacéuticas y de
              alimentos
            </DescriptionText>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default Us;
