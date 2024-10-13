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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 sm:p-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard!</h1>
      <p className="text-lg text-gray-600 mb-4">Here's an overview of your activity:</p>

      {/* Dashboard Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">User Statistics</h2>
          <p className="text-gray-500">Total Logins: 42</p>
          <p className="text-gray-500">Last Login: 2 days ago</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Recent Activity</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Logged in from a new device</li>
            <li>Updated profile information</li>
            <li>Changed password</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Notifications</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Welcome to your new account!</li>
            <li>Your settings have been updated.</li>
            <li>Check out our new features!</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Upcoming Events</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Webinar on Dashboard Features - Oct 20</li>
            <li>New Feature Launch - Nov 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
