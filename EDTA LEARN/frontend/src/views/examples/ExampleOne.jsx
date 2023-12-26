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

const ExampleOne = () => {
  const file = require("../../files/EJEMPLO 1 CATIÓN vs. EDTA.pdf");

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
            <NameTitle>Ejemplos para un catión</NameTitle>
            <DescriptionText>
              En este apartado se encuentra un problema relacionado con las
              valoraciones potenciométricas para la formación de quelatos con
              EDTA expuestos a manera de video paso por paso. Recuerde ir
              revisando los ejemplos en orden para lograr la comprensión de
              todos los cálculos ejecutados.
            </DescriptionText>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="0">
                <AccordionKnowledges.Header>
                  Ejemplo introductorio
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  <DescriptionText>
                    Construya la curva de valoración para la determinación de
                    25mL de una solución de Zn(NO<sub>3</sub>)<sub>2</sub>{" "}
                    0,0200M, la adición de 50mL de agua desionizada, adicionar
                    3,0mL de una solución amortiguadora de NH<sub>3</sub> y NH
                    <sub>4</sub>Cl de concentración total 3,20M para ajustar el
                    pH en 10,0. Como valorante se usa la sal disódica del ácido
                    etilendiaminotetraacético (EDTA) de concentración 0,0250M
                  </DescriptionText>
                  <AccordionKnowledges>
                    <AccordionKnowledges.Item eventKey="1">
                      <AccordionKnowledges.Header>
                        Equilibrios presentes
                      </AccordionKnowledges.Header>
                      <AccordionKnowledges.Body>
                        <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/5kY1zQs_9aQ?si=zABw5kIjfJjPWexn"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <DescriptionText className="descriptionText">
                          Video 1 - Equilibrio presentes (Elaboración propia)
                        </DescriptionText>
                      </AccordionKnowledges.Body>
                    </AccordionKnowledges.Item>
                  </AccordionKnowledges>
                  <AccordionKnowledges>
                    <AccordionKnowledges.Item eventKey="2">
                      <AccordionKnowledges.Header>
                        Identificación de especies
                      </AccordionKnowledges.Header>
                      <AccordionKnowledges.Body>
                        <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/0ORtWVHxU8A?si=X2fa2CWbLnxoeOoR"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <DescriptionText className="descriptionText">
                          Video 2 - Identificación de especies (Elaboración
                          propia)
                        </DescriptionText>
                      </AccordionKnowledges.Body>
                    </AccordionKnowledges.Item>
                  </AccordionKnowledges>
                  <AccordionKnowledges>
                    <AccordionKnowledges.Item eventKey="3">
                      <AccordionKnowledges.Header>
                        Planteamiento de balances
                      </AccordionKnowledges.Header>
                      <AccordionKnowledges.Body>
                        <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/E69c2lA3Gak?si=gwstB9j6acpSMDKK"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <DescriptionText className="descriptionText">
                          Video 3 - Planteamiento de balances (Elaboración
                          propia)
                        </DescriptionText>
                      </AccordionKnowledges.Body>
                    </AccordionKnowledges.Item>
                  </AccordionKnowledges>
                  <AccordionKnowledges>
                    <AccordionKnowledges.Item eventKey="4">
                      <AccordionKnowledges.Header>
                        Constantes de formación
                      </AccordionKnowledges.Header>
                      <AccordionKnowledges.Body>
                        <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/7266fzCJtz0?si=MZvLwcgUTWAtFqhu"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <DescriptionText className="descriptionText">
                          Video 4 - Constantes de formación (Elaboración propia)
                        </DescriptionText>
                      </AccordionKnowledges.Body>
                    </AccordionKnowledges.Item>
                  </AccordionKnowledges>
                  <AccordionKnowledges>
                    <AccordionKnowledges.Item eventKey="5">
                      <AccordionKnowledges.Header>
                        Constante condicional
                      </AccordionKnowledges.Header>
                      <AccordionKnowledges.Body>
                        <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/2mEL0FlltoA?si=naV099xCGwE0XyJs"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <DescriptionText className="descriptionText">
                          Video 5 - Constante condicional (Elaboración propia)
                        </DescriptionText>
                      </AccordionKnowledges.Body>
                    </AccordionKnowledges.Item>
                  </AccordionKnowledges>
                  <AccordionKnowledges>
                    <AccordionKnowledges.Item eventKey="6">
                      <AccordionKnowledges.Header>
                        Cálculos dependientes del punto de equivalencia
                      </AccordionKnowledges.Header>
                      <AccordionKnowledges.Body>
                        <iframe
                          width="100%"
                          height="500"
                          src="https://www.youtube.com/embed/UVP4XSiBzxs?si=GoRyn06ZHXLfmff-"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <DescriptionText className="descriptionText">
                          Video 6 - Cálculos dependientes del punto de
                          equivalencia (Elaboración propia)
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

export default ExampleOne;
