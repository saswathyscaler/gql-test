import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './config/db.js';
import typeDefs from './schema/typeDefs.js';  // Your GraphQL schema
import resolvers from './resolvers/index.js';  // Your resolvers

// Initialize express
const app = express();

// Connect to MongoDB
connectDB();

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // You can use this to pass in user authentication or other context
    const token = req.headers.authorization || '';
    // Perform token validation here if needed
    return { user: null }; // For now, no user context
  },
  debug: true, // Enable detailed error output during development
});

// Apply Apollo GraphQL middleware to the Express app
await server.start();
server.applyMiddleware({ app });

// Define a port for the Express server
const PORT = process.env.PORT || 4000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
