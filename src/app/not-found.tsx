import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! This page wandered off the map. 🚀
      </p>
      <p className="mt-2 text-gray-500">
        We couldn&rsquo;t find what you were looking for.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-primary px-6 py-2 text-white hover:bg-opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
