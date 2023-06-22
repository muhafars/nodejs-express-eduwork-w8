const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const router = require("./routes");
const loggers = require("./middlewares/loggers");
app.use(loggers);
//-Routing
app.use(router);
//- Menangani erros
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "Failed",
    message: `Resource ${req.originalUrl} not found`,
  });
  next();
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
