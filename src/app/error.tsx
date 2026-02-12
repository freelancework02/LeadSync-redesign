"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 px-6 text-center">
            <h2 className="text-3xl font-clash font-bold text-slate-900 dark:text-white mb-4">Something went wrong!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                An unexpected error occurred while rendering this page.
            </p>
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-4 rounded-lg mb-8 text-left overflow-auto max-w-full">
                <code className="text-xs text-red-600 dark:text-red-400">
                    {error.message || "Unknown error"}
                </code>
            </div>
            <button
                onClick={() => reset()}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
            >
                Try again
            </button>
        </div>
    );
}
