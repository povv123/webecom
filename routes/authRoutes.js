const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { protect } = require("../middleware/auth");

const router = express.Router();

function signToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

function toPublicUser(user) {
  return {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    birthday: user.birthday,
    country: user.country,
    addresses: user.addresses,
    paymentMethods: user.paymentMethods,
    twoFactorEnabled: user.twoFactorEnabled,
  };
}

const PROFILE_FIELDS = [
  "firstName",
  "lastName",
  "phone",
  "birthday",
  "country",
  "addresses",
  "paymentMethods",
  "twoFactorEnabled",
];

router.post("/register", async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, phone, birthday, country } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "An account with this email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      passwordHash,
      firstName,
      lastName,
      phone,
      birthday,
      country,
    });

    res.status(201).json({ token: signToken(user), user: toPublicUser(user) });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    const valid = user && (await bcrypt.compare(password, user.passwordHash));
    if (!valid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ token: signToken(user), user: toPublicUser(user) });
  } catch (err) {
    next(err);
  }
});

router.get("/me", protect, async (req, res) => {
  res.json(toPublicUser(req.user));
});

router.patch("/me", protect, async (req, res, next) => {
  try {
    const updates = {};
    for (const field of PROFILE_FIELDS) {
      if (field in req.body) updates[field] = req.body[field];
    }

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    });
    res.json(toPublicUser(user));
  } catch (err) {
    next(err);
  }
});

router.patch("/me/password", protect, async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "Current and new password are required" });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({ message: "New password must be at least 8 characters" });
    }

    const user = await User.findById(req.user._id);
    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password updated" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
