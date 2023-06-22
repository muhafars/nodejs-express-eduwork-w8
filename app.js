const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const router = require("./routes");
const loggers = require("./middlewares/loggers");
const path = require("path");
app.use(loggers);
//- Mengirim API dalam bentuk html
app.use(express.urlencoded({ extended: true }));
//- Mengirim API dalam bentuk json
app.use(express.json());
app.use("/public", express.static(path.join(__dirname + "/uploads")));
//-Routing
app.use(router);
//- Menangani error
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "Failed",
    message: `Resource ${req.originalUrl} not found`,
  });
  next();
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
