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
        <p className="question">A seguir você responderá um quiz com <br/>perguntas variadas sobre meio
          <br/>ambiente, alimentação e testes em <br/>animais.
            <br/><br/><br/>
              O objetivo do jogo é apenas avaliar os <br/>seus conhecimentos sobre os tópicos 
              <br/>citados. </p>
                <div className="next-question">
                  <Link className="link" to="/GameInit">
                    <div className="botao-start"><p>Começar</p></div>
                  </Link>
                </div>
      </div>
    </Container>
              );
}
