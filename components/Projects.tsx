import {SquareTerminal} from 'lucide-react';
import {ReactNode} from "react";

const projects = [
    {
        year: '2026',
        title: 'Bookmark Manager',
        description: 'A full-stack link organization tool using AWS.',
        tags: ['Java', 'Spring Boot', 'AWS'],
        repo: 'https://github.com/BarclayRkts/Bookmark'
    },
    {
        year: '2026',
        title: 'Interactive Metronome',
        description: 'Real-time rhythm synchronization for musicians.',
        tags: ['React', 'Web Audio API', 'Python'],
        repo: 'https://github.com/BarclayRkts/Metronome'
    },
    {
        year: '2026',
        title: 'FlashCard App',
        description: 'A full-stack flashcard studying application using .NET.',
        tags: ['.NET', 'React', 'TypeScript', "C#"],
        repo: 'https://github.com/BarclayRkts/FlashCards'
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="mt-16">
            <div className="flex items-center gap-4 mb-8">
                <SquareTerminal className="w-8 h-8 text-accent" strokeWidth={1.5}/>
                <h3 className="text-3xl font-bold tracking-tight text-body">Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-surface border border-border rounded-lg p-5 flex flex-col aspect-[4/3] w-full transition-shadow hover:shadow-sm"
                    >
                        <div className="flex-1 overflow-hidden">
                            <span className="text-[13px] font-sans text-muted mb-1 block">{project.year}</span>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block"
                            >
                                <h4 className="text-lg font-bold text-[#a365b1] dark:text-accent mb-2 leading-tight">
                                    {project.title}
                                </h4>
                            </a>
                            <p className="text-[14px] text-muted leading-snug line-clamp-2 h-[2.5rem]">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-nowrap gap-1.5 mt-4 overflow-hidden">
                            {project.tags.map((tag) => (
                                <ProjectTag key={tag}>{tag}</ProjectTag>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ProjectTag({children}: { children: ReactNode }) {
    return (
        <span
            className="text-[10px] font-medium px-2 py-0.5
                       bg-accent/10 text-accent
                       dark:bg-accent/20 dark:text-accent-hover
                       rounded-md border border-accent/20
                       uppercase tracking-tight whitespace-nowrap shrink-0"
        >
            {children}
        </span>
    );
}