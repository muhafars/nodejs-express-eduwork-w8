const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads" });
const fs = require("fs/promises");
const path = require("path");

// Route to handle GET requests to the root URL
router.get("/", async (req, res, next) => {
  try {
    const { page, total } = req.query;
    res.send({
      status: "success",
      message: "Welcome to express class",
      page,
      total,
    });
  } catch (err) {
    next(err);
  }
});

// Route to handle GET requests for product IDs
router.get("/products/:id", async (req, res, next) => {
  try {
    res.json({
      id: req.params.id,
    });
  } catch (err) {
    next(err);
  }
});

// Route to handle POST requests for creating new products with image upload
router.post("/products/", upload.single("image"), async (req, res, next) => {
  try {
    const { name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
      const target = path.join(__dirname, "uploads", image.originalname);
      await fs.rename(image.path, target);
      res.json({
        name,
        price,
        stock,
        status,
        imageUrl: "/public/" + image.originalname,
      });
    }
  } catch (err) {
    next(err);
  }
});

// Route to handle GET requests for category and tag parameters
router.get("/:category/:tag", async (req, res, next) => {
  try {
    const { category, tag } = req.params;
    res.json({
      category,
      tag,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
