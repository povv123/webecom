const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Product = require("../models/Product");

// Ensure upload directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "prod-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  },
});

// @route   POST /api/products
// @desc    Add a new product with image
router.post("/", upload.single("image"), async (req, res, next) => {
  try {
    const {
      slug, name, brand, categorySlug, subCategorySlug,
      type, price, tagline, isNewArrival, attributes,
    } = req.body;

    if (!slug || !name || !categorySlug || !subCategorySlug || !price) {
      res.status(400);
      throw new Error("slug, name, categorySlug, subCategorySlug, and price are required.");
    }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

    let parsedAttributes = {};
    if (attributes) {
      try {
        parsedAttributes = JSON.parse(attributes);
      } catch {
        parsedAttributes = {};
      }
    }

    const newProduct = await Product.create({
      slug,
      name,
      brand,
      categorySlug,
      subCategorySlug,
      type,
      price: parseFloat(price),
      tagline,
      image: imagePath,
      isNewArrival: isNewArrival === "true" || isNewArrival === true,
      attributes: parsedAttributes,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/products
// @desc    Get all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;