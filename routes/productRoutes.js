const express = require("express");
const Product = require("../models/Product");
const { protect, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { category, subCategory, isNewArrival } = req.query;
    const filter = {};
    if (category) filter.categorySlug = category;
    if (subCategory) filter.subCategorySlug = subCategory;
    if (isNewArrival !== undefined) filter.isNewArrival = isNewArrival === "true";

    const products = await Product.find(filter).sort("-createdAt");
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post("/", protect, requireAdmin, async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

router.put("/:slug", protect, requireAdmin, async (req, res, next) => {
  try {
    const product = await Product.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.delete("/:slug", protect, requireAdmin, async (req, res, next) => {
  try {
    const product = await Product.findOneAndDelete({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
