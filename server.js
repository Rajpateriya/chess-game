const express = require('express');
const socket = require('socket.io');
const http = require('http');
const {Chess} = require('chess.js');
const path  = require('path');


const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "w";

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));

app.get('/',async(req,res)=>{
    res.render("index");
})

io.on("connection" ,(socket)=>{
    console.log("connected")

    if(!players.white){
        players.white = socket.id;
        socket.emit("playerRole" , "w");
    }else if(!players.black){
        players.black = socket.id;
        socket.emit("playerRol" , "w");
    }
})


server.listen(3000,()=>{
    console.log('server is listening on port 3000')
})