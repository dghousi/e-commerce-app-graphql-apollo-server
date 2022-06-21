const {products} = require('./../products')
const {categories} = require('./../categories')

exports.Query = {
  products: () => {
    return products
  },
  product: (_parent, args, _context) => {
    return products.find(product => product.id === args.id)
  },
  categories: () => {
    return categories
  },
  category: (_parent, args, _context) => {
    return categories.find(category => category.id === args.id)
  },
}
