import { ConnectionStates } from "mongoose";
import React, {useState} from "react";

function Form(){
    const [state,setstate]=useState({
        first:"",
        last:"",
        company:"",
        bussinessEmail:"",
        useCase:""
    })
    const handleClick = (event)=>{
        const data = {...state};
        data[event.target.id] = event.target.value;
        console.log(event.target.id)
        setstate(data);
        

    }
    const handleSubmit=async (event)=>{      
        
        event.preventDefault()
        try{
            const response = await fetch("https://inflowmate-web.onrender.com/login/submit", {
            method:"POST",
            mode: 'no-cors',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(state),
            
        }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
         
            
        }catch(err){
            console.log(err)

        }
        
         
        
        
       
    
    }
    return(
        <div className="form-container">
            <p> Let’s begin!</p>
             <form method="POST" id="form" onSubmit={handleSubmit}>
                <label htmlFor="name" >First *</label>
                <input onChange={(e)=>{handleClick(e)}} value={setstate.first} type="text" id="first" required placeholder="First Name"/>
                <label htmlFor="lastname">Last *</label>
                <input onChange={(e)=>{handleClick(e)}} value={setstate.last} type="text" id="last" required placeholder="Last Name"/>
                <label htmlFor="company">Company name *</label>
                <input onChange={(e)=>{handleClick(e)}}  value={setstate.company} type="text" id="company" required/>
                <label htmlFor="email">Business Email *</label>
                <input onChange={(e)=>{handleClick(e)}} value={setstate.bussinessEmail} type="email" id="bussinessEmail" required placeholder="Email"/>
                <label htmlFor="usecase">Use Case Description *</label>    
                <textarea onChange={(e)=>{handleClick(e)}} value={setstate.useCase} id="useCase" rows="4" required></textarea>
                <p>Inflowmate is committed to protecting your privacy. We will store & process your personal information to share the content you requested, and to share updates & news about the company.</p>
                <button id = "submit" type="submit" >Submit</button>
              </form> 
            
        </div>

    )
}
export default Form;