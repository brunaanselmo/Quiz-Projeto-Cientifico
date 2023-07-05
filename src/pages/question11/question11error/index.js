import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question11Error() {

    return (
        <>
        <Results anwser11="0"/>
        <Error explicacao = "É uma filosofia e um estilo de vida que busca excluir, na medida do possível e praticável, todas as formas de exploração de animais para alimentação, vestuário ou qualquer outro propósito."
        linkto = "/Question12"/>
        </>
    );
  }