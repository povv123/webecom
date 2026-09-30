const express = require('express');
const router = express.Router();

const { protect, requireAdmin } = require('../middleware/auth');

const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');

// All routes below require a logged-in admin
router.use(protect, requireAdmin);

// @route   GET /api/admin/stats
// @desc    Dashboard summary numbers
router.get('/stats', async (req, res, next) => {
  try {
    const [userCount, orderCount, productCount, revenueAgg] = await Promise.all([
      User.countDocuments(),
      Order.countDocuments(),
      Product.countDocuments(),
      Order.aggregate([
        { $match: { status: { $in: ['paid', 'shipped'] } } },
        { $group: { _id: null, total: { $sum: '$total' } } },
      ]),
    ]);

    res.json({
      userCount,
      orderCount,
      productCount,
      totalRevenue: revenueAgg[0]?.total || 0,
    });
  } catch (err) {
    next(err);
  }
});

// @route   GET /api/admin/users
// @desc    List all users
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find({}).select('-passwordHash');
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// @route   DELETE /api/admin/users/:id
// @desc    Remove a user
router.delete('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.deleteOne();
    res.json({ message: 'User removed' });
  } catch (err) {
    next(err);
  }
});

// @route   GET /api/admin/orders
// @desc    List all orders
router.get('/orders', async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate('userId', 'name email');
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// @route   PUT /api/admin/orders/:id/status
// @desc    Update an order's status
router.put('/orders/:id/status', async (req, res, next) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'paid', 'shipped', 'cancelled'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: `status must be one of: ${validStatuses.join(', ')}` });
    }

    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = status;
    const updated = await order.save();
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// @route   GET /api/admin/products
// @desc    List all products
router.get('/products', async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// @route   POST /api/admin/products
// @desc    Create a new product
router.post('/products', async (req, res, next) => {
  try {
    const {
      slug, name, brand, categorySlug, subCategorySlug,
      type, price, tagline, image, isNewArrival, attributes,
    } = req.body;

    if (!slug || !name || !categorySlug || !subCategorySlug || !price) {
      return res.status(400).json({
        message: 'slug, name, categorySlug, subCategorySlug, and price are required.',
      });
    }

    const product = await Product.create({
      slug,
      name,
      brand,
      categorySlug,
      subCategorySlug,
      type,
      price: parseFloat(price),
      tagline,
      image,
      isNewArrival: !!isNewArrival,
      attributes: attributes || {},
    });

    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

// @route   PUT /api/admin/products/:id
// @desc    Update a product
router.put('/products/:id', async (req, res, next) => {
  try {
    const {
      slug, name, brand, categorySlug, subCategorySlug,
      type, price, tagline, image, isNewArrival, attributes,
    } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.slug = slug ?? product.slug;
    product.name = name ?? product.name;
    product.brand = brand ?? product.brand;
    product.categorySlug = categorySlug ?? product.categorySlug;
    product.subCategorySlug = subCategorySlug ?? product.subCategorySlug;
    product.type = type ?? product.type;
    product.price = price !== undefined ? parseFloat(price) : product.price;
    product.tagline = tagline ?? product.tagline;
    product.image = image ?? product.image;
    product.isNewArrival = isNewArrival !== undefined ? !!isNewArrival : product.isNewArrival;
    product.attributes = attributes ?? product.attributes;

    const updated = await product.save();
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// @route   DELETE /api/admin/products/:id
// @desc    Delete a product
router.delete('/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.deleteOne();
    res.json({ message: 'Product removed' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;