const http = require('http');
const kelp = require('kelp');
const co   = require('../');

const app = kelp();

app.use(co(function*(req, res, next){
  res.end('Hello');
}));

http.createServer(app).listen(3000);
