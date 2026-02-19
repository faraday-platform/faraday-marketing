import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-8">
        <span className="text-white font-bold text-xl font-mono">F</span>
      </div>
      <h1 className="text-4xl font-bold text-heading mb-4">Page Not Found</h1>
      <p className="text-muted mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-sm font-semibold text-accent-light hover:text-accent-lighter transition-colors"
      >
        &larr; Back to Home
      </Link>
    </main>
  );
}
