const http = require('http');
const express=require('express');

const app = express();
//between creating app and creatig server we can add middlewares
app.use((req, res, next)=>{
    console.log('In the middleware');
    next();
})


app.use((req, res, next)=>{
    //won't work unless we call next in above app.use
    console.log('In the 2nd middleware');
})

//between creating app and creatig server we can add middlewares
const server = http.createServer(app);

server.listen(3000);