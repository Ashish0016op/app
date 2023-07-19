const fs=require('fs');
const requestHandler = (req,res)=>{
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (!err && data) {
        res.write('<p>'+data+'</p>');
      }

      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message">');
      res.write('<button type="submit">Send</button>');
      res.write('</form>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[0];
      fs.writeFile('message.txt', message, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Message saved successfully!');
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      });
    });
  } else {
    res.end();
  }
}

module.exports.handler=requestHandler;
module.exports.someText="this is some text";