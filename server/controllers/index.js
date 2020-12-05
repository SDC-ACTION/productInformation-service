const lodash = require('lodash');
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

// const saveProduct = async (req, res) => {
//   const product = req.body;

//   const newProduct = new Product({
//     product_id: product.id,
//     description: product.description,
//     title: product.title,
//     brand: product.brand,
//     category: {
//       name: product.name,
//       age: product.age,
//       player_Count: product.player_Count
//     },
//     specs: {
//       part_Number: product.part_Number,
//       GTIN: product.GTIN
//     }
//   });

//   try {
//     await newProduct.save();
//     res.sendStatus(200);
//   } catch(err) {
//     res.sendStatus(500);
//     throw new Error(err);
//   }
// };

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
  getProduct
  // saveProduct,
  // updateProduct,
  // deleteProduct
};