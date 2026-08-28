const mongoose = require("mongoose");

// _id: false + an explicit id keeps the client-generated id (genId() in
// account.jsx) as the only identifier, instead of juggling that alongside
// a separate Mongo-assigned subdocument _id.
const AddressSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    label: { type: String, default: "" },
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    zip: { type: String, default: "" },
    country: { type: String, default: "" },
  },
  { _id: false }
);

// Only the last 4 digits are ever stored - this is never a full PAN.
const PaymentMethodSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    type: { type: String, default: "Visa" },
    last4: { type: String, required: true },
    name: { type: String, default: "" },
    expMonth: { type: String, default: "" },
    expYear: { type: String, default: "" },
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    phone: { type: String, default: "" },
    birthday: { type: String, default: "" },
    country: { type: String, default: "" },
    addresses: { type: [AddressSchema], default: [] },
    paymentMethods: { type: [PaymentMethodSchema], default: [] },
    twoFactorEnabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
