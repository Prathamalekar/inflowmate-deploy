import React from "react";
import cardDetails from "./card-details";
import Card from "./card";
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
function Features(){
    return(
        <>
         <div className="contact"> Customer messaging that <span className="looks-like">looks like you, </span><br/>powered by us</div>
        <div className="grid-card">{cardDetails.map(mappingCard)}</div>
     

        </>

    )

}
export default Features