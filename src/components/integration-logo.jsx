import React from "react";
import whatsapp from "../image/whatsapp.png"
import microsoft from "../image/microsoft-team 2.svg"
import slack from "../image/slack 2.svg"
import gmail from "../image/gmail 2.svg"
import discord from "../image/discord 2.svg"
import github from "../image/github-6980894 2.svg"
import zapier from "../image/zapier 1.svg"
import skype from "../image/skype 2.svg";
import salesForce from "../image/salesForce1.png"
function Integration(){
    return(
        <div className="flexbox-integration">
          <div class="grid-container-integration">
            <div class="grid-item-integration grid-col1"><img src={whatsapp} alt="Image 1"/></div>
            <div class="grid-item-integration"><img src={skype} alt="Image 2"/></div>
            <div class="grid-item-integration grid-col3"><img src={microsoft} alt="Image 3"/></div>
            <div class="grid-item-integration grid-col1"><img src={slack} alt="Image 4"/></div>
            <div class="grid-item-integration"><img src={gmail} alt="Image 5"/></div>
            <div class="grid-item-integration grid-col3"><img src={discord} alt="Image 6"/></div>
            <div class="grid-item-integration grid-col1"><img src={github} alt="Image 7"/></div>
            <div class="grid-item-integration" style={{width:"100%"}}><img src={salesForce} alt="Image 8"/></div>
            <div class="grid-item-integration grid-col3"><img src={zapier} alt="Image 9"/></div>
          </div>
        </div>
    )
}
export default Integration;