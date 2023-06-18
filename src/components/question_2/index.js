import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./styles.css";


class Question_02 extends React.Component {
  render() {
    return (
      <Container className="container">
        <div className="app-question">
          <div className="navbar">
            <p>QUIZ Meio ambiente e cotidiano</p>
          </div>
          <p className="question-number">Questão {this.props.number}/13</p>
          <p className="question">{this.props.question}</p>
          <div className="anwser">
            <Link className="link1" to={this.props.link01to}>
              <div className="div1-question02"><p>{this.props.question01}</p></div>
            </Link>
            <Link className="link1" to={this.props.link02to}>
              <div className="div2-question02"><p>{this.props.question02}</p></div>
            </Link>
          </div>
        </div>
      </Container>
    )
  }
}

export default Question_02;
