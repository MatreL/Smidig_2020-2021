const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const repairApi = require("./repairApi");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(
    session({
        secret: "11",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/repairs", repairApi);

passport.use(
    new LocalStrategy((username, password, done) => {
        if (username === "admin" && password === "123456") {
            done(null, { username, is_admin: true });
        }else if (username === "user" && password === "5555") {
            done(null, {username, is_admin: false});
        }
        else {
            done(null, false, { message: "Invalid username/password" });
        }
    })
);


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((id, done) => done(null, id));
app.use(passport.initialize());
app.use(passport.session());

app.get("/api/profile", (req, res) => {
    if (!req.user) {
        return res.status(401).send();
    }
    const { username } = req.user;
    res.json({ username });
});
app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.end();
});

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));


app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});
