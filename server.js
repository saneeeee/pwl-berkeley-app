const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static('./client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
    });
}
app.listen(PORT, (err) => {
     if (err) return console.log(err);
     console.log(`Server started on port: ${PORT}`);
});
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
});