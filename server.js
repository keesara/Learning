var http = require("http");
var fs =require('fs');

var contents = fs.readFileSync('config.json').toString();
console.log(contents);

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.write("\n");
  response.write("This is node js first program");
  response.write("\n");
  response.write("https://github.com/sayar/NodeMVA");
  response.end();
} 
);

server.listen(9999);
