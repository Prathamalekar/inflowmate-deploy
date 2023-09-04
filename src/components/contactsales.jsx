import React from "react";
import SalesCard from "./ContactSalesCart";
import Dots from "../image/Dots.svg";
import object from "./sales-details";
import IMAGEWeb from "../image/IMAGEWeb.png";
import Footer from "./Footer";
// import {useHistory} from "react-router-dom"
import Registration from "./registrationPage";

const handelClick = ()=>{
  const mail = "contactinflowmate@gmail.com"
  const mailUrl = `mailto:${mail}`
  window.location.href = mailUrl
}

function mappingSalesComp(detail){
    return(
        <SalesCard 
          key = {detail.id}
          icon= {detail.icon}
          heading1 = {detail.heading1}
          heading2 ={detail.heading2}
          content = {detail.content}
          img= {detail.img}
        />
    )

}
    
  function ContactSales(){


  
    return (
      <>
        <div style={{background:"#1d1d1f"}}>
            <div className="contact" style={{color:"#FFF", paddingTop:"10vh"}}>
               More leads <span className="Next-gen"> 24/7. </span>
            </div>
               <div className="content" style={{color:"#FFF"}}>
                  Bots work for you all day, every day—starting conversations, 
                  <br/>asking questions, and delivering qualified leads when they're live on your site.  
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                   <img src={IMAGEWeb} style={{width:"95%",padding: "2.5%",alignItems:"center"}}/>
                </div>
                
                <div className="contact" style={{color:"#FFF" }}>
                    Conversations <span className="Next-gen">Without Boundaries</span>
                </div>
                <div className="content" style={{color:"#FFF"}}>
                   Scale across any channel, in any language.
                </div>
                <div className="mappingSalesComponent">
                     {object.map(mappingSalesComp)}
                  </div>  

             
                </div>
                


         
         </>

    )
  }

export default ContactSales;