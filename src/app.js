const express = require('express');
<<<<<<< HEAD
const routes = require('./routes');

const app = express();

app.use(routes);
=======

const app = express();
const router = express.Router();

const route = router.get('/', (req,res,next) =>{
    res.status(200).send({
        title: "Ciencia Popular APi",
        version: "0.0.1"
    });
});


app.use('/', route);
>>>>>>> dd6581c95606f552fc909c256f8bb7283ee29603

module.exports = app;