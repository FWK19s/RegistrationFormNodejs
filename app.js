// let http = require('http');
// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="submission.html" method="post">');
//     res.write('<label for="name">Name:</label>');
//     res.write('<input type="text" name="name" placeholder="Name">');
//     res.write('<label for="password">Password:</label>');
//     res.write('<input type="password" name="password" placeholder="password">');
//     res.write('<input type="submit" value="submit">');
//     res.write('</form>');
//     return res.end();
// }).listen(8080);
let http = require('http');
  let fs = require('fs');
  http.createServer(function (req, res){
    fs.readFile('./index.html', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }).listen(8080)
 