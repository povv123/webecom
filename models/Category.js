const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      kh: { type: String, required: true },
    },
  },
  { _id: false }
);

const CategorySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: {
      en: { type: String, required: true },
      kh: { type: String, required: true },
    },
    order: { type: Number, default: 0 },
    subcategories: { type: [SubcategorySchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
