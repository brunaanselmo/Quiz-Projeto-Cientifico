import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question09Error() {

    return (
        <>
        <Results anwser9="0"/>
        <Error explicacao = "Estudos mostram que a pecuária bovina é responsável pela emissão de pelo menos 50% dos gases-estufa, principalmente do gás carbônico (CO2) e do metano (CH4)."
        linkto = "/Question10"/>
        </>
    );
  }