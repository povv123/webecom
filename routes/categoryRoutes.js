const express = require("express");
const Category = require("../models/Category");
const { protect, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.find().sort("order");
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
  } catch (err) {
    next(err);
  }
});

router.post("/", protect, requireAdmin, async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
});

router.put("/:slug", protect, requireAdmin, async (req, res, next) => {
  try {
    const category = await Category.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
  } catch (err) {
    next(err);
  }
});

router.delete("/:slug", protect, requireAdmin, async (req, res, next) => {
  try {
    const category = await Category.findOneAndDelete({ slug: req.params.slug });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
