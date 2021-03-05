const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const chemicals = [];
let count = 0;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Paths
app.use("/assets", express.static('assets'));

// HTML paths
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/storage', (req, res) => res.sendFile(path.join(__dirname, 'storage.html')));
app.get("/addForm", (req, res) => res.sendFile(path.join(__dirname, 'addForm.html')));
// API paths
app.get("/api/chemicals", (req, res) => res.json(chemicals));

// Post to api/chemicals
app.post("/api/chemicals", (req, res) => {
    const chemical = req.body;

    count++;
    chemical.id = count;
    console.log(chemical);

    chemicals.push(chemical);
    res.send(chemicals)
});

// Listen on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));