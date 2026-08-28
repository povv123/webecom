const mongoose = require("mongoose");
require("dotenv").config();

const { Category, Product } = require("../models");
const { categories, products } = require("./data");

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB connected");

  await Category.deleteMany({});
  await Product.deleteMany({});

  await Category.insertMany(categories);
  await Product.insertMany(products);

  console.log(`Seeded ${categories.length} categories and ${products.length} products`);

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
