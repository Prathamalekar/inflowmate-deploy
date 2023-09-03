import React from "react";
function SalesCard(props){
    return(
        <div>
          <div className="column-sales-cart">
           <div className="salesCardFlex">
                <img src={props.icon} className="sales-cart-icon"/>
                <p className="sales-cart-heading">{props.heading1}</p>
                <p className="sales-cart-heading-2">{props.heading2}</p>
                <p className="sales-cart-content">{props.content}</p>
                <img src={props.img} className="sales-cart-image"></img>
            </div>
          </div>

        </div>
    )
}
export default SalesCard;