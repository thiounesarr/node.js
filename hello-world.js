//tache 1

console.log("HELLO WORLD");

const { write } = require('fs');
//tache 2

let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res. write('Hello World!!!!');
  res.end();
}).listen(3000);

//tache 3

let fs = require('fs');
fs.writeFile('hello.txt', 'Hello from node', function (err) {
  if (err) throw err;
  console.log('File created and Saved!');
})
