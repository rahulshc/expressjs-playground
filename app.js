//const http = require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app = express();
const adminRoutes=require('./routes/admin');
const shopRoutes = require('./routes/shop');
//between creating app and creatig server we can add middlewares


/*app.use('/', (req, res, next)=>{
    console.log('This always runs');
    next();
});*/

//bodyparser.urlencoded internally calls the next
app.use(bodyParser.urlencoded({extended: false}));
//order of admin routes and shop routes matters here if we used app.use in admin and shop routes
app.use('/admin',adminRoutes);//appendes all admin routes with/admin
app.use(shopRoutes);

//handling all unknown routes because route next funnels from top to bottom

app.use((req, res, next)=> {
    res.status(404).send('<h1>Page not found</h1>');
});


//between creating app and creatig server we can add middlewares
/*const server = http.createServer(app);

server.listen(3000);*/

app.listen(3000);