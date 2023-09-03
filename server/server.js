const express = require("express");
const bodyParser = require("body-parser")
const app =  express();
app.use(bodyparser.urlencoded({extended:true}));
app.post("./form/submit",()=>{
    const {name,lastname,bussinessEmail,companyEmail,useCase}=req.body
})
app.listen("5000", ()=>{console.log("listening to port 5000")})