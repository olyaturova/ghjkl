const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require('./FormRouter');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

require('dotenv').config();
mongoose.set("strictQuery", false);


const PORT = 4000 || process.env.port;






mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("WE WERE CONNECTED TO MONGO"))
.catch((err) => console.log(err));

app.use(routes);


app.listen(4000, () => {
    console.log("Listenning on PORT 4000")
})
 