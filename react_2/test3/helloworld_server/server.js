const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());

server.get('/', (req, res)=>{
    res.json({ip: "111.222.333.444"});
});

server.listen(8080, ()=>{
    console.log("8080 server is ready ... ");
});