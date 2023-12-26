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
`;

const UnOrderList = styled.ol``;

const ListItem = styled.li`
  font-weight: 700;
`;

const Glosary = () => {
  return (
    <>
      <Body>
        <CardContainer>
          <Card>
            <NameTitle>Glosario</NameTitle>
          </Card>
          <UnOrderList>
            <ListItem>Valoración</ListItem>
            <DescriptionText>
              Es un procedimiento para llevar a cabo una reacción química entre
              dos disoluciones por medio de la adición controlada (desde una
              bureta) de una disolución a la otra. En una valoración debe
              buscarse el modo de localizar el punto final, por ejemplo,
              utilizando un indicador.
            </DescriptionText>
            <ListItem>Curva de valoración</ListItem>
            <DescriptionText>
              Es una representación gráfica de cómo varía la concentración de
              uno de los reactivos a medida que se añade el valorante. La curva
              de valoración tiene tres regiones distintas, dependiendo de si se
              encuentra antes, en o después del punto de equivalencia.
            </DescriptionText>
            <ListItem>Curva de valoración Ácido - Base</ListItem>
            <DescriptionText>
              En estas curvas de valoración se representa gráficamente el pH que
              se mide en función del volumen de la solución de titulante
              añadida. La curva típicamente muestra un cambio brusco en el pH en
              el punto de equivalencia, donde los moles de ácido son iguales a
              los moles de base (o viceversa).
            </DescriptionText>
            <ListItem>
              Curva de valoración de Reducción – Oxidación (Redox)
            </ListItem>
            <DescriptionText>
              En estas curvas de valoración se representa gráficamente el
              potencial de electrodo que se mide en función del volumen de la
              solución de titulante. La curva muestra cambios en el potencial
              redox a medida que se añade el titulante hasta llegar al punto de
              equivalencia.
            </DescriptionText>
            <ListItem>Curva de valoración de precipitación</ListItem>
            <DescriptionText>
              En estas curvas de valoración se representa gráficamente la
              concentración de iones precipitantes o la masa del precipitado que
              se mide en función del volumen de la solución de titulante. La
              curva muestra el punto en el cual la cantidad de precipitado
              formado es máxima.
            </DescriptionText>
            <ListItem>Curva de valoración complejométricas</ListItem>
            <DescriptionText>
              En estas curvas de valoración se representa gráficamente la
              concentración del complejo formado que se mide en función del
              volumen de la solución de titulante. La curva muestra la formación
              y descomposición del complejo a lo largo del titulante añadido.
            </DescriptionText>
            <ListItem>Punto de equivalencia</ListItem>
            <DescriptionText>
              En una valoración, es la situación en la que los reactivos se
              encuentran en proporciones estequiométricas. Reaccionan entre sí y
              no queda ningún reactivo en exceso.
            </DescriptionText>
            <ListItem>Punto final (P.F)</ListItem>
            <DescriptionText>
              Se refiere al punto de una valoración en el que el indicador
              utilizado cambia de color. Un indicador elegido adecuadamente para
              una valoración debe tener su punto final tan próximo como sea
              posible al punto de equivalencia de la reacción de valoración.
            </DescriptionText>
            <ListItem>Quelometría</ListItem>
            <DescriptionText>
              Esta rama de la química analítica se centra en el estudio de la
              formación de quelatos mediante valoraciones, de complejos de
              coordinación formados entre iones metálicos y ligandos quelantes
              polidentados.
            </DescriptionText>
            <ListItem>Ion metálico</ListItem>
            <DescriptionText>
              Es una especie que acepta pares de electrones. Actúa como un ácido
              de Lewis.
            </DescriptionText>
            <ListItem>Agente quelante</ListItem>
            <DescriptionText>
              También denominado como quelón. Actúa como una base de Lewis ya
              que es donante de pares de electrones. Es un ligando polidentado,
              se une al átomo central de un ion complejo simultáneamente en dos
              o más posiciones de la esfera de coordinación.
            </DescriptionText>
            <ListItem>Quelato</ListItem>
            <DescriptionText>
              Un compuesto formado por un ion central unido a uno o más ligandos
              mediante enlaces covalentes coordinados. se forma por la unión de
              ligandos polidentados al átomo central de un ion complejo. Los
              quelatos son anillos de cinco o seis miembros que incluyen el
              átomo central y átomos de los ligandos.
            </DescriptionText>
            <ListItem>Complejo</ListItem>
            <DescriptionText>
              Es un catión, anión o molécula neutra poliatómica en los que unos
              grupos (moléculas o iones) denominados ligandos se unen al átomo o
              ion metálico central.
            </DescriptionText>
            <ListItem>Efecto quelato</ListItem>
            <DescriptionText>
              Se refiere a la estabilidad especial que consigue un ion complejo
              cuando se encuentran presentes ligandos polidentados.
            </DescriptionText>
            <ListItem>Ácido etilendiaminotetraacético (EDTA)</ListItem>
            <DescriptionText>
              Es un ácido aminopolicarboxílico y un sólido soluble en agua e
              incoloro. Su utilidad se deriva de su función como ligando
              hexadentado y agente quelante, es decir, su capacidad para fijar
              iones metálicos.
            </DescriptionText>
            <ListItem>Solución amortiguadora (Buffer)</ListItem>
            <DescriptionText>
              También conocida como solución buffer, es una solución química que
              tiene la capacidad de resistir cambios significativos de pH. De
              esta manera, un buffer puede ser usado en diversas soluciones para
              mantener constante su pH evitando que quede muy ácido o muy
              básica. Por lo general, las soluciones amortiguadoras están
              compuestas por un ácido débil y su base conjugada.
            </DescriptionText>
            <ListItem>Complejos auxiliares</ListItem>
            <DescriptionText>
              Conocidos como ligantes auxiliares o ligandos coligantes, son
              iones o moléculas que se coordinan a un ion metálico en un
              complejo de coordinación junto con el ligando principal. Los
              complejos auxiliares son capaces de afectar la estructura del
              complejo para otorgar mayor estabilidad, sin embargo, algunas
              propiedades físicas y químicas pueden variar.
            </DescriptionText>
            <ListItem>Constante de formación</ListItem>
            <DescriptionText>
              Es la constante de equilibrio de la formación del complejo a
              partir del ion metálico y las especies básicas presentes en la
              disolución. Es una medida de la tendencia del complejo a formarse.
            </DescriptionText>
            <ListItem>Constante condicional de estabilidad</ListItem>
            <DescriptionText>
              Es un parámetro que se utiliza en la química de coordinación y en
              la quelometría para describir la estabilidad de un complejo de
              coordinación formado entre un ion metálico y un ligando en
              particular bajo condiciones específicas.
            </DescriptionText>
            <ListItem>Indicadores metalocrómicos</ListItem>
            <DescriptionText>
              Estos indicadores son generalmente colorantes orgánicos que forman
              quelatos coloreados con iones metálicos en un intervalo de pM
              característico de cada catión y cada indicador. El mecanismo de
              acción de los indicadores metalocrómicos es similar al de los
              indicadores ácido – base, pero con una mayor complejidad, ya que
              implican equilibrios simultáneos de formación de complejos.
            </DescriptionText>
            <ListItem>pH</ListItem>
            <DescriptionText>
              Es una medida que se utiliza para representar la concentración de
              iones H<sup>+</sup> presentes en una solución ácida o básica. Se
              define como pH = -log [H<sup>+</sup>] (de la actividad del ion
              hidronio), por tanto, al ser una escala logarítmica se indica que
              cada unidad de cambio en el pH significa un cambio de 10 veces en
              la concentración de iones H<sup>+</sup>.
            </DescriptionText>
            <ListItem>Potencial de ion metálico libre (pM)</ListItem>
            <DescriptionText>
              Se refiere a la energía potencial eléctrica del ion metálico en
              una solución en relación con un electrodo de referencia estándar.
              Es una propiedad importante en la química de coordinación y la
              quelometría, ya que puede ayudar a comprender cómo los iones
              metálicos se comportan en solución y cómo interactúan con ligandos
              para formar complejos de coordinación.
            </DescriptionText>
          </UnOrderList>
        </CardContainer>
      </Body>
    </>
  );
};

export default Glosary;
