import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./styles.css";


export default function Question011() {
    return (
      <Container className="container">
        <div className="app-question">
          <div className="navbar">
            <p>QUIZ Meio ambiente e cotidiano</p>
          </div>
          <p className="question-number">Questão 11/13</p>
          <p className="questionquestion11">O que é veganismo?</p>
          <div className="anwser">
            <Link className="link1" to="/Question11  ">
              <div className="div1question11"><p>É uma filosofia e um estilo de vida que busca excluir, na medida do possível e praticável, todas as formas de exploração de animais para alimentação, vestuário ou qualquer outro propósito</p></div>
            </Link>
            <Link className="link1" to="/Question11 ">
              <div className="div2question11"><p>Uma dieta baseada totalmente em alimentos que não contenham nenhum ingrediente de origem animal</p></div>
            </Link>
            <Link className="link1" to="/Question11 ">
              <div className="div3question11"><p>É uma filosofia e um estilo de vida de vida que busca excluir todas as formas de exploração de animais para alimentação, vestuário ou qualquer outro propósito</p></div>
            </Link>
          </div>
        </div>
      </Container>
    )
  }
