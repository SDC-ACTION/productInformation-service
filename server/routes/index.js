const router = require('express').Router();
const controller = require('../controllers');

router.get('/products/:product_id', controller.getProduct);

// router.post('/products', controller.saveProduct);

// router.put('/products', controller.updateProduct);

// router.delete('/products', controller.deleteProduct);

module.exports = router;