/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '';
// import DialogContentText from '';


import "./styles.css";
export default function GameInit() {

function isEmailFilled(){
   console.log("aqui");  
  if (!valor){  
    start = "Question01";
    console.log("questao1");
  } else {
    start = "";
    console.log("vazioo");
  }
}
var [start, valor] = "";

  return (
    <Container className="container">
      <div className="app">
        <div className="texto-input">
        <p className="text">A seguir você responderá um quiz com <br/>perguntas variadas sobre meio
          <br/>ambiente, alimentação e testes em <br/>animais.
            <br/><br/><br/>
              O objetivo do jogo é apenas avaliar os <br/>seus conhecimentos sobre os tópicos 
              <br/>citados. </p>
              <div className="label-float">
              <input id="email" type="email" required value={valor}/>
              <label for="email">E-mail</label>            
              </div>
              </div>
                <div className="next-question">
                  <Link className="link" to="/{{start}}" onClick={isEmailFilled()}>
                    <div className="botao-start"><p>Começar</p></div>
                  </Link>
                </div>
      </div>
    </Container>
              );
}
