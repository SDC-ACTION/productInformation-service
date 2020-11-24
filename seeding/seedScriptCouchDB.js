const { products } = require('../database/couchdb/models/index.js');
const { createNewProducts } = require('./seedScript.js');

const insertData = (productsInfo) => {
  productsInfo.forEach(product => {
    const insert = products.insert({

    })
  })
};

const seedData = async () => {
  const allProducts = await createNewProducts();
  insertData(allProducts);
}

seedData();