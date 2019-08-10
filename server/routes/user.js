const router = require('express').Router();
const User = require('../database/models/user');
const Order = require('../database/models/order');

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch((e) => {
      console.error('error in all users route', e);
      next(e);
    });
});

router.get('/:id/orders', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.params.id },
    });
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
