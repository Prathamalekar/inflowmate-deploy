import React from "react";
import inflowmate from "../image/inflowmate.png";
import { Link as ScrollLink} from 'react-scroll';
import { useState,useEffect,useRef } from "react";
function NavbarSmallScreen(){
  const [showAnchors, setShowAnchors] = useState(false);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setShowAnchors(true);
  };
  
  const renderAnchors = () => {
    if (!showAnchors) {
      return null;
    }
   

    // Render four anchor tags
    return (
      
      <div style={{top: "0",zIndex: "1000",position:"fixed",width:"100%"}} >
        <nav className="anchor-container" style={{background:"white"}}>
         <li><ScrollLink to="product" smooth={true} offset={-10} duration={1000}>Product</ScrollLink></li>
         <li><ScrollLink to="feature" smooth={true} offset={-10} duration={1000}>Feature</ScrollLink></li>
         <li><ScrollLink to="benefits"  smooth={true} offset={-10} duration={1000}>Benefits</ScrollLink></li>
         <li><ScrollLink to="contactsales">Contact Sales</ScrollLink></li>
       </nav>

      </div>
    );
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowAnchors(false);
      }
    };  document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    return <>
    <div className="navbarSmallScreen">
      <div class="container-navbarsmall">
        <img class="image-navbarsmall" src={inflowmate} alt="Your Image"/>
        <button ref={buttonRef} onClick={handleButtonClick}>☰</button>
        
      </div>
      <div style={{}}>
         {renderAnchors()}
      </div>
    </div>
    </>
}

export default NavbarSmallScreen;
