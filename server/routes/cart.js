const router = require('express').Router();
// const Order = require('../database/models/order.js');
// const Product = require('../database/models/Product.js');
const OrderItem = require('../database/models/orderItem.js');
// const Session = require('../database/models/session.js');

router.get('/:orderId', (req, res, next) => {
  OrderItem.findAll({
    where: {
      orderId: req.params.orderId,
    },
  })
    .then(cart => res.json(cart))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const orderId = parseInt(req.body.orderId, 10);
  const productId = parseInt(req.body.productId, 10);
  const quantity = parseInt(req.body.quantity, 10);
  const cartItem = { orderId, productId, quantity };
  OrderItem.findOrCreate(cartItem)
    .then(order => res.json(order))
    .catch(next);
});
module.exports = router;
// everything in cart always in order items
// route is orderItems/id
