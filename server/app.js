const express = require('express');
const app = express();
const cors = require('cors');
const {db} = require("./db");
require('dotenv').config({path: "./vars/.env"});

const PORT = process.env.PORT || 5000;

// access to req.body in middleware
app.use(express.json());
// allow communication between cross-origin platforms with diferent domains
app.use(cors());

// seting routes

// register and login routes
app.use('/auth', require('./routes/jwtAuth'));

// blogs route
app.use('/blogs', require('./routes/blogs'));

// user route
app.use('/user', require('./routes/user'));

// comments route
app.use('/comments', require('./routes/comments'));



app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
    db.runMigrations();
});