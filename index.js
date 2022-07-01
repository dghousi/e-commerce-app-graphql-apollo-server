const {ApolloServer} = require('apollo-server')

const {typeDefs} = require('./schema')
const {Query} = require('./resolvers/Query')
const {Category} = require('./resolvers/Category')
const {Product} = require('./resolvers/Product')
const {Review} = require('./resolvers/Review')

const {products} = require('./products')
const {categories} = require('./categories')
const {reviews} = require('./reviews')

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Review
  },
  context: {
    products,
    categories,
    reviews
  },
})

server.listen().then(({url}) => {
  console.log('Server is ready at: ' + url)
})
