// -0- Module Buat Sendiri-0-
// const { hello, world } = require("./module");
// console.log(hello(), world());
// -0- Core Module Node JS + NPM Package -0-

const http = require("http");
const moment = require("moment");

const port = process.env.PORT || 3030;

const server = http.createServer(async (req, res) => {
  try {
    switch (req.url) {
      case "/":
        await home(res);
        break;
      case "/welcome":
        await welcome(res);
        break;
      default:
        await page404(res);
        break;
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: "error",
        message: "internal server error",
      })
    );
    res.end();
  }
});

const home = async function (res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>Selamat Datang di Home Page</h1>\n <h4>Semoga Allah permudah urusan</h4>`);
  res.end();
};
const welcome = async function (res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      status: "success",
      message: "Welcome to MERN Class",
      loginAt: moment().format("YYYY-MM-DD HH:mm"),
    })
  );
  res.end();
};

const page404 = async function (res) {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      status: "error",
      message: "not found",
    })
  );
  res.end();
};

server.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
