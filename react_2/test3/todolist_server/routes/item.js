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
router.post('/delete', (req, res)=>{
    const key = parseInt(req.body.key);
    var sql = `DELETE FROM todolist WHERE \`key\` = ${key}`;
    con.query(sql, function(err, result){
        if(err){
            res.json({message: false});
            console.log(err);
        }else {
            res.json({message: true});
            console.log("1 record deleted: " + result.affectedRows);
        }
    });
});
router.post('/add', (req, res)=>{
    console.log(req.body);
    const key = parseInt(req.body.key);
    var sql = `INSERT INTO todolist (\`key\`, text) VALUES (${key}, '${req.body.text}')`;
    con.query(sql, function (err, result) {
        if (err){
            console.log(err);
            res.json({message: false});
        }else{
            console.log("1 record inserted");
            res.json({message: true});
        }
    });
});

module.exports =  router;