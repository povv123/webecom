const express = require("express");
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort("-createdAt");
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, userId: req.user._id });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

async function resolveItems(requested) {
  const productIds = requested.map((item) => item.productId);
  const products = await Product.find({ _id: { $in: productIds } });
  const productMap = new Map(products.map((p) => [p._id.toString(), p]));

  return requested.map((item) => {
    const product = productMap.get(item.productId.toString());
    if (!product) {
      const err = new Error(`Product ${item.productId} no longer exists`);
      err.status = 400;
      throw err;
    }
    return {
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: item.quantity || 1,
    };
  });
}

router.post("/", async (req, res, next) => {
  try {
    let items;
    let cart = null;

    // Explicit items = a direct "Buy" on one product, bypassing the cart
    // entirely so it doesn't also check out whatever else is in the bag.
    if (Array.isArray(req.body.items) && req.body.items.length > 0) {
      items = await resolveItems(req.body.items);
    } else {
      cart = await Cart.findOne({ userId: req.user._id });
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: "Cart is empty" });
      }
      items = await resolveItems(cart.items);
    }

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = await Order.create({ userId: req.user._id, items, total });

    if (cart) {
      cart.items = [];
      await cart.save();
    }

    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
