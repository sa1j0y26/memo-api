const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGO_URI
).then(() => console.log("Successfully connected to the database."))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server is runnning at http://localhost:${port}`);
});