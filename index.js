const {ApolloServer, gql} = require('apollo-server')

const productsData = require('./products')

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean
  }
`
const resolvers = {
  Query: {
    products: () => {
      return productsData.products
    },
    product: (_parent, args, _context) => {
      return productsData.products.find(product => product.id === args.id)
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
