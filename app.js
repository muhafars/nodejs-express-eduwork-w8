const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const router = require("./routes");
const loggers = require("./middlewares/loggers");
const path = require("path");

app.use(loggers);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));

app.use(router);

app.use((req, res, next) => {
  const error = new Error(`Resource ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(PORT, async () => console.log(`Server listening on http://localhost:${PORT}`));
