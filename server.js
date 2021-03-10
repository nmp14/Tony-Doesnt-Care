const express = require("express");
const sequelize = require("./config/connect.js");
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assets", express.static('assets'));

// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
});