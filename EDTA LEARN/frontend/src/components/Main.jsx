import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { SidebarData } from "./SidebarData.js";
import SubMenu from "./SubMenu.js";
import { IconContext } from "react-icons/lib";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Nav = styled.div`
  background: #2a363b;
  height: 80px;
  width: 100vw;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavIcon = styled(Link)`
  margin: 0 1.2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;

  &.exit {
    justify-content: flex-end;
    margin-right: 1rem;
  }
`;

const SideBarNav = styled.nav`
  background: white;
  width: 320px;
  heigth: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z.index: 10;
  overflow: hidden;
`;

const SideBarWrap = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: #2a363b;
  overflow: auto;
  align-items: flex-end;
  
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Oculta el thumb del scrollbar */
  }
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: transparent transparent; /* Para Firefox */
`;

const LogOutBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const DataUserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  text-align: justify;
  margin: 0;
  text-decoration: none;

  &.title {
    font-size: 3rem;
    font-weight: 700;
  }
`;

const Content = styled.div`
  height: calc(100vh - 90px);
  width: ${(props) => (props.isOpen ? "calc(100vw - 300px)" : "100vw")};
  overflow: auto;
  background-color: #e9e9e9;
  border-radius: 15px;
  padding: 15px;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Oculta el thumb del scrollbar */
  }
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: transparent transparent; /* Para Firefox */
`;

const BlankSpace = styled.div`
  height: calc(100vh - 90px);
  width: ${(props) => (props.isOpen ? "320px" : "0")};
  transition: 350ms;
`;

const Body = styled.div`
  padding: 0;
  display: flex;
  background-color: #e9e9e9;
`;

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [datosDeUbicacion, setDatosDeUbicacion] = useState(null);
  const [sidebar, setSideBar] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (datosDeUbicacion) {
    } else {
      setDatosDeUbicacion(location.state);
    }
  }, [location.state, datosDeUbicacion]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const showSideBar = () => {
    setSideBar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSideBar} />
          </NavIcon>
          <DescriptionText className="title">EDTA Learn</DescriptionText>
          <LogOutBox>
            {datosDeUbicacion && (
              <DataUserBox>
                <DescriptionText>
                  <b>
                    {datosDeUbicacion.name + " " + datosDeUbicacion.lastname}
                  </b>
                </DescriptionText>
                <DescriptionText>{datosDeUbicacion.email}</DescriptionText>
              </DataUserBox>
            )}
            <NavIcon to="#">
              <MdIcons.MdLogout
                onClick={() => {
                  setTitleModal("Sesión cerrada");
                  setMessageAlert("Has cerrado la sesión correctamente");
                  handleShowModal();
                  setTimeout(() => {
                    navigate("/");
                  }, 2500);
                }}
              />
            </NavIcon>
          </LogOutBox>
        </Nav>
        <SideBarNav sidebar={sidebar}>
          <SideBarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SideBarWrap>
        </SideBarNav>
        <Body>
          <BlankSpace isOpen={sidebar} />
          <Content isOpen={sidebar}>
            <Outlet />
          </Content>
        </Body>
      </IconContext.Provider>

      <Modal show={showModal} onHide={handleHideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{messageAlert}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleHideModal}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Main;
