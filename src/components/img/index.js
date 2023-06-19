import React from "react";
import Container from "@material-ui/core/Container";
import "./styles.css";
import Capa from "../../assets/capa.png"

class Img extends React.Component {
  render() {
    return (
   <img src={Capa} alt="logo-animais"></img>
  )
}
}

export default Img;
