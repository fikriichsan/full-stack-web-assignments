// Import modules
const express = require("express");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const { append } = require("express/lib/response");

// Initiate app
const app = express();

// Express session set up
const oneMinute = 60 * 1000;
app.use(
    expressSession({
        secret: "thisismysecretkey",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: oneMinute
        }
    })
)

// Parse HTML form
// Import middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Add static files to the server
app.use(express.static("views"));

// Set cookie parser
app.use(cookieParser());

// Dummy credential & session data
const myusername = 'user1';
const mypassword = 'mypassword';

let session;

// Add routes
// Login form - if user loggedin, show logout link
app.get("/", (req, res) => {
    session = req.session;
    if(session.userid){
        res.send(`Welcome! <a href=\'/logout'>Log out</a>`);
    }else{
        res.sendFile("views/index.html", {root: "views"});
    }
})
// Send user credential & check it
app.post("/user", (req, res) => {
    const body = req.body;
    if(body.username === myusername && body.password === mypassword){
        session = req.session;
        session.userid = body.username;
        console.log(req.session)
        res.send(`Welcome, ${body.username}! <a href=\'/logout'>Log out</a>`)
    } else {
        res.send("Invalid username or password");
    }
})
// Log out - destroy session
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

// Start server
app.listen(3000, () => {
    console.log("Listening to port 3000");
})