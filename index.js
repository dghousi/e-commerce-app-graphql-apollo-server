const {ApolloServer, gql} = require('apollo-server')

const productsData = require('./products')

const typeDefs = gql`
  type Query {
    hello: String!
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean
  }
`
const resolvers = {
  Query: {
    hello: () => {
      return 'Hello World!'
    },
    products: () => {
      return productsData.products
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({url}) => {
  console.log('Server is ready at: ' + url)
})
