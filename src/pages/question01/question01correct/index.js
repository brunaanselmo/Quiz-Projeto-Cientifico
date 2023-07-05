/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { TbMoodHappy } from "react-icons/tb";
import { GiPartyPopper } from "react-icons/gi";
import Results from "../../../components/results";
import Results_2 from "../../../components/results_2";
import "./styles.css";


export default function Question01Correct() {
 
  return (
    <>
    <Results anwser1="1"/>
    <Results_2></Results_2>
    <Container className="container">
    <div className="app-explicacao">
      <div className="navbar">
        <p>QUIZ Meio ambiente e cotidiano</p>
      </div>
    
      <div className="correto">
          <p>CORRETO!</p>
      </div>
       <GiPartyPopper style = {{fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "12%"}}/>
       <TbMoodHappy style = {{fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "65%"}}/>
          <div className="explicacao">
            <p className="explicacao-titulo">Explicação:</p>
            <p className="explicacao-texto">O desmatamento é uma prática muito comum para a realização da agropecuária. A retirada da cobertura vegetal provoca a redução da biodiversidade, extinção de espécies animais e vegetais, desertificação, erosão,
             redução dos nutrientes do solo, contribui para o aquecimento global, entre outros danos.
            </p>
           </div>
           <Link className="link" to="/Question02">
                <div className="proxima"><p>PRÓXIMA</p></div>
          </Link>
    </div>
  </Container>
  </>
  );
}
