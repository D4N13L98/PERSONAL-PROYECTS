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

const ExcersiceOne = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Problemas para un catión</NameTitle>
            <DescriptionText>
              Se presentan seis (6) problemas haciendo uso de diferentes iones
              metálicos valorados con soluciones estandarizadas de EDTA.
            </DescriptionText>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="0">
                <AccordionKnowledges.Header>
                  Problema 1
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  Se toma una alícuota de 50mL de una solución que contiene Cu
                  <sup>2+</sup> a concentración 0,0100M, la cual es tratada con
                  un buffer de NH<sub>3</sub> y NH<sub>4</sub>Cl (cuya
                  concentración corregida resulta en 0,100M) para mantener el pH
                  en 11,00. Finalmente se valora con una solución estandarizada
                  de EDTA 0,0100M. Calcule:
                  <ol>
                    <li>
                      El volumen del buffer agregado cuando la concentración
                      inicial es de 1,05M
                    </li>
                    <li>
                      Calcular pCu<sup>2+</sup> en los siguientes puntos de
                      valoración:
                    </li>
                    <ol>
                      <li>0mL</li>
                      <li>1mL</li>
                      <li>45mL</li>
                      <li>50mL</li>
                      <li>55mL</li>
                    </ol>
                  </ol>
                  Al obtener todos los datos necesarios simule la curva de
                  valoración
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="1">
                <AccordionKnowledges.Header>
                  Problema 2
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  Se proyecta determinar 25mL de una solución de ion zinc (II)
                  de concentración 0,0840M, con una solución de Titriplex III
                  0,100M frente a un indicador metalocrómico, H<sub>2</sub>
                  Ind, previa adición de 4mL de solución amortiguadora de pH 10,
                  que contiene NH<sub>3</sub> 1,0M. Indique la concentración y
                  el potencial de ion libre en el punto de equivalencia. Nota:
                  Corrobore sus datos con ayuda del simulador.
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="2">
                <AccordionKnowledges.Header>
                  Problema 3
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  Se disuelven 302mg de MnSO<sub>4</sub> en 100mL de agua
                  desionizada. Posteriormente, se toma una alícuota de 25mL la
                  cual se tampona a un pH de 8,00 y se valora con EDTA a
                  0,0100M. Determine la concentración del Mn<sup>2+</sup> y pMn
                  cuando se agreguen los siguientes volúmenes de EDTA y dibuje
                  la curva de valoración.
                  <ol>
                    <li>10mL</li>
                    <li>30mL</li>
                    <li>49mL</li>
                    <li>50mL</li>
                    <li>50,5mL</li>
                    <li>60mL</li>
                  </ol>
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="3">
                <AccordionKnowledges.Header>
                  Problema 4
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  Determine la concentración inicial de una solución de Pb
                  <sup>2+</sup>
                  cuando 30mL de esta se tratan con 10mL de agua
                  desmineralizada, 5 gotas de indicador metalocrómico al 2% y
                  5mL de solución amortiguadora de NH<sub>3</sub> y NH
                  <sub>4</sub>Cl a 1,5M para ajustar el pH en 10. Se sabe que el
                  volumen de EDTA 0,250M gastado es de 19mL y que el pPb
                  <sup>2+</sup> obtenido después del punto de equivalencia es de
                  16,35. Una vez se obtenga la concentración inicial del ion
                  metálico, simule la curva de valoración.
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="4">
                <AccordionKnowledges.Header>
                  Problema 5
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  En un plan de senderismo, un grupo de estudiantes deciden
                  tomar una muestra de suelo donde se encuentran altos niveles
                  de níquel. Dicha muestra de suelo se lleva a un laboratorio
                  donde se pesan 673mg y se disuelven en 250mL de agua,
                  posteriormente se recoge un filtrado de 25mL. Esta solución es
                  tratada con 2mL de buffer ácido acético y acetato de sodio 2M
                  para ajustar el pH en 5,00, adicionalmente se agregan 25mL de
                  agua desionizada, y se valora con EDTA al 0,05M. Determine la
                  concentración del ion metálico libre en el punto de
                  equivalencia y su pNi<sup>2+</sup>. Presente la curva de
                  valoración a diferentes volúmenes gastados del valorante.
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
            <AccordionKnowledges>
              <AccordionKnowledges.Item eventKey="5">
                <AccordionKnowledges.Header>
                  Problema 6
                </AccordionKnowledges.Header>
                <AccordionKnowledges.Body>
                  El sulfato de aluminio Al<sub>2</sub>(SO<sub>4</sub>)
                  <sub>3</sub> es usado como mordiente para fijar los colores en
                  los productos textiles. De esta manera, se tiene una solución
                  de Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>al 0,0769M donde
                  se toma una alícuota de 10mL y se transfiere a un Erlenmeyer,
                  se añaden 20 mL de agua, 10 mL de disolución buffer ácido
                  acético-acetato de amonio (pH = 4,62) 3M. Se valora con EDTA
                  0,5M. Es importante identificar el indicador más viable para
                  esta valoración y con él efectuar los cálculos
                  correspondientes para determinar el pAl<sup>3+</sup> en los
                  siguientes puntos:
                  <ol>
                    <li>1mL</li>
                    <li>Volumen de equivalencia</li>
                    <li>2,0mL</li>
                  </ol>
                </AccordionKnowledges.Body>
              </AccordionKnowledges.Item>
            </AccordionKnowledges>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default ExcersiceOne;
