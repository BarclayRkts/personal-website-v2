"use client"

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {SiRefinedgithub} from 'react-icons/si';
import {FaLinkedin} from 'react-icons/fa';
import {SquareTerminal, User, Newspaper, MailWarning, Terminal, Code2, Sun, Moon} from 'lucide-react';
import {useTheme} from "next-themes";

const mainLinks = [
    {href: '#about', label: 'Page Me', icon: User},
    {href: '#projects', label: 'Projects', icon: SquareTerminal},
    {href: '#experience', label: 'Experience', icon: Newspaper},
    {href: '#skills', label: 'Technical Skills', icon: Code2},
];

const connectLinks = [
    {href: 'https://www.linkedin.com/in/deja-barclay-b3a9a0160/', label: 'LinkedIn', icon: FaLinkedin},
    {href: 'https://github.com/BarclayRkts', label: 'GitHub', icon: SiRefinedgithub},
    {href: 'mailto:dejabarclay1999@gmail.com', label: 'Email', icon: MailWarning},
];

const Navigation = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timeout);
    }, []);

    if (!mounted) return null;

    return (
        <nav
            className="w-full md:w-64 flex-shrink-0 bg-background md:sticky border-r border-border md:top-0 md:h-screen p-8 md:pt-16">
            <div className="flex items-center gap-3 mb-12">
                <Terminal className="w-6 h-6 text-accent flex-shrink-0"/>

                <Link href="/" className="whitespace-nowrap">
                    <h1 className="text-xl font-medium text-body hover:underline">
                        DeJa Barclay
                    </h1>
                </Link>
                {mounted && (
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="ml-auto p-2 rounded-full hover:bg-accent/10 transition-colors text-muted hover:text-accent"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                )}
            </div>
            <div className="mb-12">
                <h2 className="text-xs font-bold uppercase text-muted tracking-widest mb-4">About Me</h2>
                <p className="text-sm leading-relaxed text-muted">
                    I&#39;m a <Link href="/experience" className="text-body font-medium hover:underline">Software
                    Engineer</Link>, dedicated to building thoughtful, scalable solutions and solving challenging technical problems. This is my digital garden. 🌱
                </p>
            </div>
            <div className="space-y-4 mb-16">
                {mainLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            className="flex items-center gap-3.5 group p-1 -ml-1 rounded-md hover:bg-button transition-colors"
                        >
                            <Icon className="w-5 h-5 text-muted group-hover:text-accent" strokeWidth={1.5}/>
                            <span className="font-medium text-body">{link.label}</span>
                        </Link>
                    );
                })}
            </div>
            <div>
                <h2 className="text-xs font-bold uppercase text-muted tracking-widest mb-5">Stay Connected</h2>
                <div className="space-y-4">
                    {connectLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                className="flex items-center gap-4 text-sm group text-muted hover:text-body transition-colors"
                            >
                                <Icon className="w-4 h-4 text-muted group-hover:text-accent"/>
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;