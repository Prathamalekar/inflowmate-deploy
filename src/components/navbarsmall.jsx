import React from "react";
import inflowmate from "../image/inflowmate.png";
import { Link as ScrollLink} from 'react-scroll';
import { useState,useEffect,useRef } from "react";
function NavbarSmallScreen(){
  let count=0;
  const content = document.getElementById("navbar1")
  
  const [showAnchors, setShowAnchors] = useState(false);
  const buttonRef = useRef(null);
  




  const handleButtonClick = (event) => {
    
    
    count++;
    if(count%2==0){
      setShowAnchors(false)
    }else{
      setShowAnchors(true)
    }
    
  };
  const handelNavbar = ()=>{
    if (content.style.display === "none"|| content.style.display === "") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    const navbar = document.getElementById("navbar");
    const content = document.getElementsByClassName("heading1");

    navbar.addEventListener("click", function () {
        // Toggle the visibility of the content
        if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
    });
});


  
  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      // Clicked outside the button, so close the div
      setShowAnchors(false);
    }
  };
  
  const renderAnchors = () => {
    if (!showAnchors) {
      return null;
    }
   

    // Render four anchor tags
    return (
      <>
      <div   style={{top: "0",zIndex: "1000",position:"fixed",width:"100%"}} >
        <nav className="anchor-container" id="navbar" style={{background:"white"}}>
          <li><ScrollLink to="product"  data-toggle="collapse" smooth={true} offset={-80} duration={1000}>Product</ScrollLink></li>
          <li><ScrollLink to="features" data-toggle="collapse" smooth={true} offset={-80} duration={1000}>Features</ScrollLink></li>
          <li><ScrollLink to="benefits" data-toggle="collapse" smooth={true} offset={-80} duration={1000}>Benefits</ScrollLink></li>
          <li><ScrollLink to="contactsales" data-toggle="collapse" smooth={true} offset={-10} duration={1000}>Contact Sales</ScrollLink></li>
       </nav>

      </div>
      </>
    );
  };
  

    return <>
     <div className="navbarSmallScreen" onClick={handleClickOutside}>
      <div class="container-navbarsmall">
        <img class="image-navbarsmall" src={inflowmate} alt="Your Image"/>
        <button ref={buttonRef} onClick={handleButtonClick}>☰</button>
        
      </div>
      <div >
         {renderAnchors()}
      </div>
    </div>
    
    </>
}
}

export default NavbarSmallScreen;
