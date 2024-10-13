// app/ApolloProvider.tsx

"use client"; // This must be a client component

import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient'; // Adjust path to where you defined your Apollo client

export default function CustomApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
