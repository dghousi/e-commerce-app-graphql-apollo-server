const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
  type Query {
    hello: String
    numberOfBooks: Int
    price: Float
    isCool: Boolean
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'World!'
    },
    numberOfBooks: () => {
      return 55
    },
    price: () => {
      return 10.1
    },
    isCool: () => false,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({url}) => {
  console.log('Server is ready at: ' + url)
})
