import React from 'react';
import {Newspaper} from 'lucide-react';

const experiences = [
    {
        date: 'January 2023 — February 2026',
        title: 'Software Developer · Paycom',
        bullets: [
            'Led development of client facing pages with React and TypeScript to support high traffic volume, implementing advanced search, filter, and sort functionality.',
            'Developed robust APIs to integrate React frontend interfaces with PHP backend systems, optimizing large-scale data processing and improving overall system performance.',
            'Optimized backend data processing and SQL query performance, reducing server response times by 50% and significantly improving application scalability under load.',
            'Delivered production ready code in weekly sprints, collaborating in code reviews and QA cycles to ensure high quality, on-time releases.',
            'Investigated and debugged application bugs by analyzing logs, reviewing stack traces, and replicating errors.',
            'Collaborated with cross-functional teams to ensure timely delivery of project milestones.'
        ],
        // skills: ['React', 'TypeScript', 'PHP', 'SQL', 'Java', 'Spring Boot', 'AWS'],
        link: '#'
    },
    {
        date: 'May 2022 — August 2022',
        title: 'Software Developer Intern',
        bullets: [
            'Engineered a full stack internal analytics platform using React, TypeScript, and MySQL to track and visualize usage metrics for Paycom’s UI Library',
            'Transformed raw parsing data into interactive data visualizations, providing leadership with actionable insights into UI library adoption across engineering teams.',
            'Worked in an Agile environment to develop tracking systems for UI library usage, researching implementation patterns with senior engineers to improve frontend consistency and scalability.'
        ],
        // skills: ['React', 'Node.js', 'DynamoDB', 'TypeScript', 'SQl'],
        link: '#'
    },
    {
        date: 'June 2021 — August 2021',
        title: 'Information Technology Intern',
        bullets: [
            'Investigated and resolved technical discrepancies across network infrastructure, software systems, and peripheral devices to ensure department wide operational continuity.',
            'Provisioned and maintained proprietary software through regular updates and troubleshooting to support large scale user workflows.',
            'Provisioned and maintained proprietary software through regular updates and troubleshooting to support large scale user workflows.',
            'Mentored junior interns on technical best practices and debugging strategies, improving overall team productivity.'
        ],
        // skills: ['Java', 'Spring Boot', 'DynamoDB', 'Algorithms', 'Mathematics'],
        link: '#'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="mb-20">
            <div className="flex items-center gap-4 mb-12">
                <Newspaper className="w-8 h-8 text-[var(--foreground-hex)]" strokeWidth={1.5}/>
                <h3 className="text-3xl font-bold tracking-tight text-[var(--foreground-hex)]">Experience</h3>
            </div>
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 group">
                        <header
                            className="text-xs font-semibold uppercase tracking-wide text-[var(--foreground-hex)] opacity-50 pt-1">
                            {exp.date}
                        </header>

                        <div className="md:col-span-3">
                            <h3 className="text-xl font-bold text-[var(--foreground-hex)] group-hover:text-[var(--accent-purple-hex)] transition-colors">
                                <a href={exp.link} className="inline-flex items-baseline gap-1">
                                    {exp.title}
                                    {/*<span*/}
                                    {/*    className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>*/}
                                </a>
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i}
                                        className="text-sm leading-normal text-[var(--foreground-hex)] opacity-70 flex gap-2">
                                        <span className="text-[var(--accent-purple-hex)]">•</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            {/*<ul className="mt-6 flex flex-wrap gap-2">*/}
                            {/*    {exp.skills.map((skill) => (*/}
                            {/*        <li key={skill}*/}
                            {/*            className="flex items-center rounded-full bg-[var(--accent-purple-hex)] bg-opacity-10 px-3 py-1 text-xs font-medium leading-5 text-[var(--accent-purple-hex)]">*/}
                            {/*            {skill}*/}
                            {/*        </li>*/}
                            {/*    ))}*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;