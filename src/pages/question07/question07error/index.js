import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question07Error() {

    return (
        <>
        <Results anwser7="0"/>
        <Error explicacao = "Testes em animais e os resultados nos humanos concordam somente de 5 a 25% das vezes. 3- 95% das drogas homologadas por testes em animais são imediatamente descartadas como desnecessárias ou perigosas ao humanos."
        linkto = "/Question08"/>
        </>
    );
  }