import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "../../../components/error";


export default function Question03Error() {

    return (
        <Error explicacao = "Pesca industrial. Devido à pesca industrial, muitas espécies estão sendo ameaçadas de extinção. Em contrapartida, temos a superpopulação de outras, o que reflete um grande desequilíbrio ambiental de difícil recuperação, afetando todo o ecossistema marinho."
        linkto = "/Question04"/>
    );
  }