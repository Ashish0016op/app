const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  res.setHeader('Content-Type','text/html');
  if(req.url==='/home'){
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome Home</h></body>')
    res.write('</html');
    res.end();
  }else if(req.url==='/about'){
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to About Us page</h></body>')
    res.write('</html');
    res.end();
  }else if(req.url==='/node'){
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h></body>')
    res.write('</html');
    res.end();
  }
});

server.listen(4000);
