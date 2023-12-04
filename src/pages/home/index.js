import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import Container from "@material-ui/core/Container";
import "./styles.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import Capa from "../../assets/capa.png";
import Screen from "../../components/screen";
import Img from "../../components/img";

export default function Home() {
  return (
<Container className="container">
<div className="app-home">
  <div className="title-img">
  <p className="title"><span className="quiz">Quiz</span> Meio ambiente <br></br> e Veganismo</p>
  <Img style={{widht:"120px", height:"120px"}}></Img>
  </div>
  <div className="menu">
    <div className="next">
      <p>Avançar</p>
      <Link className="link" to="/GameInit">
        <div className="botao">
          <BsFillCaretRightFill style={{ width: '30px', height: '30px', marginLeft: '7px', marginTop: '7px', color: 'white' }} />
        </div>
      </Link>
    </div>
  </div>
</div>
</Container>

  );
}



