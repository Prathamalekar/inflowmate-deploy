import React from "react";
import inflowmateIcon from "../image/inflowmateIcon.svg";
import Form from "./Form";
import Dots from "../image/Dots.svg";
import Footer from "./Footer";
function Registration(){
    return(
      <>

      
        <div>

          <div className="centered-div">
            <div className="Block-elem">
              <div className="column-registration">
                <div className="Connect">
                  Connect with our Sales <br/>Team Today
                </div>
               <div className="form-info">
                  Ready to know more about Inflowmate?<br/> <br/> Our team will guide you through the entire process of evaluating your project’s cost and workflow. <br/><br/>Complete the form and we will get back to you within 1 business day.
               </div>
            </div>
            <div className="form1">
              <Form/>
            </div>


            </div>
          </div>
          <div className="Scale-container">
               <div className="Scale-better">
                <div className="Scale-column">
                  <div className="Scale-flex">
                    <div className="scalebetter">Scale Better with <span className="inflowmateWord">Inflowmate</span></div>
                  </div>

                </div>
                <div className="Scale-column" >
                    <div className="Scale-flex1">
                         <img src={Dots}/>
                    </div>
                </div>


               </div>
             </div>
             <div>
                <Footer color="black"/>
             </div>
             
        </div>

        </>

  
    )
}
export default Registration;