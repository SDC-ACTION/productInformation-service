const { pool } = require('../../database/postgres/model/index.js');
const redis = require('redis');

const client = redis.createClient({port: 6379});

client.on('error', err => console.log(`Error: ${err}`));

const getProduct = async (req, res) => {
  const id = req.params.product_id;
  const query = {
    text: 'SELECT * FROM information WHERE id = $1',
    values: [id]
  }

  client.get(id, async (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else if (data) {
      res.status(200).send(data);
    } else {
        try {
          let productInfo = await pool.query(query);
          client.set(id, JSON.stringify(productInfo.rows[0]));
          res.status(200).send(productInfo.rows[0]);
        } catch(err) {
          res.sendStatus(500);
          console.log(`Failed to find product due to ${err}`);
        }
    }
  })

  // try {
  //   let productInfo = await pool.query(query);
  //   res.status(200).send(productInfo.rows[0]);
  // } catch(err) {
  //   res.sendStatus(500);
  //   console.log(`Failed to find product due to ${err}`);
  // }
};

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
    console.log(`Failed to save product due to ${err}`);
  }
};

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
    console.log(`Failed to update product due to ${err}`);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.body.id;
  const deleteProduct = {
    text: 'DELETE FROM information WHERE id = $1',
    values: [id]
  }

  try {
    await pool.query(deleteProduct);
    res.sendStatus(200);
  } catch(err) {
    res.sendStatus(500);
    console.log(`Failed to delete product due to ${err}`);
  }
};

module.exports = {
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct
};