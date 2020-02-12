const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "nodejs",
    port: "3307"
});
router.post('/insert', (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pw = req.body.pw;
    const comments = req.body.comments;
    var sql = "INSERT INTO members (name, email, pw, comments) VALUES (?,?,?,?)";
    con.query(sql, [name, email, pw, comments], function (err, result) {
        if (err){
            res.json({message: false});
        } else {
            res.json({message: name});
        }
    });
});
router.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.json({message: true});
    });
});
router.post('/login', (req, res)=>{
    console.log(req.body);
    var email = req.body.email;
    var pw = req.body.pw;
    var sql = 'SELECT * FROM members WHERE email = ? AND pw = ?';   //정적 쿼리문 사용 (SQL Injection 방어)
    con.query(sql, [email, pw], function (err, result) {
        if (err) {
            res.json({message: false});
        } else {
            req.session.email=email;
            res.json({message: result[0].name});
        }
    });
});

module.exports=router;