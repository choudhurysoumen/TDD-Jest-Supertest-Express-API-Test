const express = require('express');
const app = new express();

app.get("/", (req, res) => {
    res.json("Test Server");
})

app.listen(3000, () => {
    console.log(`Server started on port: 3000`);
});