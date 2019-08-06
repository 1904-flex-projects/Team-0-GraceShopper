const router = require('express').Router();
const Order = require('../database/models/order.js');
const OrderItem = require('../database/models/orderItem.js');

// order table and add row to orderItem

// finding an order where the id matches the sessionId. gives the orders associated with the sessionId
router.get('/:sessionId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        sessionId: req.params.sessionId,
      },
    });
    const orders = await OrderItem.findAll({
      where: {
        orderId: order.id,
      },
    });
    res.send(orders);
  } catch (e) {
    next(e);
  }
});

// returns order based on orderId being passed in. Finds out which items belongs to cart
router.get('/:orderId/cart', async (req, res, next) => {
  try {
    const order = await OrderItem.findAll({
      where: {
        orderId: req.params.orderId,
      },
    });
    res.json(order);
  } catch (e) {
    next(e);
  }
});

// get route by UserId
router.get('/:userId/user', async (req, res, next) => {
  try {
    const products = await OrderItem.findAll({
      where: {
        orderId: req.params.userId,
      },
    });
    res.json(products);
  } catch (e) {
    next(e);
  }
});

// add to cart route
router.post('/:orderId', async (req, res, next) => {
  try {
    // orderId, productId comes from req.body. quantity one by default
    const orderId = parseInt(req.body.orderId, 10);
    const productId = parseInt(req.body.productId, 10);
    const quantity = parseInt(req.body.quantity, 10);
    const cartItem = { orderId, productId, quantity };
    const order = await OrderItem.findOrCreate(cartItem);
    res.json(order);
  } catch (e) {
    next(e);
  }
});

// delete from cart route
router.delete('/', async (req, res, next) => {
  try {
    const orderId = parseInt(req.body.orderId, 10);
    const productId = parseInt(req.body.productId, 10);
    const item = await OrderItem.findOne({
      where: {
        orderId,
        productId,
      },
    });
    res.send(item.destroy());
  } catch (e) {
    next(e);
  }
});

// update quantity of items in cart with put route

router.put('/', async (req, res, next) => {
  try {
    const orderId = parseInt(req.body.orderId, 10);
    const productId = parseInt(req.body.productId, 10);
    const quantity = parseInt(req.body.quantity, 10);
    const item = await OrderItem.findOne({
      where: {
        orderId,
        productId,
      },
    });
    res.json(item.update(quantity));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
