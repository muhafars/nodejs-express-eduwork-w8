const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads" });
const fs = require("fs");
const path = require("path");
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
  if (image) {
    const target = path.join(__dirname, "uploads", image.originalname);
    fs.renameSync(image.path, target);
    // res.json({
    //   name,
    //   price,
    //   stock,
    //   status,
    //   image,
    // });
    res.sendFile(target);
  }
});

// router.get("/:categories/:tag", (req, res) => {
//   const { categories, tag } = req.params;
//   res.json({
//     categories,
//     tag,
//   });
//   next();
// });
module.exports = router;
