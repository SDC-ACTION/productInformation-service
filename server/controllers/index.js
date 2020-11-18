const lodash = require('lodash');
const { Product } = require('../../database/models/product.js');

const getTitle = async (req, res) => {
  const id = req.params.product_id;

  try {
    const productInfo = await Product.find({product_id: id});
    const productDetails = lodash.omit(productInfo[0]._doc, ['_id', '__v']);
    res.status(200).send(productDetails);
  } catch(err) {
    throw new Error(err);
    res.sendStatus(500);
  }
}

module.exports = {
  getTitle
};