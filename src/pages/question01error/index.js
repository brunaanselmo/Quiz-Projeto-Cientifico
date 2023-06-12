/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { BsHouseDoorFill } from "react-icons/bs";


import "./styles.css";


export default function Question01Error() {

  return (
    <Container className="container">
      <div className="app-question">
        <div className="navbar">
          <p>QUIZ Meio ambiente e cotidiano</p>
        </div>
        <p className="question-number">Questão 1/15</p>
        <p className="question">ERRADO</p>
        <div className="anwser">
        <div><p>Processo de urbanização</p></div>
        <div><p>Projetos de extração de madeira</p></div>
        <div><p>Agropecuária</p></div>
                  <Link className="link" to="/GameInit">
      
                  </Link>
                </div>
      </div>
    </Container>
              );
}
