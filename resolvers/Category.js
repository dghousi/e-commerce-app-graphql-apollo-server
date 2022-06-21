exports.Category = {
  products: (parent, args, context) => {
    return context.products.filter(product => product.categoryId === parent.id)
  },
}
