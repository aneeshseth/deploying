const express = require('express')
const app = express()


app.get("/", (req,res) => {
    res.send("i have deployed this new index.js!")
})


app.listen(4004, () => {
    console.log("server running")
})