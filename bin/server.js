const app = require('../src/app')
<<<<<<< HEAD

const port = process.env.PORT || 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`API rodando na porta: ${port}`);
});
=======
const http = require('http');

const port  = (process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log('Api rodando na porta: ' + port)

>>>>>>> dd6581c95606f552fc909c256f8bb7283ee29603
