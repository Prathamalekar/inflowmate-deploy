import react from "react";
import img1 from "../image/image-1.svg";
import img2 from "../image/featuresInflow.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Registration from "./registrationPage";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import { useHistory } from "react-router-dom";
// import Registration from "./registrationPage";
const handelClick = ()=>{
  const mail = "contactinflowmate@gmail.com"
  const mailUrl = `mailto:${mail}`
  window.location.href = mailUrl
}

function Component1(){


    return(
     <div>
       
       <div className="HeadingInflow">
         <div className="heading1">Chatbots That,</div>
         <div className="ScalesFast">SCALE FAST</div>
         <div className="comp1Content">OpenAI powered chatbot building agency which amplifies results, not heartache.</div>
         
       </div>
       <div className="Talk-to-us" >
      
       
            <button className="buttonProp Bot-up common" onClick={handelClick}>Talk To Us</button>      
            <p>It’s Free :<span>&#41;</span></p>

       </div>
       
         <div className="container">
           <img src={img1} alt="background" className="background"/>
           <div className="logo"><img src={img2} alt="image"/> </div>
         </div>
         
        </div> 
     
       
     
    )

}
export default Component1;
// {position:"absolute", width: "826px" ,height: "264px",top: "100px",left: "343px"}