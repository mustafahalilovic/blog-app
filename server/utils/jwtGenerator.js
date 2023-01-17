const jwt = require('jsonwebtoken');
require('dotenv').config({path: "./vars/.env"});
// get access to env variables


// function for generating jwt token
function jwtGenerator(user_id){
    const payload = {
        user: user_id
    }

    // returing jwt token with payload === userID, jwtSecret from .env file and expiresIn string
    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: '1hr'} );
}

module.exports = jwtGenerator;