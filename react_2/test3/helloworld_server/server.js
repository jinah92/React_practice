const memberRouter = require('./routes/memberRouter');
const express = require('express');
const session = require('express-session');
const server = express();
const cors = require('cors');
const sequelize=require('./models').sequelize;

sequelize.sync();

const corseOptions = {
    origin: true,
    credentials: true
};
server.use(cors(corseOptions));
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "미녀 강사 전은수",
    cookie: {
        httpOnly: true,
        secure: false
    }
}));
server.use('/member', memberRouter);
server.get('/', (req, res)=>{
    res.json({ip: "111.222.333.444"});
});

server.listen(8080, ()=>{
    console.log("8080 server is ready ... ");
});