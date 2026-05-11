import React from 'react';
import Link from "next/link";
import {MailWarning, User} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

const Introduction = () => {
    return (
        <header className="flex flex-col-reverse md:flex-row items-start justify-start gap-12 mb-20">
            <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-body">Hey, I&#39;m DeJa!</h2>
                <p className="text-lg leading-relaxed text-muted max-w-xl">
                    I’m a software engineer passionate about building thoughtful, scalable solutions and contributing to
                    projects. With a background in professional development, I enjoy turning ideas into reliable,
                    real-world applications.
                </p>

                <div className="flex gap-4 pt-4">
                    <Link href='https://www.linkedin.com/in/deja-barclay-b3a9a0160/'
                          target="_blank"
                          className="flex items-center gap-2.5 px-6 py-2.5 border border-border rounded-md font-medium hover:bg-button transition text-body">
                        <User className="w-4 h-4 text-accent"/>
                        LinkedIn
                    </Link>
                    <Link
                        href="/resume"
                        className="flex items-center gap-2.5 px-6 py-2.5 border border-border rounded-md font-medium hover:bg-button transition-all text-body"
                    >
                        <MailWarning className="w-4 h-4 text-accent"/>
                        Resume
                    </Link>
                </div>
            </div>

            <div className="relative md:top-15 flex-shrink-0">
                <div
                    className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex items-center justify-center bg-surface">
                    <Avatar className="h-full w-full">
                        <AvatarImage
                            src="/images/avatar5.png"
                            className="object-cover"
                            alt="Avatar of DeJa Barclay"
                        />
                        <AvatarFallback className="bg-surface text-body">DB</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}

export default Introduction;