import { MapPin, Phone, Mail } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

type AboutProps = {
  personalInfo: {
    location: string;
    phone: string;
    email: string;
  };
};

const About = ({ personalInfo }: AboutProps) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl">
        <SectionTitle>About Me</SectionTitle>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Front-End Engineer with 6+ years of experience building scalable,
            high-performance, and accessible web applications using React,
            Next.js, TypeScript, and Redux. My work focuses on crafting modular,
            maintainable UI systems that merge engineering precision with
            exceptional user experience. My interest in front-end engineering
            grew from realizing how design and code together shape how people
            experience technology. Over time, I’ve deepened my expertise in
            component-driven architecture, state management, and performance
            optimization—delivering products that are fast, consistent, and
            visually refined. I’m skilled in building design systems,
            integrating APIs, and implementing robust testing workflows using
            Jest and React Testing Library. I thrive in agile teams, enjoy
            mentoring developers, and contribute to clean, CI/CD-enabled
            pipelines that enhance reliability and delivery speed. Worked on
            AI-driven development workflows and zero-touch automation to
            accelerate front-end productivity. My goal is to build scalable,
            performant, and delightful user experiences that combine design
            clarity with engineering excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 text-purple-300">
              <MapPin size={20} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-purple-300">
              <Phone size={20} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-purple-300">
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
