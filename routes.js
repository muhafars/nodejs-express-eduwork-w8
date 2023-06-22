const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads" });
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

router.post("/products/", upload.single("image"), (req, res, next) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  res.json({
    name,
    price,
    stock,
    status,
    image,
  });
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
