const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end("Hello, Akash!...how are u?");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
