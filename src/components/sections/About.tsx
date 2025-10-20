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
            Front-End Engineer with 5+ years of experience delivering scalable,
            high-performance web applications using React, TypeScript, and
            modern front-end tooling. Proven success improving load times by up
            to 40% and scaling products to 1M+ users.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Adept at building reusable component libraries, optimizing UI/UX,
            and mentoring junior developers in agile, test-driven environments.
            Currently contributing to education technology platforms at
            PowerSchool, supporting over 60 million students worldwide.
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
