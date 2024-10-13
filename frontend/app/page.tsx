import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to the Home Page </h1>

      {/* Links to the login and register pages */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/login" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow transition duration-200 hover:bg-blue-600">
          Go to Login
        </Link>
        <Link href="/register" className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow transition duration-200 hover:bg-green-600">
          Go to Register
        </Link>
      </div>
    </div>
  );
}
