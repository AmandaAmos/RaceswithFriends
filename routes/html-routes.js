var path = require("path"); 

module.exports = function (app) {
    app.get("/main", function(req,res) {
        res.sendFile(path.join(__dirname,"../public/views/login.html"))
    })
    app.get("/signup", function(req,res) {
        res.sendFile(path.join(__dirname,"../public/views/signUp.html"))
    })
    app.get("/index", function(req,res) {
        res.sendFile(path.join(__dirname,"../public/views/index.html"))
    })
    app.get("/enterrace", function(req,res) {
        res.sendFile(path.join(__dirname,"../public/views/enterRace.html"))
    })
    app.get("/comingsoon", function(req,res) {
        res.sendFile(path.join(__dirname,"../public/views/comingSoon.html"))
     })
    app.get("*", function(req,res) {
       res.sendFile(path.join(__dirname,"../public/views/login.html"))
    })

}