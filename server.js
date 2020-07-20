const http = require('http');
const express = require('express');

const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req,res,next) =>{
    res.status(200).send({
        title: "Ciencia Popular APi",
        version: "0.0.1"
    });
});

app.use('/', route);
server.listen(port)
console.log('Api rodando na porta: ' + port)

