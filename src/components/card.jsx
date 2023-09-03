import React from "react";
function Card(props){
    return(
    <div>
      <div className="flexbox">
        <div >
          <img src={props.icons} className="card-image"/>
        </div>
           <p className="card-content">{props.content} </p>
           <p className="card-description">{props.description}</p>
      </div>
    </div>

    )

}

export default Card;

