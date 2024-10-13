import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to Home Page</h1>

      {/* Links to the login and register pages */}
      <div className="flex gap-4">
        <Link href="/login" className="text-blue-500">
          Go to Login
        </Link>
        <Link href="/register" className="text-blue-500">
          Go to Register
        </Link>
      </div>
    </div>
  );
}
