"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation'; // Use next/navigation in the app directory

// Define the REGISTER mutation
const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password)
  }
`;

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await register({ variables: { username, password } });
      alert('Registration successful! Now you can login.');
      router.push('/login'); // Redirect to login page after successful registration
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
