const router = require("express").Router();

router.get("/", (req, res, next) => {
  const { page, total } = req.query;
  res.send({
    status: "success",
    message: "Welcome to express class",
    page,
    total,
  });
  next();
});

router.get("/products/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
  next();
});

router.get("/:categories/:tag", (req, res) => {
  const { categories, tag } = req.params;
  res.json({
    categories,
    tag,
  });
  next();
});
module.exports = router;
