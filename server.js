//const express = require("express")
//const server = express()
//server.use(express.static("client"))

const express = require("express")
const server = express()
const fs = require("fs")
server.use(express.static("client"))
server.use(express.urlencoded())
server.post("/data", (req, res) => {
    console.log(req.body);
    fs.writeFileSync("info.json", JSON.stringify(req.body))
    res.send("gracias")
})
server.get("/read", (req, res) => {
    const file = JSON.stringify(fs.readFileSync("info.json", { encoding: "utf-8" }))
    res.send(file)
})
server.post('/login', (req, res) => {
    let data = JSON.parse(fs.readFileSync('info.json', 'utf-8'))
    console.log(req.body, 'från login form')
    console.log(data, 'från fill')
    if (data.password == req.body.password) {
        //res. redirect('http://localhost:3000/home.html')
        res.sendFile(__dirname + '/public/home.html')
    } else {
        res.send('Nope')
    }


})

server.listen(3000)