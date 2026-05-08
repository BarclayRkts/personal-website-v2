import ProjectsSection from '../components/Projects';
import IntroductionSection from '../components/Introduction';
import ExperienceSection from '../components/Experience';
import SkillsSection from "@/components/Skills";

export default function Home() {
    return (
        <>
            <IntroductionSection/>
            <ExperienceSection/>
            <SkillsSection/>
            <ProjectsSection/>
        </>
    );
}