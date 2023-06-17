/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { BsHouseDoorFill } from "react-icons/bs";


import "./styles.css";


export default function Question01() {

  return (
    <Container className="container">
      <div className="app-question">
        <div className="navbar">
          <p>QUIZ Meio ambiente e cotidiano</p>
        </div>
        <p className="question-number">Questão 1/15</p>
        <p className="question">Qual a principal causa do desmatamento mundial?</p>
        <div className="anwser">
     
                  <Link className="link1" to="/Question01 ">
                  <div className="div1"><p>Processo de urbanização</p></div>
                  </Link>
                  <Link className="link1" to="/Question01 ">
                  <div className="div2"><p>Projetos de extração de madeira</p></div>
                  </Link>
                  <Link className="link1" to="/Question01  ">
                  <div className="div3"><p>Agropecuária</p></div>
                  </Link>

                </div>
      </div>
    </Container>
              );
}
