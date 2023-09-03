import React from "react";
import confetti from "../image/confetti.svg"
function Discord(){
    return<>
        <div className="Discord-Header">
            <img className="discord-first-child" src={confetti}/>
            <p>Inflowmate is now on instagram! Be a part of the conversational AI revolution – <a href="https://www.instagram.com/inflowmateofficial/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">Follow our community!</a></p>
            <img classNames="reversed-confetti" src={confetti}/>
        </div>
    </>
}
export default Discord;