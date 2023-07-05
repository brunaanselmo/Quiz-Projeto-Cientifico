/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbMoodSad2 } from "react-icons/tb";
import Results from "../../../components/results";
import "./styles.css";


export default function Question01Error() {

  return (
    <>
    <Results anwser1="0"/>
    <Container className="container">
    <div className="app-explicacao">
      <div className="navbar">
        <p>QUIZ Meio ambiente e cotidiano</p>
      </div>
    
      <div className="errado">
          <p>ERRADO!</p>
      </div>
       <AiOutlineCloseCircle style = {{fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "12%"}}/>
       <TbMoodSad2 style = {{fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "65%"}}/>
          <div className="explicacao">
            <p className="explicacao-titulo">Explicação:</p>
            <p className="explicacao-texto">Desmatamento. O desmatamento é uma prática muito comum para a
             realização da agropecuária. A retirada da cobertura vegetal provoca a redução da biodiversidade, extinção de espécies animais e vegetais, desertificação, erosão, redução dos nutrientes 
            do solo, contribui para o aquecimento global, entre outros danos.
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
