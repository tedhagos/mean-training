
var h = require('http');

var server = h.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type":"text/html"});
  res.write("<h1>Hello World</h1>");
  res.end();
}).listen(3000, function () {
  return "Server started on port 3000";
});




