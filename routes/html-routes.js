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
    app.get("/main", function(req,res) {
        res.sendFile("/views/.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/main", function(req,res) {
        res.sendFile("/views/.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/main", function(req,res) {
        res.sendFile("/views/.html", { root: path.join(__dirname, "../public") })
    })

}