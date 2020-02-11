const express = require('express');
const app = express();
const cors = require('cors');
const itemRouter = require('./routes/item');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/Item', itemRouter);

app.get('/', (req, res)=>{
    console.log("요청 받았음");
    res.json({message: "ok"});
});
app.listen(8080, ()=>{
    console.log("8080 server ready");
});