import react from "react";
import Product from "./Product";
import ContactSales from "./contactsales"
import Registration from "./registrationPage";
import Component1 from "./component1";
import { BrowserRouter as Router, Link, Route,Routes, redirect} from 'react-router-dom';
import { Element } from 'react-scroll';
import Aos from "aos";
import { useEffect} from "react";
import "aos/dist/aos.css";
import NavbarSmallScreen from "./navbarsmall";
import NavbarLarge from "./navbarlarge";

import { useLocation } from 'react-router-dom'

// function HeaderView() {
//   const location = useLocation();
//   console.log(location.pathname);
//   return <span>Path : {location.pathname}</span>
// }
// HeaderView()




function App(){
    
    const divList = document.querySelectorAll("div");
    for(let i =0;i<divList.length;i++){
        divList[i].setAttribute("data-aos", "fade-in")
    }
      
    useEffect(() => {
      Aos.init({
        offset:200,
        duration:100
      });
      Aos.refresh();
     }, []);
    return(
      <div>
       <Router>
       
         <div>
            {window.innerWidth<=700?<NavbarSmallScreen/>:<NavbarLarge/>}  
             <Element name="product">
               <Component1/>
             </Element>
             <Element name="feature">
               <Product/>
             </Element>
             <Element name="benefits">
              <ContactSales/>
             </Element>
         </div>
        </Router> 
      </div>
    )
    
  

}

export default App;