const express = require("express");
const User = require("./mongo");
const cors = require("cors");
const bcrypt = require("bcrypt");
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
        const user = await User.findOne({email:email});
        if(user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch) {
                res.json({
                    status: "success",
                    userId: user._id,
                    doneReading: user.doneReading,
                    toRead: user.toRead
                });
            } else {
                res.json("incorrect password");
            }
        } else {
            res.json("notexist")
        }
    } catch(e) {
        res.json("fail")
    }
})

app.post("/signup", async(req,res) => {
    const{email,password} = req.body;
    try {
        const existingUser = await User.findOne({email: email});

        if(existingUser) {
            res.json("exist");
        } else {
            
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser =  new User({
                email: email,
                password: hashedPassword,
                doneReading: [],
                toRead: []
            });
            await newUser.save();
            res.json({
                status: "success",
                userId: newUser._id,
                doneReading: [],
                toRead: []
            });
        }
    } catch(e) {
        res.json("fail");
    }
});

app.post("/updateFields", async(req, res) => {
    const {userId, doneReading, toRead} = req.body;
    try {
        await User.findByIdAndUpdate(userId, {doneReading, toRead});
        res.json({status: "success"});
    } catch(e) {
        res.json({status: "fail"});
    }
});

app.listen(PORT, () => {
    console.log("connected port 8000");
});