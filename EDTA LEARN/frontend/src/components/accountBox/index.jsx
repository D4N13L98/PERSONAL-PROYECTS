import { React, useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
  min-width: 300px;
  max-width: 520px;
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 1px 1px 15px #2a363b;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 170%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -500px;
  left: -290px;
  transform: rotate(60deg);
  background: linear-gradient(
    70deg,
    #e84a5f 20%,
    #e84a5f 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  -webkit-text-stroke: 0.5px #e84a5f;
`;

const SmallText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-top: 7px;
  z-index: 10;
  -webkit-text-stroke: 0.5px #e84a5f;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1150px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "700px",
    borderRadius: "50%",
    transform: "rotate(25deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("https://i.pinimg.com/564x/de/93/00/de9300895efbcd083941bc3ebf1f4e18.jpg");
    filter: invert(100%)
  }
`;

export default function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AppContainer>
      <AccountContext.Provider value={contextValue}>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "signin" && (
              <HeaderContainer>
                <HeaderText>Bienvenido/a a</HeaderText>
                <HeaderText>EDTA Learn</HeaderText>
                <SmallText>Inicie sesión para continuar!</SmallText>
              </HeaderContainer>
            )}
            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Cree</HeaderText>
                <HeaderText>una cuenta</HeaderText>
                <SmallText>Por favor regístrese para continuar!</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignupForm />}
          </InnerContainer>
        </BoxContainer>
      </AccountContext.Provider>
    </AppContainer>
  );
}
