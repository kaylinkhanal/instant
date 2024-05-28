const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String, // String is shorthand for {type: String}
  price: Number,
  description: String,
  imageUrl: String,
  stockQuantity: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product
