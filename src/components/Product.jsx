import React from "react";
import obj from "./details-product";
import Card from "./card";
import cardDetails from "./card-details";
import Integration from "./integration-logo";

function SetUpProduct(props){
    return(
    <div>
    
       <div className="parent-product">
        <div className="column1">
          <div className="Flex-container">
            <div>
                <img src={props.icon} className="Flex-item iconProduct" alt="iconImages"/>
            </div>
            {console.log(props.boolean2)}
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
            { props.boolean? <div className="Flex-container"><img src={props.img} className="Image productImage" /></div>: <Integration/>} 
          
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
            boolean = {details.boolean}
            booleanPratham = {details.booleanPratham}
    />)
}
function mappingCard(detail){
    return(
    <Card 
      key = {detail.id}
      icons = {detail.icon}
      content = {detail.content}
      description = {detail.description}
    />
    )
}
function Product(){
    return(
  
        <div>
          
           <div className="letsBuildTypo" >
              <div className="LetsBuild">Let's build <span className="Next-gen">Next-Gen Chatbots <br/></span> that <br/>speak for themselves</div>
           </div>
           <div className="content">Powered by cutting-edge LLMs, leveraging human-like chatbots has never been this accessible.</div>
           <div>{obj.map(mapping)}</div>
            <div className="contact"> Customer messaging that <span className="looks-like">looks like you, </span><br/>powered by us</div>
            <div className="grid-card">{cardDetails.map(mappingCard)}</div>
         
        </div>

    )
}
export default Product;