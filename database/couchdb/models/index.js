const [user, password] = ['admin', 'admin']
const nano = require('nano')(`http://${user}:${password}@localhost:5984`);

const products = nano.db.use('products', () => {
  console.log('Connected to products database');
});

module.exports = {
  products
}