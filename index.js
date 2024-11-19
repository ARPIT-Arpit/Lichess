// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the homepage of our Next.js app.</p>
      {/* Correct way to use Link component */}
      <Link href="/profile">Go to Profile</Link>
    </div>
  );
}
