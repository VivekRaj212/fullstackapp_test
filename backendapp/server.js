require("dotenv").config();
const express= require("express");
const app= express();
const port= process.env.PORT || 7000




app.get("/",(req,res)=> {


   res.send("<h2>My server has started</h2>")
})



app.listen(port,()=> {


    console.log(`Server is running at http://localhost:${port}`)
})