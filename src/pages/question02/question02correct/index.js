import React, { useState } from "react";
import { Link } from "react-router-dom";
import Correct from "../../../components/correct";
import Results from "../../../components/results";


export default function Question02Correct() {

    return (
        <>
        <Results anwser2="1"/>
        <Correct explicacao = "Hoje, o plástico representa 85% dos resíduos que chegam aos oceanos, sendo que a projeção, se nada for feito, é de o volume triplicar até 2040, atingindo a faixa de 23 a 37 milhões de toneladas. Isso significa que, a cada metro de costa marítima do planeta, haverá cerca de 50 quilos de plástico."
        linkto = "/Question03"/>
        </>
    );
  }