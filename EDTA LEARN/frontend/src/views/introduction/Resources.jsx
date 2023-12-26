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
  height: 800px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NameTitle = styled.h3`
  color: #2a363b;
  font-size: 2.5rem;
  font-weight: 700;
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
  }
`;

const Resources = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Recursos</NameTitle>
            <DescriptionText>
              Se presenta una recopilación de tablas que contienen gran parte de
              la base de datos utilizada en el simulador. Aquellos datos
              corresponden a: constantes de disociación, formación de complejos
              ligantes, diferentes quelatos con EDTA y las transiciones de
              colores de los indicadores metalocrómicos comúnmente usado en las
              valoraciones de formación de este tipo de complejos. Se sugiere
              trabajar con estas tablas para evitar variaciones en los
              resultados obtenidos en cada problema.
            </DescriptionText>
            <object
              aria-label="PDF CONSTANTES"
              data={require("../../files/CONSTANTES.pdf")}
              type="application/pdf"
              width="100%"
              height="600px"
            ></object>
            <DescriptionText className="descriptionText">
              Archivo 1 - Constantes de formación complejos (Elaboración propia)
            </DescriptionText>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default Resources;
