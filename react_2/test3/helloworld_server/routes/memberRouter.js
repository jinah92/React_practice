const express = require('express');
const router = express.Router();

router.get('/logout', (req, res)=>{
    res.json({message: true});
});
router.post('/login', (req, res)=>{
    console.log(req.body);
    res.json({message: true});
});

module.exports=router;