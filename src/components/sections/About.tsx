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
            Senior Frontend Engineer with 6+ years of experience architecting,
            scaling, and optimizing high-traffic React and TypeScript
            applications across education technology and consumer fintech.
            Proven track record leading end-to-end frontend modernization into
            Micro Frontends, building accessible learning and assessment
            interfaces, improving Core Web Vitals for 1M+ users, and championing
            AI-first engineering workflows with agentic tools such as Claude
            Code.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Education
            </h3>
            <p className="text-gray-300">
              B.Tech in Information Technology, Jerusalem College of
              Engineering, Chennai
            </p>
            <p className="text-gray-400">Aug 2015 - Apr 2019</p>
          </div>
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
