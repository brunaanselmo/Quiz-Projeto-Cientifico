import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Img from "../../components/img";
import { FiFileText } from "react-icons/fi"
import "./styles.css";
export default function References() {

function handleClick(){
  window.location.assign("https://drive.google.com/file/d/1HrZ-4ZQfF7ZKPKMrB7rCOqdFCXgEhwSe/view?usp=sharing");
}

  return (
    <Container className="container">
      <div className="app-references">
        <div className="end-img">
          <div className="text-fontes">
          <p className="end">Obrigada!</p>
          <p className="references">Referências:</p>
          <FiFileText className="icone" style={{width:"80px", height:"80px", color: "rgb(89, 221, 89)", marginLeft: "17%", marginTop:"3%", cursor:"pointer"}} onClick={handleClick}/>
          </div>
          <div className="img">
          <Img style={{ widht: "160px", height: "160px", marginLeft:"20%"}}></Img>
          </div>
        </div>

      </div>
    </Container>
  );
}