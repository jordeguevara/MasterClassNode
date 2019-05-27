const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);

  const path = parsedURL.path;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const query = parsedURL.query;
  const headers = req.headers;
  const method = req.method.toLowerCase();
  const decoder = new StringDecoder("utf-8");
  let buffer = "";
  req.on("data", data => {
    console.log(data);
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();

    res.end("hello world");
  });
});

server.listen(3000, () => {
  console.log("Server is listen on port 3000");
});
