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

const OrderList = styled.ol`
`;

const ListItem = styled.li``;

const Examples = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Ejemplos</NameTitle>
            <DescriptionText>
              Dentro de este apartado se observan algunos ejemplos planteados y
              desarrollados de manera progresiva junto con su tratamiento
              sistemático para comprender la identificación y obtención de todos
              los datos útiles para los cálculos de variables como FHY
              <sup>1</sup>, FLM<sup>2</sup>, FMYL<sup>3</sup>, entre otros. Es
              importante también contemplar algunos parámetros condicionales que
              indican si es posible o no que un sistema pueda ser valorado.
            </DescriptionText>
            <OrderList>
              <ListItem>Factor de desprotonación del quelón.</ListItem>
              <ListItem>Factor de formación ligando – metal.</ListItem>
              <ListItem>
                Factor de formación de complejo, pueden presentarse factores
                para complejos hidroxilados (FMOHY) y factores para complejos
                protonados (FMHY).
              </ListItem>
            </OrderList>
            <DescriptionText>
              Lo ideal es que, para ejercicios de un solo catión, los usuarios
              sean capaces de hacer uso del simulador incorporado en EDTA Learn
              teniendo en cuenta los cálculos presentados paso a paso. En el
              caso de ejemplos para dos o más cationes se realizan cálculos para
              determinar potencial del metal, concentración del metal libre y el
              porcentaje de error dado por el punto de equivalencia y punto
              final de la valoración.
            </DescriptionText>
            <DescriptionText>
              Se recuerda que para lograr un adecuado uso del simulador es
              necesario comprender de donde provienen los diferentes
              equilibrios, balances y cálculos.
            </DescriptionText>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default Examples;
