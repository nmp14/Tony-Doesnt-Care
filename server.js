const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connect.js");

const app = express();
const PORT = process.env.PORT || 8080;
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assets", express.static('assets'));

app.use(require("./controllers"));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
});