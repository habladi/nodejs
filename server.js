const http = require('http');
const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Node.js is working with Express and http.');
});

// Create an HTTP server using the Express app
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running`);
});
