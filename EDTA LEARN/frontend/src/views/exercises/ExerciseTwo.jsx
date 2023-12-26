import React from "react";
import "../../css/Us.css";
import Accordion from "react-bootstrap/Accordion";
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
  height: 700px;
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

const AccordionKnowledges = styled(Accordion)`
  width: 100%;
`;

const ExcerciseTwo = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Problemas para mezcla de dos cationes</NameTitle>
            <DescriptionText>
              Se presentan dos (2) problemas de mezclas con diferentes iones
              metálicos valorados con soluciones estandarizadas de EDTA y
              haciendo uso de indicadores. Tener en cuenta el desarrollo del
              factor F<sub>HInd</sub> ya que este es útil al momento de plantear
              cálculos propios del porcentaje de error.
            </DescriptionText>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="0">
                <AccordionKnowledges.Header>
                Problema 1
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  Se encuentra una aleación desconocida constituida por zinc y
                  plomo. Se prepara una solución a 0,05M y de allí se toma una
                  alícuota de 75mL para tratarla con una solución buffer
                  ajustando el pH en 6,00 y se añade como indicador el naranja
                  de xilenol. Finalmente se valora dicha solución con EDTA
                  0,220M. Desarrolle los equilibrios y balances correspondientes
                  para cada ion metálico e indique cuál es el porcentaje de
                  error del método.
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="1">
                <AccordionKnowledges.Header>
                Problema 2
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  Un analista de laboratorio decide preparar una solución a
                  0,0634M que contiene aluminio y bario. De esta solución se
                  tomó una alícuota de 40mL y se trató con: 15mL de agua
                  desmineralizada y 5mL de solución amortiguadora NH<sub>3</sub>{" "}
                  y NH<sub>4</sub>Cl 3,0M para ajustar el pH en 11. Por otro
                  lado, se estandarizó una solución EDTA con concentración de
                  0,098M, la cual se usó como valorante. Presente los
                  equilibrios y balances correspondientes a cada metal y
                  justifique si es viable llevar a cabo dicha valoración.
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default ExcerciseTwo;
