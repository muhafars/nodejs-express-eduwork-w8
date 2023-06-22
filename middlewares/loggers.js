const loggers = (req, res, next) => {
  console.log("Server running: ", new Date().toLocaleDateString(), req.method, req.originalUrl);
  next();
};

module.exports = loggers;
