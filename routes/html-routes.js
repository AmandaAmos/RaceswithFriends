module.exports = function (app,path) {
    app.get("/main", function(req,res) {
        res.sendFile("/views/login.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/signup", function(req,res) {
        res.sendFile("/views/signUp.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/feature", function(req,res) {
        res.sendFile("/views/feature.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/enterrace", function(req,res) {
        res.sendFile("/views/enterRace.html", { root: path.join(__dirname, "../public") })
    })
    app.get("*", function(req,res) {
        res.sendFile("/views/index.html", { root: path.join(__dirname, "../public") })
    })

}