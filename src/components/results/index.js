import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import App from '../../App';


class Results extends React.Component {

  render() {

    // let data = [{ anwser1: this.props.anwser1 }, { anwser2: this.props.anwser2 },
    //   { anwser3: this.props.anwser3 }, { anwser4: this.props.anwser4 }, { anwser5: this.props.anwser5 },
    //   { anwser6: this.props.anwser6 }, { anwser7: this.props.anwser7 }, { anwser8: this.props.anwser8 },
    //   { anwser9: this.props.anwser9 }, { anwser10: this.props.anwser10 }, { anwser11: this.props.anwser11 },
    //   { anwser12: this.props.anwser12 }, { anwser13: this.props.anwser13 }];

    let anwser1 = this.props.anwser1;
    let anwser2 = this.props.anwser2;
    let anwser3 = this.props.anwser3;
    let anwser4 = this.props.anwser4;
    let anwser5 = this.props.anwser5;
    let anwser6 = this.props.anwser6;
    let anwser7 = this.props.anwser7;
    let anwser8 = this.props.anwser8;
    let anwser9 = this.props.anwser9;
    let anwser10 = this.props.anwser10;
    let anwser11 = this.props.anwser11;
    let anwser12 = this.props.anwser12;
    let anwser13 = this.props.anwser13;


    let anwsers = [];

    function arrayResults() {
      if (anwser1 != undefined || anwser1 != null) {
      localStorage.setItem("question01", JSON.stringify(anwser1));
      }
      if (anwser2 != undefined || anwser2 != null) {
        localStorage.setItem("question02", JSON.stringify(anwser2));
      }
      if (anwser3 != undefined || anwser3 != null) {
       localStorage.setItem("question03", JSON.stringify(anwser3));
      }
      if (anwser4 != undefined || anwser4 != null) {
       localStorage.setItem("question04", JSON.stringify(anwser4));
      }
      if (anwser5 != undefined || anwser5 != null) {
       localStorage.setItem("question05", JSON.stringify(anwser5));
      }
      if (anwser6 != undefined || anwser6 != null) {
        localStorage.setItem("question06", JSON.stringify(anwser6));
      }
      if (anwser7 != undefined || anwser7 != null) {
        localStorage.setItem("question07", JSON.stringify(anwser7));
      }
      if (anwser8 != undefined || anwser8 != null) {
        localStorage.setItem("question08", JSON.stringify(anwser8));
      }
      if (anwser9 != undefined || anwser9 != null) {
        localStorage.setItem("question09", JSON.stringify(anwser9));
      }
      if (anwser10 != undefined || anwser10 != null) {
        localStorage.setItem("question10", JSON.stringify(anwser10));
      }
      if (anwser11 != undefined || anwser11 != null) {
        localStorage.setItem("question11", JSON.stringify(anwser11));
      }
      if (anwser12 != undefined || anwser12 != null) {
        localStorage.setItem("question12", JSON.stringify(anwser12));
      }
      if (anwser13 != undefined || anwser13 != null) {
        localStorage.setItem("question13", JSON.stringify(anwser13));
      }

      anwsers[0] = localStorage.getItem("question01");
      anwsers[1] = localStorage.getItem("question02");
      anwsers[2] = localStorage.getItem("question03");
      anwsers[3] = localStorage.getItem("question04");
      anwsers[4] = localStorage.getItem("question05");
      anwsers[5] = localStorage.getItem("question06");
      anwsers[6] = localStorage.getItem("question07");
      anwsers[7] = localStorage.getItem("question08");
      anwsers[8] = localStorage.getItem("question09");
      anwsers[9] = localStorage.getItem("question10");
      anwsers[10] = localStorage.getItem("question11");
      anwsers[11] = localStorage.getItem("question12");
      anwsers[12] = localStorage.getItem("question13");
      console.log("Respostas: 1- correto   0- incorreto");
      console.log(anwsers);
    }


    return ( 
      <>      
        {arrayResults()}
      </>
    )
  }

}

export default Results;

