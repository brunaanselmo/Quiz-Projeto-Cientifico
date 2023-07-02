import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./styles.css";


export default function Results() {

  return (
    <Container className="container">
      <div className="app-question">
        <div className="navbar">
          <p>QUIZ Meio ambiente e cotidiano</p>
        </div>
        <p className="resultados">Resultado</p>
        <div className="results1">
          <div><p>1- </p><AiOutlineCloseCircle style={{ fontSize: "30px", marginTop: "10px" }} /></div>
          <div><p>2- </p><AiOutlineCheckCircle /></div>
          <div><p>3- </p><AiOutlineCloseCircle /></div>
          <div><p>4- </p><AiOutlineCloseCircle /></div>
          <div><p>5- </p><AiOutlineCloseCircle /></div>
          <div><p>6- </p><AiOutlineCloseCircle /></div>
        </div>
        <div className="results2">
          <div><p>7- </p><AiOutlineCheckCircle /></div>
          <div><p>8- </p><AiOutlineCheckCircle /></div>
          <div><p>9- </p><AiOutlineCheckCircle /></div>
          <div><p>10- </p><AiOutlineCloseCircle /></div>
          <div><p>11- </p><AiOutlineCloseCircle /></div>
          <div><p>12- </p><AiOutlineCloseCircle /></div>
          <div><p>13- </p><AiOutlineCloseCircle /></div>
        </div>
        <Link className="link" to="/References">
          <div className="proximo"><p>PRÓXIMA</p></div>
        </Link>
      </div>

    </Container>
  );
}
