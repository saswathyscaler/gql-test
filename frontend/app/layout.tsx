// app/layout.tsx

import './globals.css'; // Your global styles
import CustomApolloProvider from './ApolloProvider'; // Import the provider

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomApolloProvider>
          {children} {/* Now all child components have access to Apollo Client */}
        </CustomApolloProvider>
      </body>
    </html>
  );
}
