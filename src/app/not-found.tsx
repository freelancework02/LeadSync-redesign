import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
            <h2 className="text-6xl font-clash font-extrabold text-primary mb-4">404</h2>
            <h3 className="text-2xl font-bold text-black mb-4">Page Not Found</h3>
            <p className="text-slate-600 mb-8 max-w-md">
                The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
            >
                Go back home
            </Link>
        </div>
    );
}
