import React from "react";
import Correct from "../../../components/correct";
import Results from "../../../components/results";
import Results_2 from "../../../components/results_2";

export default function Question03Correct() {

    return (
        <>
        <Results anwser3="1"/>
        <Results_2/>
        <Correct explicacao = "Devido à pesca industrial, muitas espécies estão sendo ameaçadas de extinção. Em contrapartida, temos a superpopulação de outras, o que reflete um grande desequilíbrio ambiental de difícil recuperação, afetando todo o ecossistema marinho."
        linkto = "/Question04"/>
        </>
    );
  }