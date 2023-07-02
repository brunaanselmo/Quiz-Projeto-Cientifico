import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

class Results extends React.Component {


  render() {
    const data = [{question:"1", anwser:"x"}, 


    
  ]
    function arrayResults() {
      let i;
      let questions = [];
      for (i = 0; i< 15; i++){

        console.log("questao "+i+ ":"+questions[i]);
    }
  }
    return (
      <>
      </>
    )
  }

}

export default Results;
