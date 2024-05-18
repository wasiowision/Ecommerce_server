const services = require('../services');

const orderController = {
  async createOrder(req, res) {
    try {
      const order = await services.Order.createOrder(req, res);
      return res.status(201).json({ message: "Order created", order });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  },

  async orderDetails(req, res) {
    try {
      const orderDetails = await services.Order.orderDetails(req, res);
      return res.status(200).json({ message: "Order Details fetched", orderDetails });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  },
};

module.exports = orderController;
