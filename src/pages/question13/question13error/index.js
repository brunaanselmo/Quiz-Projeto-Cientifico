import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question13Error() {

    return (
        <>
        <Results anwser13="0"/>
        <Error explicacao = "De acordo com a ONU, entre 25 e 30%, ou seja, dos alimentos produzidos anualmente para consumo humano — cerca de 1,3 bilhão de toneladas — são perdidos ou desperdiçados a cada ano. Um número que aumentou 40% desde 1970 e representa 200 calorias por dia por indivíduo."
        linkto = "/Results"/>
        </>
    );
  }