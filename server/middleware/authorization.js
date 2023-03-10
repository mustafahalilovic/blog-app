const jwt = require('jsonwebtoken');
require('dotenv').config({path: "./vars/.env"});

const authorization = (req,res,next)=>{

    const jwtToken = req.header("token");

    if(!jwtToken){
        return res.status(403).json('Not Authorize');
    }

    try {

        // verify current jwt token
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);
        
        req.user = payload.user;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(403).json('Not Authorize');
    }

}

module.exports = authorization;