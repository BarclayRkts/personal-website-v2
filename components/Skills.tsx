import React from 'react';
import { Code2 } from 'lucide-react';

const skillCategories = [
    { name: "Languages", skills: ["PHP", "React", "Python", "C++", "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"] },
    { name: "APIs", skills: ["RESTful APIs", "GraphQL"] },
    { name: "Frameworks & Libraries", skills: ["React.js", "Next.js", "Node.js", "Redux", "Selenium", "Spring Boot"] },
    { name: "Databases", skills: ["MySQL", "PostgreSQL", "Microsoft SQL Server", "MongoDB", "Google Firebase"] },
    { name: "Performance", skills: ["Splunk", "Postman", "PageSpeed Insights"] },
    { name: "Tools", skills: ["AWS", "Git", "Jira", "Confluence", "MySQL Workbench", "Visual Studio", "PhpStorm"] }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="mt-16">
            <div className="flex items-center gap-4 mb-8">
                <Code2 className="w-8 h-8 text-accent" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold tracking-tight text-body">Technical Skills</h3>
            </div>

            <div className="space-y-8">
                {skillCategories.map((category) => (
                    <div key={category.name} className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted">
                            {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-sm font-medium bg-surface border border-border text-body rounded-md shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}