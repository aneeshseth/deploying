const express = require('express')
const app = express()


app.get("/", (req,res) => {
    res.send("deployed YAYy!")
})


app.listen(4004, () => {
    console.log("server running")
})