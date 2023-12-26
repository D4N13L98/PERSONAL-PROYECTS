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
  box-shadow: 1px 1px 15px #2a363b;
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
  max-height: 820px;
  overflow: auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const NameTitle = styled.h1`
  color: #2a363b;
  font-size: 5rem;

  @media (max-width: 1200px) {
    margin-bottom: 0.1rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #2a363b;
  text-align: justify-all;
  margin: 0 0.5rem;
`;

const ListItem = styled.li`
  font-weight: 700;
`;

const Introduction = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>EDTA LEARN</NameTitle>
            <DescriptionText>
              EDTA Learn es una de las muchas entradas al mundo de las
              valoraciones potenciométricas de formación de quelatos con EDTA.
              Esta aplicación está diseñada como un{" "}
              <b>Objeto Virtual de Aprendizaje (OVA)</b>, creado para mejorar y
              enriquecer la comprensión de este tema crucial en química
              analítica.
            </DescriptionText>
            <DescriptionText>
              <b>¿Qué puede esperar de EDTA Learn?</b>
            </DescriptionText>
            <ol>
              <ListItem>
                <i>
                  <b>Simulador Interactivo:</b>
                </i>
              </ListItem>
              <DescriptionText>
                Relación entre la práctica y la teoría a través del simulador
                especializado. Con él se pueden llevar a cabo valoraciones
                potenciométricas en tiempo real y observar cómo se forman
                complejos quelato con EDTA
              </DescriptionText>
              <ListItem>
                <i>
                  <b>Constantes y Datos Relevantes:</b>
                </i>
              </ListItem>
              <DescriptionText>
                Acceso a una extensa base de datos de constantes y valores
                fundamentales utilizados en estas valoraciones. Estos datos son
                esenciales para obtener resultados precisos y fiables.
              </DescriptionText>
              <ListItem>
                <i>
                  <b>Herramientas de Aprendizaje:</b>
                </i>
              </ListItem>
              <DescriptionText>
                Se ofrece una variedad de recursos, desde tutoriales hasta
                ejemplos prácticos, para ayudar con la comprensión de los
                diferentes conceptos y procedimientos involucrados en las
                valoraciones potenciométricas.
              </DescriptionText>
              <ListItem>
                <i>
                  <b>Visualización clara</b>
                </i>
              </ListItem>
              <DescriptionText>
                Gracias a las representaciones visuales, podrá observar cómo
                cambian los valores de concentración de las sustancias químicas
                y otros parámetros a medida que se avanza en la titulación.
              </DescriptionText>
              <ListItem>
                <i>
                  <b>Personalización</b>
                </i>
              </ListItem>
              <DescriptionText>
                EDTA Learn permite aprender al propio ritmo. Es posible explorar
                los contenidos según las necesidades y el tiempo disponible.
              </DescriptionText>
            </ol>
            <DescriptionText>
              EDTA Learn está dirigido a estudiantes de química, profesionales
              de laboratorio e incluso, personas apasionadas por la química
              analítica. EDTA Learn es la herramienta perfecta para mejorar
              conocimientos y habilidades en las valoraciones potenciométricas
              de formación de quelatos.
            </DescriptionText>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default Introduction;
