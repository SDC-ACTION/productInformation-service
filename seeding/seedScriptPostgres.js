const { pool } = require('../database/postgres/model/index.js');
const { createNewProducts } = require('./seedScript.js');

const insertData = productList => {
  const insert = 'INSERT INTO INFORMATION (description, title, brand, name, age, player_Count, part_Number, GTIN) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
  const savedProducts = [];

  productList.forEach(product => {
    const saveProduct = new Promise((resolve, reject) => {
      pool.connect((err, client, done) => {
        client.query(insert, [product.description, product.title, product.brand, product.category.name, product.category.age, product.category.playerCount, product.specs.part_Number, product.specs.GTIN], err => {
          err ? reject(err) : resolve();
          done();
        })
      })
    })
    savedProducts.push(saveProduct);
  })
  return Promise.all(savedProducts);
}

const seedData = async () => {
  try {
    const products = await createNewProducts();
    await insertData(products).catch(err => console.log(err));
  } catch(err) {
    throw new Error(err);
  }
};

seedData()
  .then(() => {
    process.exit();
  });