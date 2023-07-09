/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./styles.css";


export default function GameInit() {

let emailUser = "";

const rota = () => {
  if (email){
  let route = "/Question01";
  return route;
  }
}

const [email, setEmail] = useState('');

const handleChange = (event) => {
  setEmail(event.target.value);
  console.log(email);
};

const handleClick = (event) => {
  if (email){
  localStorage.setItem("emailkey", JSON.stringify(email));
  console.log(email);
  emailUser = localStorage.getItem("emailkey");
  console.log(emailUser);
  rota();
  } else {
  alert("Por favor, insira um email válido");
  }
};



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
            <input id="email" type="email" required value={email} onChange={handleChange}/>
            <label htmlFor="email">E-mail</label>
          </div>
        </div>
        <div className="next-question">
          <Link className="link" to={rota()}>
            <button className="botao-start" onClick={handleClick}>Começar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
