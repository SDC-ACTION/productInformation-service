const router = require('express').Router();
const controller = require('../controllers');

router.get('/products/:product_id', controller.getTitle);

module.exports = router;