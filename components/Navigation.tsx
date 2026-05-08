import React from 'react';
import Link from 'next/link';
import {SiRefinedgithub} from 'react-icons/si';
import {FaLinkedin} from 'react-icons/fa';
import {SquareTerminal, User, Newspaper, MailWarning, Terminal, Code2} from 'lucide-react';

const mainLinks = [
    {href: '#about', label: 'Page Me', icon: User},
    {href: '#experience', label: 'Experience', icon: Newspaper},
    {href: '#skills', label: 'Technical Skills', icon: Code2},
    {href: '#projects', label: 'Projects', icon: SquareTerminal},
];

const connectLinks = [
    {href: '/linkedIn', label: 'LinkedIn', icon: FaLinkedin},
    {href: '/GitHub', label: 'GitHub', icon: SiRefinedgithub},
    {href: '/Email', label: 'Email', icon: MailWarning},
];

const Navigation = () => {
    return (
        <nav className="w-full md:w-64 flex-shrink-0 bg-background md:sticky border-r border-border md:top-0 md:h-screen p-8 md:pt-16">
            <div className="flex items-center gap-3 mb-12">
                <Terminal className="w-6 h-6 text-accent"/>
                <Link href="/">
                    <h1 className="text-xl font-medium text-body hover:underline">DeJa Barclay</h1>
                </Link>
                <div className="flex gap-1.5 ml-auto">
                    <span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-xs font-bold uppercase text-muted tracking-widest mb-4">About Me</h2>
                <p className="text-sm leading-relaxed text-muted">
                    I&#39;m a <Link href="/experience" className="text-body font-medium hover:underline">Software
                    Engineer</Link>, amateur guitarist, and photography enthusiast. This is my digital garden. 🌱
                </p>
            </div>
            <div className="space-y-4 mb-16">
                {mainLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
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