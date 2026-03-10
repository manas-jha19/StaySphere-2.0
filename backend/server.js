const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db.js");
const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.get("/", (req,res)=>{
    res.send("Server connected");
})

const port = 5000;

app.listen(port,()=>{console.log(`Server connected port${port}`)});