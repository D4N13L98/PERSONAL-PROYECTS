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

const UnOrderList = styled.ul``;

const ListItem = styled.li``;

const References = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Referencias</NameTitle>
            <DescriptionText>
              Finalmente, se presentan los recursos utilizados para la
              construcción del glosario y el OVA. También pueden ser usados para
              aclarar dudas o ampliar el conocimiento.
            </DescriptionText>
            <UnOrderList>
              <ListItem>
                Ayres, G. (1970). Análisis químico cuantitativo. Segunda
                edición. Austin, Texas: Harper & Row Publishers, Inc.
              </ListItem>
              <ListItem>
                Brown, T., LeMay, E., Bursten, B., & Burge, J. (2004). Química.
                La ciencia central. México: Pearson Educación.
              </ListItem>
              <ListItem>
                Casas, J. A., Pinzón, D., & Molina, M. (2013). Determinación de
                cobre y zinc en muestras falseadas de latón. Niveles de abertura
                como propuesta de enseñanza de la técnica de titulación
                complexométrica. Revista Eureka sobre Enseñanza y Divulgación de
                las Ciencias. Vol. 10, No. 03, 445-457.
              </ListItem>
              <ListItem>
                Clavijo Díaz, A. (1995). Análisis de aleaciones por
                quelatometría. Parte uno: Aleaciones con Cu, Pb y Zn. Revista
                Colombiana de Química. Vol 24. No. 02, 25-38.
              </ListItem>
              <ListItem>
                Clavijo Díaz, A. (2002). Fundamentos de química analítica.
                Equilibrio iónico y análisis químico. Bogotá: Universidad
                Nacional de Colombia.
              </ListItem>
              <ListItem>
                Hamilton, L., Simpson, S., & Ellis, D. (1988). Cálculos de
                Química Analítica. México D.F: McGraw Hill.
              </ListItem>
              <ListItem>
                Harris, D. (2006). Análisis químico cuantitativo. Tercera
                edición. Michelson Laboratory. China Lake, California: Editorial
                Reverté.
              </ListItem>
              <ListItem>
                Petrucci, R. H., Geoffrey Herring, F., Madura, J., &
                Bissonnette, C. (2011). Química General. Principios y
                aplicaciones modernas. Madrid: Pearson Educación, S. A.
              </ListItem>
              <ListItem>
                Ramette, R. W. (1993). Equilibrio y Análisis Químico. Méxio D.F:
                Fondo Educativo Interamericano S. A.
              </ListItem>
              <ListItem>
                Skoog, D., West, D., & Crouch, S. (2015). Fundamentos de química
                analítica. Novena edición. México D.F.: Cengage Learning.
              </ListItem>
            </UnOrderList>
          </Card>
        </CardContainer>
      </Body>
    </>
  );
};

export default References;
