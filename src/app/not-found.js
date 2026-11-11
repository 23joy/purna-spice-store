import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F3E8] px-4 text-center">
            <h1 className="text-8xl font-bold text-[#7B2024]">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-[#7B2024]">
                Page Not Found!
            </h2>

            <p className="mt-3 text-[#65483A]">
                দুঃখিত! তুমি যে পেজটি খুঁজছ, সেটি খুঁজে পাওয়া যায়নি।
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-[#7B2024] px-6 py-3 text-white transition "
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;