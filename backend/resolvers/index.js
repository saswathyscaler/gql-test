import authResolvers from './auth.js';
import taskResolvers from './task.js';

const resolvers = {
  Query: {
    ...taskResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...taskResolvers.Mutation,
  },
};

export default resolvers;
