import React from "react";
import Container from "@material-ui/core/Container";
import "./styles.css";

class Screen extends React.Component {
  render() {
    return (
    <Container className="container">
      <div className="app">
      <p className="title"><span className="quiz">Quiz</span> Meio ambiente <br></br> e cotidiano</p>
      </div>
    </Container>
  )
}
}

export default Screen;
