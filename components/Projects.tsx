import {SquareTerminal} from 'lucide-react';
import {ReactNode} from "react";

const projects = [
    {
        year: '2026',
        title: 'Bookmark Manager',
        description: 'A full-stack link organization tool using AWS.',
        tags: ['Java', 'Spring Boot', 'AWS', 'React'],
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
        title: 'Personal Website',
        description: 'Minimalist digital garden and portfolio site.',
        tags: ['Next.js', 'Tailwind', 'TypeScript'],
        repo: 'https://github.com/BarclayRkts/personal-website-v2'
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
                        className="bg-[#f2ecdc] border border-[#dcd6bc] rounded-lg p-5 flex flex-col aspect-[4/3] w-full transition-shadow hover:shadow-sm"
                    >
                        <div className="flex-1 overflow-hidden">
                            <span className="text-[13px] font-sans text-gray-500 mb-1 block">{project.year}</span>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block"
                            >
                                <h4 className="text-lg font-bold text-[#a365b1] mb-2 leading-tight">
                                    {project.title}
                                </h4>
                            </a>
                            <p className="text-[14px] text-gray-700 leading-snug line-clamp-2 h-[2.5rem]">
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
            className="text-[9px] font-bold px-2 py-1 bg-[#e3dbc5] text-[#555] border border-[#ccc5b0] rounded uppercase tracking-tighter whitespace-nowrap shrink-0"
        >
            {children}
        </span>
    );
}