

// MODULES ---------------------------------------------------------------------

var http = require('http');

// CREATE THE SERVER -----------------------------------------------------------
//
// This application does exactly the same thing as hellonode2.js, but in this
// version of the code, we did assign the return value of the createServer 
// to a variable. We simply chained the the listen() method directly to
// the function expression of createServer().

http.createServer(function(req, res) {
  
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('Hello World 2');
  res.end();

}).listen(3000, function() {
  console.log("Application started");
});

// NOTE
//
// createServer() returns an HTTP object. 
// The listen() method is called against an HTTP object. Hence;
//    http.createServer().listen()
// is syntactically equivalent to what we did in hellonode.js and 
// hellonode2.js

