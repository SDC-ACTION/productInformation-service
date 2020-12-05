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

// const updateProduct = async (req, res) => {
//   const updatedProduct = req.body;

//   try {
//     await Product.updateOne({
//       product_id: updatedProduct.id,
//       $set: {
//         description: updatedProduct.description,
//         title: updatedProduct.title,
//         brand: updatedProduct.brand,
//         category: {
//           name: updatedProduct.name,
//           age: updatedProduct.age,
//           player_Count: updatedProduct.player_Count,
//         },
//         specs: {
//           part_Number: updatedProduct.part_Number,
//           GTIN: updatedProduct.GTIN
//         }
//       }
//     });
//     res.sendStatus(200);
//   } catch(err) {
//     res.sendStatus(500);
//     throw new Error(err);
//   }
// };

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
  saveProduct
  // updateProduct,
  // deleteProduct
};