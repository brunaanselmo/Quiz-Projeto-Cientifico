import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Question from "../../../components/question";
import Results from "../../../components/results";

export default function Question01() {

 
  
  return (
    <>
    <Results/>
    <Question number="1"
    question = "Qual a principal causa do desmatamento mundial?"
    link01to = "/Question01 "
    question01 = "Processo de urbanização"
    link02to = "/Question01 "
    question02 = "Projetos de extração de madeira"
    link03to = "/Question01  "
    question03 = "Agropecuária"
    />
    </>
  );
}
