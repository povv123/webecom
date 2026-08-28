const express = require("express");
const Wishlist = require("../models/Wishlist");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);

async function getOrCreateWishlist(userId) {
  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) {
    wishlist = await Wishlist.create({ userId, productIds: [] });
  }
  return wishlist;
}

router.get("/", async (req, res, next) => {
  try {
    const wishlist = await getOrCreateWishlist(req.user._id);
    res.json(wishlist);
  } catch (err) {
    next(err);
  }
});

router.post("/:productId", async (req, res, next) => {
  try {
    const wishlist = await getOrCreateWishlist(req.user._id);
    const { productId } = req.params;
    if (!wishlist.productIds.some((id) => id.toString() === productId)) {
      wishlist.productIds.push(productId);
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const wishlist = await getOrCreateWishlist(req.user._id);
    wishlist.productIds = wishlist.productIds.filter((id) => id.toString() !== req.params.productId);
    await wishlist.save();
    res.json(wishlist);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
