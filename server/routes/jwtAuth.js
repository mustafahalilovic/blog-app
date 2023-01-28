const router = require("express").Router();
const {pool} = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validateInfo = require('../middleware/validateInfo');
const authorization = require('../middleware/authorization');

// registering route
router.post("/register", validateInfo, async(req,res)=>{
    try {

        // 1. destructure req body
        const {name, email, password} = req.body;

        // 2. check if user exists
        const user = await pool.query("SELECT * FROM users WHERE user_email=$1",[
            email
        ]);

        // if user exists
        if(user.rows.length > 0){
            return res.status(400).send('User already exists');
        }

        // bcrypt password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        // add user to database and return values
        const newUser =await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [
            name,
            email,
            bcryptPassword
        ]);

        // generate jwt token with returned user id
        const token = jwtGenerator(newUser.rows[0].id);

        // return jwt token as response
        return res.json({token});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error!');
    }
});

router.post('/login', validateInfo, async(req,res)=>{
    try {

            // destructure req.body
        const {email, password} = req.body;

        // check if user exists
        const user = await pool.query("SELECT * FROM users WHERE user_email=$1",[
            email
        ]);

        if(user.rows.length === 0){
            return res.status(400).send('Password or Email is incorrect!');
        }

        // check if password matches
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

        if(!validPassword){
            return res.status(400).send('Password or Email is incorrect!');
        }

        // return jwt token
        const token = jwtGenerator(user.rows[0].id);
        const name = user.rows[0].user_name;
        res.json({
            token,
            name
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error!');
    }

    
});

router.get('/verify', authorization, async(req,res)=>{
    try {

        // if authorization middleware is good and user has token send true to response
        res.json(true);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error!');
    }
})

module.exports = router;