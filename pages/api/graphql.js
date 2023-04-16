import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import Test from '../../db/models/testModel';

const typeDefs = gql`
  type Test {
    name: String!
    email: String
    _id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Test!]!
    findPerson(name: String!): Test
  }
`;

const resolvers = {
  Query: {
    personCount: () => Test.collection.countDocuments(),
    allPersons: async () => Test.find({}),
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);
