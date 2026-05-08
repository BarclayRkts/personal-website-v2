import { SquareTerminal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import {ReactNode} from "react";

const projects = [
    {
        year: '2026',
        title: 'Bookmark Manager',
        description: 'Full-stack application utilizing Spring Boot, DynamoDB, and React.',
        links: { demo: '#', source: '#' }
    },
    {
        year: '2026',
        title: 'Interactive Metronome',
        description: 'Real-time synchronization web app with a responsive UI.',
        links: { article: '#', demo: '#', source: '#' }
    },
    {
        year: '2026',
        title: 'User Analytics Dashboard',
        description: 'Automated certification management and data error reduction.',
        links: { article: '#', demo: '#', source: '#' }
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="mt-16">
            <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                    <SquareTerminal className="w-8 h-8 text-accent" strokeWidth={1.5} />
                    <h3 className="text-3xl font-bold tracking-tight text-body">Projects</h3>
                </div>
                <p className="text-muted mb-10">Open-source projects I&#39;ve worked on over the years.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="bg-surface border-border hover:border-accent/30 transition-colors shadow-none">
                            <CardHeader className="pb-3">
                                <span className="text-xs font-mono text-muted mb-1">{project.year}</span>
                                <CardTitle className="text-xl font-bold text-accent">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted leading-relaxed mb-6 h-12">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.links.article && (
                                        <ProjectLink href={project.links.article}>Article</ProjectLink>
                                    )}
                                    {project.links.demo && (
                                        <ProjectLink href={project.links.demo}>Demo</ProjectLink>
                                    )}
                                    {project.links.source && (
                                        <ProjectLink href={project.links.source}>Source</ProjectLink>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link
            href={href}
            className="text-xs font-medium px-3 py-1.5 bg-button text-background rounded transition-colors hover:bg-accent"
        >
            {children}
        </Link>
    );
}