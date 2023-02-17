let http = require("http");
let server = http.createServer((req, res) => {
  switch (req.url) {
    case "/name":
      res.write("Name url");
      break;
    case "/company":
      res.write("Company url");
      break;
    default:
      res.write("Parent url");
      break;
  }
  res.end();
});

server.listen(9022, () => {
  console.log("Server started");
});
