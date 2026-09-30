const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

require("./models");

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.API_PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    message: "E-commerce API is running",
    dbConnected: mongoose.connection.readyState === 1,
  });
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

// The HTTP server starts immediately, independent of the database
// connection. This means a Mongo outage/misconfiguration shows up as clear
// errors on individual API calls (and in the console below) rather than
// every single request failing with a generic "Failed to fetch" because
// nothing was listening on the port at all.
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

if (!process.env.MONGO_URI) {
  console.error(
    " MONGO_URI is not set. Copy .env.example to .env and fill it in - the API will run but every database-backed route will fail until this is set."
  );
} else {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(" MongoDB connected successfully");
    })
    .catch((error) => {
      console.error(" Database connection error:", error.message);
      console.error(
        "   The server is still running, but every database-backed route will fail until this is fixed."
      );
    });
}

module.exports = app;