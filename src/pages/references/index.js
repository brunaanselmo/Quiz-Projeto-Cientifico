import { Link } from "react-router-dom";
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Img from "../../components/img";
import { FiFileText } from "react-icons/fi"
import "./styles.css";
import api from "../../api";
import axios from 'axios';

export default function References() {

const [feedback, setFeedback] = useState('');
let feedbackUser = "";
let email = "";
let anwser1 = "";
let anwser2 = "";
let anwser3 = "";
let anwser4 = "";
let anwser5 = "";
let anwser6 = "";
let anwser7 = "";
let anwser8 = "";
let anwser9 = "";
let anwser10 = "";
let anwser11 = "";
let anwser12 = "";
let anwser13 = "";
let data;


const handleChange = (event) => {
  setFeedback(event.target.value);
  console.log(feedback);
};

function handleClick(){
  window.location.assign("https://drive.google.com/file/d/1HrZ-4ZQfF7ZKPKMrB7rCOqdFCXgEhwSe/view?usp=sharing");
}



const handleClick2 = (event) => {
  if (feedback){
  localStorage.setItem("feedbackkey", JSON.stringify(feedback));
  console.log(feedback);
  feedbackUser = localStorage.getItem("feedbackkey");
  console.log(feedbackUser);
  email = localStorage.getItem("emailkey");
  anwser1 = localStorage.getItem("question01");
  anwser2 = localStorage.getItem("question02");
  anwser3 = localStorage.getItem("question03");
  anwser4 = localStorage.getItem("question04");
  anwser5 = localStorage.getItem("question05");
  anwser6 = localStorage.getItem("question06");
  anwser7 = localStorage.getItem("question07");
  anwser8 = localStorage.getItem("question08");
  anwser9 = localStorage.getItem("question09");
  anwser10 = localStorage.getItem("question10");
  anwser11 = localStorage.getItem("question11");
  anwser12 = localStorage.getItem("question12");
  anwser13 = localStorage.getItem("question13");
  alert("Comentário enviado. Obrigada!");
  console.log("--------------------------------------");
  console.log(email);
  console.log(anwser1);
  console.log(anwser2);
  console.log(anwser3);
  console.log(anwser4);
  console.log(anwser5);
  console.log(anwser6);
  console.log(anwser7);
  console.log(anwser8);
  console.log(anwser9);
  console.log(anwser10);
  console.log(anwser11);
  console.log(anwser12);
  console.log(anwser13);
  console.log(feedbackUser);
  console.log("--------------------------------------");
  const res = api
  .post("anwsers", {
      anwser1: anwser1,
      anwser2: anwser2,
      anwser3: anwser3,
      anwser4: anwser4,
      anwser5: anwser5,
      anwser6: anwser6,
      anwser7: anwser7,
      anwser8: anwser8,
      anwser9: anwser9,
      anwser10: anwser10,
      anwser11: anwser11,
      anwser12: anwser12,
      anwser13: anwser13,
      email: email,
      feedback: feedbackUser,       
  })
  .then((response) => {
    console.log(response);
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
    console.log(res);
    })
  }
};

  return (
    <Container className="container">
      <div className="app-references">
        <div className="end-img">
          <div className="text-fontes">
          <p className="end">Obrigada!</p>
          <p className="references">Referências:</p>
          <FiFileText className="icone" style={{width:"80px", height:"80px", color: "rgb(89, 221, 89)", marginLeft: "17%", marginTop:"3%", cursor:"pointer"}} onClick={handleClick}/>
          <div className="label-float-references">
            <input id="feedback" type="text" value={feedback} onChange={handleChange} />
            <label htmlFor="feedback">Comentários*</label>
          </div>
          <button className="botao-references" onClick={handleClick2}>Enviar</button>

          </div>
          <div className="img">
          <Img style={{ widht: "160px", height: "160px", marginLeft:"20%"}}></Img>
          </div>
        </div>

      </div>
    </Container>
  );
}
