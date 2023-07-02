/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./styles.css";


export default function GameInit() {

const rota = () => {
  let route = "/Question01";
  return route;
}

  return (
    <Container className="container">
      <div className="app">
        <div className="texto-input">
          <p className="text">A seguir você responderá um quiz com <br />perguntas variadas sobre meio
            <br />ambiente, alimentação e testes em <br />animais.
            <br /><br /><br />
            O objetivo do jogo é apenas avaliar os <br />seus conhecimentos sobre os tópicos
            <br />citados. </p>
          <div className="label-float">
            <input id="email" type="email" required />
            <label for="email">E-mail</label>
          </div>
        </div>
        <div className="next-question">
          <Link className="link" to={rota()}>
            <button className="botao-start">Começar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
