import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
