const {ApolloServer, gql} = require('apollo-server')

const productsData = require('./products')
const categoriesData = require('./categories')

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
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

  type Category {
    id: ID!
    name: String!
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
    categories: () => {
      return categoriesData.categories
    },
    category: (_parent, args, _context) => {
      return categoriesData.categories.find(category => category.id === args.id)
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
