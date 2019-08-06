const router = require('express').Router();
const Order = require('../database/models/order.js');
const OrderItem = require('../database/models/orderItem.js');
const Session = require('../database/models/session.js');

// order table and add row to orderItem

// finding an order where the id matches the sessionId
router.get('/:sessionId', (req, res, next) => {
  Order.findOne({
    where: {
      id: req.params.sessionId,
    },
  }).then(order => res.json(order));
});

// finding an order
router.get('/:orderId/cart', (req, res, next) => {
  OrderItem.findAll({
    where: {
      orderId: req.params.orderId,
    },
  }).then(products => res.json(products));
});
// get route by UserId
router.get('/:userId/cart', (req, res, next) => {
  OrderItem.findAll({
    where: {
      orderId: req.params.userId,
    },
  }).then(products => res.json(products));
});

// add to cart route
router.post('/', (req, res, next) => {
  const orderId = parseInt(req.body.orderId, 10);
  const productId = parseInt(req.body.productId, 10);
  const quantity = parseInt(req.body.quantity, 10);
  const cartItem = { orderId, productId, quantity };
  OrderItem.findOrCreate(cartItem)
    .then(order => res.json(order))
    .catch(next);
});

// delete from cart route

// update quantity of items in cart

module.exports = router;
