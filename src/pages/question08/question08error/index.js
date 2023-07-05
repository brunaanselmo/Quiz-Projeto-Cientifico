import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question08Error() {

    return (
        <>
        <Results anwser8="0"/>
        <Error explicacao = "A média global da pegada hídrica de um quilo de carne bovina é de 15,5 mil litros de água."
        linkto = "/Question09"/>
        </>
    );
  }