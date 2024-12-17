const express = require("express")

const app= express()

app.use("/get",(req, res) => {
    res.send('hello world')
})

app.listen(880, (req, res) => {
    console.log('server is listen at PORT:880');
    
})