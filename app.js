// -0- Module Buat Sendiri-0-
// const { hello, world } = require("./module");
// console.log(hello(), world());
// -0- Core Module Node JS + NPM Package -0-

const http = require("http");
const moment = require("moment");
// - Make A Local Server
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      home(res);
      break;
    case "/welcome":
      welcome(res);
      break;
    default:
      page404(res);
      break;
  }
});

const home = function (res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(`<h1>Selamat Datang di Home Page</h1>\n <h4>Semoga Allah permudah urusan</h4>`);
  res.end();
};
const welcome = function (res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "success",
      message: "Welcome to MERN Class",
      loginAt: moment().format("YYYY-MM-DD HH:mm"),
    })
  );
  res.end();
};

const page404 = function (res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(
    JSON.stringify({
      status: "error",
      message: "not found",
    })
  );
  res.end();
};

//- Create Server Acces
server.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
