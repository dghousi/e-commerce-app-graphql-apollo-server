exports.Query = {
  products: (parent, args, context) => {
    return context.products
  },
  product: (parent, args, context) => {
    return context.products.find(product => product.id === args.id)
  },
  categories: () => {
    return context.categories
  },
  category: (parent, args, context) => {
    return context.categories.find(category => category.id === args.id)
  },
}
