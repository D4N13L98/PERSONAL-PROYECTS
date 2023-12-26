import React, { useState } from "react";
import "../../css/Us.css";
import Carousel from "react-bootstrap/Carousel";
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
  height: 800px;
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

  &.descriptionText {
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 0;
  }
`;

const DownloaderButton = styled.button`
  padding: 0.5rem;
  font-size: 1.1rem;
  color: #e84a5f;
  font-weight: 700;
  border: 2px solid #e84a5f;
  border-radius: 5px;
  background: transparent;

  &:hover {
    color: white;
    background: #e84a5f;
    box-shadow: 0 0 10px #e84a5f;
  }
`;

const ZoomableImage = styled.img`
  width: 100%px;
  height: 400px;
  object-fit: fit;
  margin: 20px auto;
  border-radius: 5px;
`;

const FullscreenImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const FullscreenImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CarrouselBox = styled(Carousel)`
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: grid;
  place-content: center;
`;

const UnOrderList = styled.ul``;

const ListItem = styled.li``;

const Knowledges = () => {
  const [fullscreen, setFullscreen] = useState(false);

  const image = require("../../files/MAPA CONCEPTUAL.png");
  const openFullscreen = () => {
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
  };

  const handleDownload = () => {
    const fileName = image.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = image;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <Body>
      <CardContainer>
        <Card>
          <NameTitle>Conocimientos previos</NameTitle>
          <DescriptionText>
            Para desarrollar y fortalecer las habilidades químico – matemáticas
            es necesario abordar elementos contemplados en los espacios Teorías
            Químicas III y Sistemas Inorgánicos II. A continuación, se presenta
            un mapa conceptual para relacionar las temáticas que se tendrán en
            cuenta para comprender el funcionamiento del OVA y posteriormente
            del simulador.
          </DescriptionText>
          <CarrouselBox data-bs-theme="dark">
            <CarrouselBox.Item>
              <ZoomableImage
                src={image}
                alt="Mapa conceptual"
                onClick={openFullscreen}
                style={{ cursor: "pointer" }}
              />
            </CarrouselBox.Item>
          </CarrouselBox>
          <DescriptionText className="descriptionText">
            Imagen 1 - Mapa conceptual de conocimientos previos (Elaboración
            propia)
          </DescriptionText>
          {fullscreen && (
            <FullscreenImageContainer onClick={closeFullscreen}>
              <FullscreenImage src={image} alt="Mapa conceptual" />
            </FullscreenImageContainer>
          )}
          <DownloaderButton onClick={handleDownload}>
            Descargar Imágen
          </DownloaderButton>
          <DescriptionText>
            Con ayuda de esta herramienta es posible tener un acercamiento a la
            formación de quelatos que surgen a partir de la reacción entre un
            ion metálico y ligantes polidentados dando como resultados complejos
            cíclicos. Dentro de este Objeto Virtual de Aprendizaje se encuentra
            material de apoyo, ejemplos y ejercicios. Estos permiten hacer uso
            del simulador construido para obtener distintas curvas de valoración
            según sea el caso.
          </DescriptionText>
          <DescriptionText>
            Finalmente, se presentan algunos recursos bibliográficos que puede
            consultar para extender o solucionar dudas:
          </DescriptionText>
          <UnOrderList>
            <ListItem>
              CLAVIJO DÍAZ, Alfonso. 2002. Fundamentos de química analítica.
              Equilibrio iónico y análisis químico. Ed. Universidad Nacional de
              Colombia – UNIBIBLOS.
            </ListItem>
            <ListItem>
              RAMETTE, Richard, W. “Equilibrio y Análisis Químico”. Ed. Fondo
              Educativo Interamericano S. A., México D.F., 1993.
            </ListItem>
            <ListItem>
              HARRIS, Daniel. C., 2005. Exploring Chemical Analysis, 3rd Ed.,
              New York, W.H. Freeman and Co.
            </ListItem>
            <ListItem>
              SKOOG, Douglas y WEST, Donald. “Química Analítica” Ed. McGraw-Hill
              Interamericana S.A. Madrid, España. 2000.
            </ListItem>
            <ListItem>
              ATKINS, P. and LORETTA, J., 2005. Chemical Principles. The quest
              for insight. Ed. W.H. Freeman and Company. 3ª Edición. New York.
            </ListItem>
            <ListItem>
              BROWN, T. y Otros. 2004. Química: La ciencia central. Prentice
              Hall. México.
            </ListItem>
            <ListItem>
              HAMILTON, L. F., SIMPSON, S. G. y ELLIS, D. W.”Cálculos en Química
              Analítica”. Ed. McGraw Hill de México S.A. de C. V., 1981
            </ListItem>
          </UnOrderList>
        </Card>
      </CardContainer>
    </Body>
  );
};

export default Knowledges;
