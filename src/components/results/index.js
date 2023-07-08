import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import App from '../../App';


class Results extends React.Component {

  // constructor(props) {
  //   super(props);
  // }


  render() {
    let data = [{ anwser1: this.props.anwser1 }, { anwser2: this.props.anwser2 }, 
      { anwser3:this.props.anwser3  },{ anwser4: this.props.anwser4  }, { anwser5: this.props.anwser5 }, 
      { anwser6: this.props.anwser6 },{ anwser7: this.props.anwser7 }, { anwser8: this.props.anwser8 }, 
      { anwser9: this.props.anwser9 },{ anwser10: this.props.anwser10 }, {anwser11: this.props.anwser11 }, 
      { anwser12: this.props.anwser12 }, { anwser13: this.props.anwser13 } ];
     
             
    function arrayResults() {       
      
       localStorage.setItem("questionkey",JSON.stringify(data));
       let results = localStorage.getItem("questionkey");                
       console.log(results);  
    }
    
    return (
      <>
      {arrayResults()}
      </>
    )
  }

}

export default Results;

// React.DOM.render(
//   <App/>,
//   document.getElementById("root")
// )


        




