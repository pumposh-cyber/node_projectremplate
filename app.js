//jshinit esversion:6
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
//serve static content for website

//enable statis content from public folder
app.use(express.static("public"))

// for parsing application/xwww-
//form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }))

app.get('/',function (req, res) {
    res.send("Server is working")
})


//listner function with substitute port from envirnoment variables
app.listen(process.env.PORT || 3050,function () {
    console.log("Server started at port http://localhost:3050 or "+process.env.PORT)
})
