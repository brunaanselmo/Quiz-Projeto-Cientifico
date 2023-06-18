import React, { useState } from "react";
import { Link } from "react-router-dom";
import Correct from "../../../components/correct";


export default function Question03Correct() {

    return (
        <Correct explicacao = "Devido à pesca industrial, muitas espécies estão sendo ameaçadas de extinção. Em contrapartida, temos a superpopulação de outras, o que reflete um grande desequilíbrio ambiental de difícil recuperação, afetando todo o ecossistema marinho."
        linkto = "/Question04"/>
    );
  }