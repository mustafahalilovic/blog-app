const router = require('express').Router();
const authorization = require('../middleware/authorization');
const pool = require('../db');

router.get('/username', authorization, async(req, res)=>{
    try {
        const data = await pool.query("SELECT user_name FROM users WHERE id=$1", [
            req.user
        ]);
        res.json(data.rows[0]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;