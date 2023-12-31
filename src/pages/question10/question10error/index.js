import React from "react";
import Error from "../../../components/error";
import Results from "../../../components/results";

export default function Question10Error() {

    return (
        <>
        <Results anwser10="0"/>
        <Error explicacao = "Aplicação indevida e indiscriminada de defensivos agrícolas. Compostos químicos como inseticidas, fungicidas, herbicidas e acaricidas contaminam as abelhas que saem da colônia em busca de pólen e acabam atingindo toda a colmeia."
        linkto = "/Question11"/>
        </>
    );
  }