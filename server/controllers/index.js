const { pool } = require('../../database/postgres/model/index.js');

const getProduct = async (req, res) => {
  const id = req.params.product_id;
  const query = {
    text: 'SELECT * FROM information WHERE id = $1',
    values: [id]
  }

  try {
    let productInfo = await pool.query(query);
    res.status(200).send(productInfo.rows[0]);
  } catch(err) {
    res.sendStatus(500);
    throw new Error(err);
  }
}

const saveProduct = async (req, res) => {
  const product = req.body;
  const insert = {
    text: 'INSERT INTO INFORMATION (description, title, brand, name, age, player_Count, part_Number, GTIN) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    values: [product.description, product.title, product.brand, product.name, product.age, product.player_Count, product.part_Number, product.GTIN]
  }

  try {
    await pool.query(insert);
    res.sendStatus(201);
  } catch(err) {
    res.sendStatus(500);
    throw new Error(err);
  }
}

const updateProduct = async (req, res) => {
  const updatedProduct = req.body;
  const update = {
    text: 'UPDATE information SET description = $2, title = $3, brand = $4, name = $5, age = $6, player_Count = $7, part_Number = $8, GTIN = $9 WHERE id = $1',
    values: [updatedProduct.id, updatedProduct.description, updatedProduct.title, updatedProduct.brand, updatedProduct.name, updatedProduct.age, updatedProduct.player_Count, updatedProduct.part_Number, updatedProduct.GTIN]
  }

  try {
    await pool.query(update);
    res.sendStatus(200);
  } catch(err) {
    res.sendStatus(500);
    throw new Error(err);
  }
}

// const deleteProduct = async (req, res) => {
//   const id = Number(req.body.id);

//   try {
//     await Product.deleteOne({"product_id": id});
//     res.sendStatus(200);
//   } catch(err) {
//     res.sendStatus(500);
//     throw new Error(err);
//   }
// };

module.exports = {
  getProduct,
  saveProduct,
  updateProduct,
  // deleteProduct
};