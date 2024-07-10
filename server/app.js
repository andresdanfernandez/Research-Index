const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:5173"
}));

require('dotenv').config();
const PORT = process.env.PORT || 8000;


app.post("/login", async(req,res) => {
    const{email,password} = req.body;

    try {
        // check if email already exist
        const user = await collection.findOne({email:email});
        if(user) {
            res.json("exist");
        } else {
            res.json("notexist")
        }
    } catch(e) {
        res.json("fail")
    }
})

app.post("/signup", async(req,res) => {
    const{email,password} = req.body;

    const data = {
        email: email,
        password: password
    }

    try {
        // check if email already exist
        const user = await collection.findOne({email:email});

        if(user) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);

        }
    } catch(e) {
        res.json("fail");
    }
})

app.listen(PORT, () => {
    console.log("connected port 8000");
});