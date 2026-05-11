import React from 'react';
import Link from 'next/link'; // 1. Import Link

const ResumePage = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-background">
            <div className="p-4 border-b border-border">
                <Link
                    href="/"
                    className="text-sm font-medium text-accent hover:underline"
                >
                    ← Back to Portfolio
                </Link>
            </div>

            <div className="flex-1 w-full h-full">
                <iframe
                    src="/DeJaBarclayResume.pdf"
                    className="w-full h-full border-none"
                    title="DeJa Barclay Resume"
                />
            </div>
        </div>
    );
}

export default ResumePage;