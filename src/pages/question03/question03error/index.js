import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question03Error() {

    return (
        <>
        <Results anwser3="0"/>
        <Error explicacao = "Pesca industrial. Devido à pesca industrial, muitas espécies estão sendo ameaçadas de extinção. Em contrapartida, temos a superpopulação de outras, o que reflete um grande desequilíbrio ambiental de difícil recuperação, afetando todo o ecossistema marinho."
        linkto = "/Question04"/>
        </>
    );
  }