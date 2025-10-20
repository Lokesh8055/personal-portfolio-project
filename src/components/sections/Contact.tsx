import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  Phone,
  Code,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import SectionTitle from "@/components/ui/SectionTitle";

type ContactProps = {
  personalInfo: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    codewars: string;
    frontendmentor: string;
  };
};

const Contact = ({ personalInfo }: ContactProps) => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl w-full text-center">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-xl text-gray-300 mb-12">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about tech!
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition shadow-2xl"
          >
            <Mail className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">{personalInfo.email}</p>
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition shadow-2xl"
          >
            <Phone className="mx-auto mb-4 text-pink-400" size={32} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300">{personalInfo.phone}</p>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
          >
            <GithubIcon size={24} /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            <LinkedinIcon size={24} /> LinkedIn
          </a>
          <a
            href={personalInfo.codewars}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            <Code size={24} /> CodeWars
          </a>
          <a
            href={personalInfo.frontendmentor}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition"
          >
            <ExternalLink size={24} /> FrontendMentor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
