const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ECOM");

//user route
const user_routes = require("./routes/userRoute");

app.use("/api", user_routes);


//store routes
const store_routes = require("./routes/storeRoute");
app.use('/api',store_routes);

app.listen(3300, ()=> {
    console.log("server is ready");
});
