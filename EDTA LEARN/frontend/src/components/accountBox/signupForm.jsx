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
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export function SignupForm(props) {
  const [messageAlert, setMessageAlert] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const { switchToSignin } = useContext(AccountContext);

  const RegisterBtn = async () => {
    const nameRegisterInput =
      document.getElementById("nameRegisterInput").value;
    const lastnameRegisterInput = document.getElementById(
      "lastnameRegisterInput"
    ).value;
    const emailRegisterInput =
      document.getElementById("emailRegisterInput").value;
    const passwordRegisterInput = document.getElementById(
      "passwordRegisterInput"
    ).value;

    if (
      nameRegisterInput === "" ||
      lastnameRegisterInput === "" ||
      emailRegisterInput === "" ||
      passwordRegisterInput === ""
    ) {
      setMessageAlert("Diligencie todos los campos para continuar..");
      setTitleModal("Debe tener cuidado");
      handleShowModal();
    } else {
      setLoading(true);
      const emailExist = await fetch(
        `https://edtalearn.onrender.com/edtasimulator/searchUser/${emailRegisterInput}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await emailExist.json();
      if (data.message === "Usuario no encontrado") {
        let data = {
          name: nameRegisterInput,
          lastname: lastnameRegisterInput,
          email: emailRegisterInput,
          password: passwordRegisterInput,
        };
        fetch("https://edtalearn.onrender.com/edtasimulator/createUser", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).then((res) => res.json());
        setLoading(false);
        setTitleModal("Éxito");
        setMessageAlert(
          "Se ha registrado correctamente, puede iniciar sesión."
        );
        handleShowModal();
      } else if (data.message === "Usuario encontrado") {
        setLoading(false);
        setTitleModal("Advertencia");
        setMessageAlert(
          "El correo que ha escrito ya se ha registrado anteriormente, revise los datos"
        );
        handleShowModal();
      }
    }
  };
  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input type="text" placeholder="Nombres" id="nameRegisterInput" />
          <Input
            type="text"
            placeholder="Apellidos"
            id="lastnameRegisterInput"
          />
          <Input
            type="email"
            placeholder="Correo electrónico"
            id="emailRegisterInput"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            id="passwordRegisterInput"
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={RegisterBtn}>
          Registrarse
        </SubmitButton>
        <Marginer direction="vertical" margin="5px" />
        <LineText>
          ¿Ya tiene una cuenta?{" "}
          <BoldLink onClick={switchToSignin} href="#">
            Inicie sesión
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
          <p >Cargando...</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
