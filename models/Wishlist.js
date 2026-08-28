const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    productIds: { type: [mongoose.Schema.Types.ObjectId], ref: "Product", default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlist", WishlistSchema);
