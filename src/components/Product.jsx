import React from "react";
import obj from "./details-product";
import Card from "./card";
import Features from "./features";



function SetUpProduct(props){
    return(
    <div>
    
       <div className="parent-product">
        <div className="column1">
          <div className="Flex-container">
            <div>
                <img src={props.icon} className="Flex-item iconProduct" alt="iconImages"/>
            </div>
            
             {props.booleanPratham ? <div className="purple-line"></div>: <div ></div>}
            
            </div>    
           
        </div>
        <div className="column2">
          <div className="Flex-container">
            <p className="Flex-items-title">{props.title}</p>
            <p className="Flex-items-cont">{props.content}</p>
            <p className="Flex-items-con">{props.info}</p>
 
          </div>
        </div>
        <div className="column3">
           <img src={props.img} className="Image productImage" /> 
          
       </div>
      </div>
    </div>
    )
}
function mapping(details){
    return(
      <SetUpProduct
            key = {details.id}
            icon ={details.icon}
            title = {details.title}
            content = {details.content}
            info = {details.info}
            img = {details.img}
            booleanPratham = {details.booleanPratham}
    />)
}

function Product(){
    return(
  
        <div>
          
           <div className="letsBuildTypo" >
              <div className="LetsBuild">Let's build <span className="Next-gen">Next-Gen Chatbots <br/></span> that <br/>speak for themselves</div>
           </div>
           <div className="content">Powered by cutting-edge LLMs, leveraging human-like chatbots has never been this accessible.</div>
           <div>{obj.map(mapping)}</div>
            <Features/>
         
        </div>

    )
}
export default Product;