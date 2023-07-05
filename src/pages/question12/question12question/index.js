import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Question from "../../../components/question";


export default function Question12() {

  return (

      <Container className="container">
        <div className="app-question">
          <div className="navbar">
            <p>QUIZ Meio ambiente e cotidiano</p>
          </div>
          <p className="question-number">Questão 12/13</p>
          <p className="questionquestion12">O que é reciclagem energética?</p>
          <div className="anwser">
            <Link className="link1" to="/Question12 ">
              <div className="div1question12"><p>Tecnologia que utiliza processados para serem reutilizados como matéria-prima ou como insumo básico para a produção de novos produtos plásticos</p></div>
            </Link>
            <Link className="link1" to="/Question12  ">
              <div className="div2question12"><p>Tecnologia que faz a reciclagem de plásticos por meio de sua transformação em energia térmica e elétrica</p></div>
            </Link>
            <Link className="link1" to="/Question12 ">
              <div className="div3question12"><p>Tecnologia que faz a reciclagem de diversos materiais por meio de sua transformação em energia térmica e elétrica</p></div>
            </Link>
          </div>
        </div>
      </Container>
    )
  }

