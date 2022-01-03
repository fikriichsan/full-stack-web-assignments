// Import modules
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Initiate app
const app = express();

// Dummy users data
const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
];

// Middleware
dotenv.config();
app.use(bodyParser.json());

// Add routes
app.post('/login', (req, res) => {
    const {username, password} = req.body;

    // Check if the user exists
    const user = users.find(user => {
        return (user.username === username) && (user.password === password)
    });

    // If user exists, send JWT as response, else error
    if(user){
        const token = jwt.sign({
            username: user.username,
            role: user.role
        },
            process.env.accessTokenSecret
        )
        res.json({ token });
    }else{
        res.send("Username or password incorrect");
    }
})

// Start server
app.listen(3000, () => {
    console.log("Listening to port 3000");
})