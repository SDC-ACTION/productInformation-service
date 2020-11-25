const { products } = require('../database/couchdb/models/index.js');
const { createNewProducts } = require('./seedScript.js');

const insertData = (productsInfo) => {
  const savedProducts = [];

  productsInfo.forEach(product => {
    const insertProduct = products.insert({
      _id: product.product_id.toString(),
      description: product.description,
      title: product.title,
      brand: product.brand,
      name: product.category.name,
      age: product.category.age,
      player_Count: product.category.playerCount,
      part_Number: product.specs.part_Number,
      GTIN: product.specs.GTIN
    })
    savedProducts.push(insertProduct);
  })
  return Promise.all(savedProducts);
};

const seedData = async () => {
  try {
    const allProducts = await createNewProducts();
    await insertData(allProducts);
  } catch(err) {
    throw new Error(err);
  }
}

seedData()
  .then(() => {
    process.exit();
  })