const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  // GET /products
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 5 });
    return res.json(products);
  },
  // GET /products/:id
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
  // POST /products
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },
  // PUT /products/:id
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  },
  // DELETE /products/:id
  async destroy(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    return res.send();
  }
};
