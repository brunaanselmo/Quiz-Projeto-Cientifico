import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question06Error() {

    return (
        <>
        <Results anwser6="0"/>
        <Error explicacao = "Falso. Retirar indivíduos de espécies ameaçadas de seu habitat natural sob o pretexto de protegê-los também prejudica os animais que permanecem na natureza pois a diversidade genética diminui, comprometendo ainda mais a espécie. "
        linkto = "/Question07"/>
        </>
    );
  }