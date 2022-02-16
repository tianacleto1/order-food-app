const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!!!");
});

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port ${port}`);