// -0- Module Buat Sendiri-0-
// const { hello, world } = require("./module");
// console.log(hello(), world());
// -0- Core Module Node JS + NPM Package -0-

const http = require("http");
const moment = require("moment");
const port = process.env.PORT || 3030;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  // - Content-Type : text/json, text/plain, text/html
  res.write(
    JSON.stringify({
      status: "success",
      message: "Welcome to MERN Class",
      loginAt: moment().format("YYYY-MM-DD HH:mm"),
    })
  );
  res.end();
});
server.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
