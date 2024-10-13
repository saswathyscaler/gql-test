"use client"; // Mark this component as a Client Component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for routing

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      setIsLoggedIn(true);
    }
  }, [router]); // Include router in the dependency array

  if (!isLoggedIn) {
    return <p>Loading...</p>; // Show loading state while checking auth
  }

  return <h1>Welcome to your Dashboard!</h1>; // Render the dashboard content
}
