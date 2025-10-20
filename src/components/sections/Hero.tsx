import { GithubIcon, LinkedinIcon, Mail, ChevronDown } from "lucide-react";

type HeroProps = {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    github: string;
    linkedin: string;
  };
  scrollToSection: (sectionId: string) => void;
};

const Hero = ({ personalInfo, scrollToSection }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center space-y-6">
        <div className="inline-block animate-bounce">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl">
            LP
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl text-purple-300">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
          >
            <GithubIcon size={20} /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            <LinkedinIcon size={20} /> LinkedIn
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition"
          >
            <Mail size={20} /> Contact Me
          </button>
        </div>
        <div className="pt-8 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
