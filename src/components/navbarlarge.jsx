import React from "react";
import inflowmateIcon from "../image/inflowmate.png";
import { Link as ScrollLink} from 'react-scroll';
import Discord from "./discordconnection";


const styleAnchor = {
    display:"flex",
     alignItems : "center",
     height: "100%",
     flexWrap : "nowwrap",
     cursor:"pointer",
     fontSize: "1.3vw"
     
   }
   
const styleComp1 = {
    width:"100%",
    display : "flex",
    gap :"5.8vw",
    justifyContent: "center",
    background: "#FFF", /* Stick it at the top of the viewport */
    color:"black",
    fontFamily: "inter",
    fontWeight:500,
    fontWeight: 400,
    fontSize: "1.2vw",
    color: "#272728",
    /* Text color of the navbar */
   }
  const handelClick = ()=>{
    const calendly = "https://calendly.com/inflowmateofficial";
    window.location = calendly
  }
  

function NavbarLarge(){

    return<>
     <div style={{top: "0",zIndex: "1000",position:"fixed",width:"100%"}}>
      <Discord/>
      <nav style={styleComp1}>
        <img src={inflowmateIcon} style={{height:"3vw", padding:"0.3rem"}}/>
        <li><ScrollLink to="product" smooth={true} offset={-80} duration={1000} style={styleAnchor}>Product</ScrollLink></li>
        <li><ScrollLink to="features" style={styleAnchor} smooth={true} offset={-80} duration={1000}>Features</ScrollLink></li>
        <li><ScrollLink to="benefits" style={styleAnchor} smooth={true} offset={-80} duration={1000}>Benefits</ScrollLink></li>
        <li><ScrollLink to="contactsales" style={styleAnchor} smooth={true} offset={-10} duration={1000}>Contact Sales</ScrollLink></li>
        

        
        
        <li style={{display:"flex",alignContent:"center",justifyContent:"center"}}><button className="Bot-up common" onClick={handelClick}>Bot-Up</button></li>
      </nav>
     </div>
    </>
    
}
export default NavbarLarge;




