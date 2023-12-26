import React from "react";
import "../../css/Us.css";
import styled from "styled-components";
import { UsData } from "./UsData.js";

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
  max-height: 600px;
  overflow: auto;

  @media (max-width: 1500px) {
    flex-direction: column;
    min-width: 300px;
  }
`;

const Card = styled.div`
  width: calcl(100% - 400px);
  padding: 15px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Oculta el thumb del scrollbar */
  }
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: transparent transparent; /* Para Firefox */

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  max-height: 600px;
  max-width: 400px;
  object-fit: cover;
  border-radius: 0 25px 25px 0;

  @media (max-width: 1500px) {
    width: 200px;
    height: 250px;
    border-radius: 50%;
    margin: auto;
    margin-top: 10px;
  }
`;

const NameTitle = styled.h3`
  color: #2a363b;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;

  @media (max-width: 1500px) {
    margin-bottom: 0.1rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #2a363b;
  text-align: justify;
  margin: 1.2rem;
`;

const Email = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1b3358;
  text-align: center;
`;

const Us = () => {
  return (
    <>
      <Body>
        {UsData.map((item, index) => {
          return (
            <CardContainer key={index} item={item}>
              <CardImage
                src={require("../../files/NOSOTROS.jpg")}
                alt="profile_photo"
              />
              <Card>
                <NameTitle>{item.Name}</NameTitle>
                <DescriptionText>{item.Description}</DescriptionText>
                <Email>
                  <i>
                    <b>
                      Daniel Mauricio Castellanos González -
                      dmcastellanosg@upn.edu.co
                    </b>
                  </i>
                </Email>
                <Email>
                  <i>
                    <b>Natalia López Velásquez - nlopezv@upn.edu.co</b>
                  </i>
                </Email>
              </Card>
            </CardContainer>
          );
        })}
      </Body>
    </>
  );
};

export default Us;
