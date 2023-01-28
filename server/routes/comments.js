const router = require('express').Router();
const authorization = require('../middleware/authorization');
const {pool} = require('../db');

router.post('/add', authorization, async(req, res)=>{

    const {
        blog_id,
        comUsername,
        comment,
        comment_date
    } = req.body;

    const data = await pool.query("INSERT INTO comments (blog_id, comUsername, comment, comment_date) VALUES($1, $2, $3, $4) RETURNING *",[
        blog_id,
        comUsername,
        comment,
        comment_date
    ]);

    if(data.rows[0]) res.json(true);

});

router.get('/get', authorization, async (req, res)=>{
    const data = await pool.query("SELECT * FROM comments");
    if(data.rows) res.json(data.rows);
});

module.exports = router;