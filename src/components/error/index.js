import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbMoodSad2 } from "react-icons/tb";
import "./styles.css";


class Error extends React.Component {
  render() {
    return (

      <Container className="container">
        <div className="app-explicacao">
          <div className="navbar">
            <p>QUIZ Meio ambiente e cotidiano</p>
          </div>

          <div className="errado">
            <p>ERRADO!</p>
          </div>
          <AiOutlineCloseCircle style={{ fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "12%" }} />
          <TbMoodSad2 style={{ fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "65%" }} />
          <div className="explicacao">
            <p className="explicacao-titulo">Explicação:</p>
            <p className="explicacao-texto">jffhidfhifhfhffffffffffffffffffffffffffffffffffffffff
              ffffffffffffffffffffffffff
              fffffffffffffffffffffffffffffffffffffffffffffffffdssdsddssdsdsdasdsssssssfffffff
            </p>
          </div>
          <Link className="link" to="/Question01">
            <div className="proxima"><p>PRÓXIMA</p></div>
          </Link>
        </div>
      </Container>
    )
  }
}

export default Error;
