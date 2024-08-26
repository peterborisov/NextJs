import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    user(name: String): User
    users: [User]
  }

  type User {
    name: String
  }
`;
