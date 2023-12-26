import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

export function LoginForm(props) {
  const [messageAlert, setMessageAlert] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const { switchToSignup } = useContext(AccountContext);

  const LoginBtn = async () => {
    const emailLoginInput = document.getElementById("emailLoginInput").value;
    const passwordLoginInput =
      document.getElementById("passwordLoginInput").value;

    if (emailLoginInput === "" || passwordLoginInput === "") {
      setMessageAlert("Para continuar debe ingresar tus credenciales o datos.");
      setTitleModal("Ten cuidado");
      handleShowModal();
    } else {
      setLoading(true)
      const emailExist = await fetch(
        `https://edtalearn.onrender.com/edtasimulator/searchUser/${emailLoginInput}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await emailExist.json();
      if (data.message === "Usuario encontrado") {
        if (data.data.password === passwordLoginInput) {
          setLoading(false)
          setMessageAlert(
            `Ha ingresado correctamente, bienvenido/a ${data.data.name} ${data.data.lastname}`
          );
          setTitleModal("Bienvenido/a");
          handleShowModal();
          setTimeout(() => {
            navigate("/main", { state: data.data });
          }, 2500);
        } else {
          setLoading(false)
          setMessageAlert(
            `El correo y/o contraseña ingresados son incorrectos`
          );
          setTitleModal("Error");
          handleShowModal();
        }
      }
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input
            type="email"
            placeholder="Correo electrónico"
            id="emailLoginInput"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            id="passwordLoginInput"
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={LoginBtn}>Iniciar sesión</SubmitButton>
        <Marginer direction="vertical" margin="5px" />
        <LineText>
          ¿No tiene una cuenta?{" "}
          <BoldLink onClick={switchToSignup} href="#">
            Regístrese
          </BoldLink>
        </LineText>
      </BoxContainer>
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
      <Modal style={{textAlign: "center"}} show={loading} backdrop="static" keyboard={false} centered>
        <Modal.Body>
          <Spinner animation="border" variant="danger" />
          <p>Cargando...</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
