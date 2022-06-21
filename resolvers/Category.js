const {products} = require('./../products')
exports.Category = {
  products: (parent, args, _context) => {
    return products.filter(product => product.categoryId === parent.id)
  },
}
