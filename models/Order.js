const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  entity: { type: String, required: true },
  amount: { type: Number, required: true },
  amount_paid: { type: Number, required: true },
  amount_due: { type: Number, required: true },
  currency: { type: String, required: true },
  receipt: { type: String, required: true },
  offer_id: { type: String },
  status: { type: String, required: true },
  attempts: { type: Number, required: true },
  notes: { type: Array },
  created_at: { type: Number, required: true },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
