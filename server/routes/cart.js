const router = require('express').Router();
const Order = require('../database/models/order.js');
const OrderItem = require('../database/models/orderItem.js');
const Session = require('../database/models/session.js');
const Product = require('../database/models/product');

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

// finding an orderItem using orderId
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
// router.get('/:userId/cart', (req, res, next) => {
//   OrderItem.findAll({
//     where: {
//       orderId: req.params.userId,
//     },
//   }).then(products => res.json(products));
// });

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
router.delete('/:productId', (req, res, next) => {
  // deletiong from order items not the product table
  Product.findByPk(req.params.productId).then(product => res.send(product.destroy()));
});

// update quantity of items in cart

module.exports = router;
