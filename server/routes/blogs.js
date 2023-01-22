const router = require('express').Router();
const authorization = require('../middleware/authorization');
const {pool} = require('../db');

router.post('/add', authorization, async (req,res)=>{
    const {
      user_name,
      question,
      blog_text,
      date
    } = req.body;


    const blog = await pool.query("INSERT INTO blogs (user_id, user_name, question, blog_text, blog_date) VALUES($1, $2, $3, $4, $5) RETURNING *", [
        req.user,
        user_name,
        question,
        blog_text,
        date
    ]);

    res.json(true);

});

router.get('/allblogs', authorization, async (req, res)=>{
    const data = await pool.query("SELECT * FROM blogs");
    const reverse = data.rows.reverse();
    res.json(reverse);
});

router.delete('/delete', authorization, async(req, res)=>{
    const id = req.header('id');
    const data = await pool.query("DELETE FROM blogs WHERE id=$1", 
    [id]
    );

    if(data.rows){
        res.json(true);
    }
    
})

router.post('/reaction', authorization, async(req, res)=>{
    const {
        blog_comment_id,
        reaction_type,
        purpose
    } = req.body;

    if(purpose === 'blog'){
        const blog_id = blog_comment_id;
        const check_data = await pool.query('SELECT * FROM reactions');
        
        const checker = check_data.rows.filter((data)=>{
            return ((data.user_id === req.user) && (data.blog_id === blog_id));
        });
        
        if(checker.length) {
            return res.json(false);
        }

        
        const data = await pool.query("INSERT INTO reactions (user_id, blog_id, reaction_type, purpose) VALUES($1, $2, $3, $4) RETURNING *", [
            req.user,
            blog_id,
            reaction_type,
            purpose
        ]);

        if(data.rows) res.json(true);

    } else if (purpose === 'comment'){
        const comment_id = blog_comment_id;
        const check_data = await pool.query('SELECT * FROM reactions');
   
        const checker = check_data.rows.filter((data)=>{
            return ((data.user_id === req.user) && (data.comment_id === comment_id));
        });

        if(checker.length) {
            return res.json(false);
        }

        const data = await pool.query("INSERT INTO reactions (user_id, comment_id, reaction_type, purpose) VALUES($1, $2, $3, $4) RETURNING *", [
            req.user,
            comment_id,
            reaction_type,
            purpose
        ]);

        if(data.rows) res.json(true);

    }
});

router.get('/allreactions', authorization, async(req, res)=>{
    const data = await pool.query('SELECT * FROM reactions');
    res.json(data.rows);
})

module.exports = router;