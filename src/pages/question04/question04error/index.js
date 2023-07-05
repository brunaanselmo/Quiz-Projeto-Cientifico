import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question04Error() {

    return (
        <>
        <Results anwser4="0"/>
        <Error explicacao = "Estados Unidos, que possui uma média de 101 kg de carnes por habitante."
        linkto = "/Question05"/>
        </>
    );
  }