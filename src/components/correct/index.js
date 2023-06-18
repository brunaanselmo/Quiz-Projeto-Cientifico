import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { TbMoodHappy } from "react-icons/tb";
import { GiPartyPopper } from "react-icons/gi";
import "./styles.css";


class Correct extends React.Component {
  render() {
    return (
      <Container className="container">
        <div className="app-explicacao">
          <div className="navbar">
            <p>QUIZ Meio ambiente e cotidiano</p>
          </div>

          <div className="correto">
            <p>CORRETO!</p>
          </div>
          <GiPartyPopper style={{ fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "12%" }} />
          <TbMoodHappy style={{ fontSize: "55px", color: "rgb(89, 221, 89)", marginLeft: "65%" }} />
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

export default Correct;
