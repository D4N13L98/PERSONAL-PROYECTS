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
    text-align: center;
  }
`;

const AccordionKnowledges = styled(Accordion)`
  width: 100%;
  padding: 10px;
`;

const ExampleTwo = () => {
  const file = require("../../files/EJEMPLO 2. 2 CATIONES vs. EDTA.pdf");

  const handleDownload = () => {
    const fileName = file.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = file;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Ejemplos para mezcla de dos cationes</NameTitle>
            <DescriptionText>
              En esta sección se presentan cálculos implícitos para las
              valoraciones de sistemas compuestos por dos o más cationes. En
              estos casos no es común el uso del simulador, sin embargo, se
              considera la cuantificación de cada metal al formar varios
              quelatos con el EDTA, ligando auxiliar e indicadores usados para
              la en la solución para la identificación del punto final de la
              valoración.
            </DescriptionText>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="0">
                <AccordionKnowledges.Header>
                  Ejemplo introductorio
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  <DescriptionText>
                    Una disolución contiene CaCl<sub>2</sub> y MgCl<sub>2</sub>{" "}
                    en concentración 0,0100M. Se toma una alícuota de 25mL y se
                    trata con 5,0mL de una solución buffer que contiene NH
                    <sub>3</sub> y NH<sub>4</sub>Cl, cuya concentración inicial
                    es de 10,31M, adicionalmente se agregan 45mL de agua
                    desmineralizada, 5 gotas de calmagita en agua al 0,1% y se
                    valora con una solución de EDTA 0,0200M. Con los datos de
                    constantes y factores, determine el porcentaje de error con
                    respecto al punto de equivalencia y punto final de cada ion
                    metálico. Considere que debe calcular concentraciones y
                    potenciales para cada metal.
                  </DescriptionText>
                  <AccordionKnowledges>
                    <AccordionKnowledges.Item eventKey="6">
                      <AccordionKnowledges.Header>
                        Porcentaje de error
                      </AccordionKnowledges.Header>
                      <AccordionKnowledges.Body>
                        <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/5_KvSJu5Nt8?si=dScrgCN3runvltI0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <DescriptionText className="descriptionText">
                          Video 7 - Porcentaje de error (Elaboración propia)
                        </DescriptionText>
                      </AccordionKnowledges.Body>
                    </AccordionKnowledges.Item>
                  </AccordionKnowledges>
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
            <DescriptionText>
              Haciendo clic en este botón, es posible obtener un recurso
              valioso. Al descargar el archivo, tendrá a disposición un
              documento meticulosamente elaborado que refleja y complementa cada
              detalle explicado en los videos. Este recurso es una herramienta
              esencial para profundizar en el contenido y reforzar la
              comprensión de los conceptos clave.
            </DescriptionText>
            <DownloaderButton onClick={handleDownload}>
              Descargar Archivo
            </DownloaderButton>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default ExampleTwo;
