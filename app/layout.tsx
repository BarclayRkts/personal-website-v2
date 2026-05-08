import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
    title: "DeJa Barclay | Digital Garden",
    description: "Software Engineer passionate about building thoughtful, scalable solutions and contributing to projects.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="light">
        <body className="antialiased bg-background text-body">
        <div className="flex min-h-screen w-full justify-center">
            <div className="flex flex-col md:flex-row w-full max-w-[1200px]">
                <Navigation/>
                <main className="flex-1">
                    <div className="ml-8 md:ml-12 lg:ml-16 py-12 px-8 md:px-0 max-w-[800px]">
                        {children}
                    </div>
                </main>
            </div>
        </div>
        </body>
        </html>
    );
}