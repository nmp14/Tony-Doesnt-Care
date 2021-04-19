const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/connect.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 8080;
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require("./controllers"));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
});