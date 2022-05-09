import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/header";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import React, { useState } from "react";
// import { URL } from "../../constants/config";
import axios from "axios";
import ModalRegister from "../../components/Modal/ModalRegister";
import "./login.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const URL = process.env.REACT_APP_URL;

export const Login = () => {
  const [loginError, showLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit} = useForm();

  const onSubmit = async(loginData) => {
    const login = await axios.post(`${URL}/login`, loginData);
    console.log(login)
  }

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className=" welcome-text d-flex" md={8}>
            <Container className="justify-content-center d-flex align-items-center container-sm">
              <h1 className="p-0 m-0 mb-2 welcome-text  text-center text-align-center">
                ¡Bienvenido!
                <br />
                <br />
                ¡Bom apetit!
              </h1>
            </Container>
          </Col>
          <Col className="" md={4}>
            <Container className="login-container ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input {...register("password", { pattern: /^[A-Za-z]+$/i })} />
                <input type="submit" />
              </form>
            </Container>
          </Col>
          <Alert
            message={errorMsg}
            type="error"
            key="alert"
            variant="alert"
            className={loginError ? "show" : "hidden"}
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
};
