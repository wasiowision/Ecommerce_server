const models = require("../models");
const Razorpay = require("razorpay");
const { promisify } = require("util");

const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.SECRET,
});

const orderServices = {
  async createOrder(req, res) {
    const { totalAmount } = req.body;
    console.log("Total Amount: ", totalAmount);
    console.log("type of total amount->", typeof totalAmount);
    const curr = "INR";

    try {
      const createOrderAsync = promisify(
        instance.orders.create.bind(instance.orders)
      );

      const order = await createOrderAsync({
        amount: Number(totalAmount) * 100,
        currency: curr,
        receipt: "order_rcptid_11",
      });

      const createdOrder = await models.Order.create(order);
      console.log("Order Created: ", createdOrder);

      return createdOrder;
    } catch (err) {
      console.error("Error in creating order: ", err);
      throw new Error("Error in creating order");
    }
  },

  async orderDetails(req, res) {
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.SECRET,
    });
    const { id } = req.body;
    if (!id) {
      throw "Order ID is required";
    }
    const order = await instance.payments.fetch(id);
    if (!order) {
      throw "Order not found";
    }
    return;
  },
};

module.exports = orderServices;
