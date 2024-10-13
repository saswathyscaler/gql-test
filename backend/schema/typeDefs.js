import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    role: String!
  }

  type Task {
    id: ID!
    description: String!
    assignedTo: User!
    submittedBy: User!
    status: String!
  }

  type Query {
    getTasks: [Task]
    getUserTasks: [Task]
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    submitTask(description: String!, assignedTo: ID!): Task
    approveTask(taskId: ID!): Task
    rejectTask(taskId: ID!): Task
  }
`;

export default typeDefs;
