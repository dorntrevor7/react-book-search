const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    email: String
    username: String
    password: String
    savedBooks: [Book]
  }
  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    books: [Book]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
  }
  # type Category {
  #   _id: ID
  #   name: String
  # }

  # type Product {
  #   _id: ID
  #   name: String
  #   description: String
  #   image: String
  #   quantity: Int
  #   price: Float
  #   category: Category
  # }

  # type Order {
  #   _id: ID
  #   purchaseDate: String
  #   products: [Product]
  # }

  # type User {
  #   _id: ID
  #   firstName: String
  #   lastName: String
  #   email: String
  #   orders: [Order]
  # }

  # type Checkout {
  #   session: ID
  # }

  # type Auth {
  #   token: ID
  #   user: User
  # }

  # type Query {
  #   products(category: ID, name: String): [Product]
  #   product(_id: ID!): Product
  #   user: User
  #   order(_id: ID!): Order
  #   checkout(products: [ID]!): Checkout
  # }

  # type Mutation {
  #   addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  #   addOrder(products: [ID]!): Order
  #   updateUser(firstName: String, lastName: String, email: String, password: String): User
  #   updateProduct(_id: ID!, quantity: Int!): Product
  #   login(email: String!, password: String!): Auth
  # }
`;

module.exports = typeDefs;
