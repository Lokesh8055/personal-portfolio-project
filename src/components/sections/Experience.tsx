import { experiences } from "@/data/experience";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/ui/ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <SectionTitle>Professional Experience</SectionTitle>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
