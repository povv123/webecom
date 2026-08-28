const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    brand: { type: String },
    categorySlug: { type: String, required: true, index: true },
    subCategorySlug: { type: String, required: true, index: true },
    type: { type: String },
    price: { type: Number, required: true },
    tagline: { type: String },
    image: { type: String },
    isNewArrival: { type: Boolean, default: false },
    attributes: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
