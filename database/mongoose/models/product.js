const mongoose = require('mongoose');
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';

mongoose.connect(`mongodb://${MONGO_HOST}/Product`)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));

const product = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true
  },
  description: String,
  title: String,
  brand: String,
  category: {
    name: String,
    age: String,
    player_Count: String,
  },
  specs: {
    part_Number: String,
    GTIN: Number
  }
});

const Product = mongoose.model('Product', product);

module.exports = {
  Product
}