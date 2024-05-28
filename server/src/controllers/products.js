const Product = require('../models/products')
const getListOfProducts =  async (req, res)=> {
    const data = await Product.find()
    res.send(data)
  }

const postProduct =  function (req, res) {
    Product.create(req.body)
    res.send("ok")
  }

module.exports = {getListOfProducts,postProduct}
