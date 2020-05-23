var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});