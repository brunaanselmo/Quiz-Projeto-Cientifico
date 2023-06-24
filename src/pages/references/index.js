import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Img from "../../components/img";
import { FiFileText } from "react-icons/fi"
import "./styles.css";
export default function References() {

  return (
    <Container className="container">
      <div className="app-references">
        <div className="end-img">
          <div className="text-fontes">
          <p className="end">Obrigada!</p>
          <p className="references">Referências:</p>
          <FiFileText style={{width:"80px", height:"80px", color: "rgb(89, 221, 89)", marginLeft: "13%", cursor:"pointer"}}/>
          </div>
          <div className="img">
          <Img style={{ widht: "160px", height: "160px", marginLeft:"20%"}}></Img>
          </div>
        </div>

      </div>
    </Container>
  );
}