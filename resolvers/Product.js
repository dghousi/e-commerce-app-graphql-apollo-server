exports.Product = {
  category: (parent, args, context) => {
    return context.categories.find(
      category => category.id === parent.categoryId,
    )
  },
}
