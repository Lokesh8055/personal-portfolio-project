import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

// Types
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

interface Project {
  name: string;
  description: string;
  tech: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

// Data
const personalInfo = {
  name: "Lokesh Padmanabhan",
  title: "Senior Front End Engineer (React)",
  tagline:
    "5+ years crafting scalable, high-performance web applications. Scaled products to 1M+ users with 40% performance improvements.",
  location: "Bengaluru, India",
  phone: "+91 8682864241",
  email: "lokeshpadmanabhan98@hotmail.com",
  github: "https://github.com/Lokesh8055",
  linkedin: "https://linkedin.com/in/lokesh-padmanabhan/",
  codewars: "https://www.codewars.com/users/Lokesh2498",
  frontendmentor: "https://www.frontendmentor.io/profile/Lokesh8055",
};

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "PowerSchool Group LLC",
    location: "Bengaluru, India",
    period: "Jul 2025 - Current",
    highlights: [
      "Contributing to scalable front-end solutions for education platforms with AI-driven personalization",
      "Collaborating on performance optimization and new feature rollouts",
      "Driving adoption of reusable component libraries and accessibility-first design",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Paytm Service Private Limited",
    location: "Bengaluru",
    period: "May 2024 - Jul 2025",
    highlights: [
      "Scaled React-based SIP products to over 1M users",
      "Reduced load times by 20% via lazy loading and React Suspense",
      "Built Hawkeye Dashboard for real-time customer issue tracking",
      "Increased bug fix rate by 30% through code reviews and AI-assisted debugging",
    ],
  },
  {
    title: "Software Engineer",
    company: "One 97 Communications Limited",
    location: "Remote",
    period: "Oct 2022 - May 2024",
    highlights: [
      "Designed responsive UI for multi-platform Paytm Finance modules",
      "Mentored junior developers on React best practices",
      "Streamlined source control workflows via Git branching",
    ],
  },
  {
    title: "Software Engineer",
    company: "Wipro Limited",
    location: "Remote",
    period: "Jan 2020 - Feb 2022",
    highlights: [
      "Delivered production-ready UIs for Tesla and UBS Group AG",
      "Participated in agile development processes",
      "Refactored legacy code bases for improved maintainability",
    ],
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    color: "purple",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "briefcase",
    color: "pink",
    skills: ["React", "Redux Toolkit", "Vue.js", "Next.js", "SCSS"],
  },
  {
    title: "Tools & Testing",
    icon: "award",
    color: "blue",
    skills: ["Git", "Webpack", "Jest", "Figma", "VS Code", "Lighthouse"],
  },
  {
    title: "AI & Productivity",
    icon: "graduation-cap",
    color: "green",
    skills: ["ChatGPT", "GitHub Copilot", "Cursor", "Claude"],
  },
];

const projects: Project[] = [
  {
    name: "Daily SIP & Monthly SIP",
    description: "Scaled to 1M+ users with 20% faster load times",
    tech: "React, Redux, TypeScript",
  },
  {
    name: "Hawkeye Dashboard",
    description: "Real-time customer issue monitoring system",
    tech: "React, WebSockets, Chart.js",
  },
  {
    name: "Tax Harvesting Platform",
    description: "Multi-platform finance module with responsive design",
    tech: "React, SCSS, Figma",
  },
  {
    name: "Health Insurance Flow",
    description: "Pre-quote to payment journey with 70%+ test coverage",
    tech: "React, Jest, RTL",
  },
];

// UI Components
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    {children}
  </h2>
);

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl hover:transform hover:scale-105 transition duration-300">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-purple-300">
          {experience.title}
        </h3>
        <p className="text-xl text-gray-300">{experience.company}</p>
      </div>
      <div className="mt-2 md:mt-0 text-right">
        <p className="text-pink-400">{experience.period}</p>
        <p className="text-gray-400">{experience.location}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {experience.highlights.map((highlight, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-300">
          <span className="text-purple-400 mt-1">▹</span>
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const iconMap: Record<string, any> = {
    code: Code,
    briefcase: Briefcase,
    award: Award,
    "graduation-cap": GraduationCap,
  };

  const colorMap: Record<string, any> = {
    purple: {
      icon: "text-purple-400",
      bg: "bg-purple-900/50",
      hover: "hover:bg-purple-800/50",
      text: "text-purple-200",
    },
    pink: {
      icon: "text-pink-400",
      bg: "bg-pink-900/50",
      hover: "hover:bg-pink-800/50",
      text: "text-pink-200",
    },
    blue: {
      icon: "text-blue-400",
      bg: "bg-blue-900/50",
      hover: "hover:bg-blue-800/50",
      text: "text-blue-200",
    },
    green: {
      icon: "text-green-400",
      bg: "bg-green-900/50",
      hover: "hover:bg-green-800/50",
      text: "text-green-200",
    },
  };

  const Icon = iconMap[category.icon];
  const colors = colorMap[category.color];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Icon className={colors.icon} size={28} />
        <h3 className="text-2xl font-bold">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className={`px-4 py-2 ${colors.bg} rounded-lg ${colors.text} ${colors.hover} transition`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-bold text-purple-300 mb-3">{project.name}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.split(", ").map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-purple-900/50 rounded text-sm text-purple-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// Main Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LP
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-purple-400 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
              <Github size={20} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              <Linkedin size={20} /> LinkedIn
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

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-4xl">
          <SectionTitle>About Me</SectionTitle>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Front-End Engineer with 5+ years of experience delivering
              scalable, high-performance web applications using React,
              TypeScript, and modern front-end tooling. Proven success improving
              load times by up to 40% and scaling products to 1M+ users.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Adept at building reusable component libraries, optimizing UI/UX,
              and mentoring junior developers in agile, test-driven
              environments. Currently contributing to education technology
              platforms at PowerSchool, supporting over 60 million students
              worldwide.
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

      {/* Experience Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl w-full">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-4xl w-full text-center">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities, interesting
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
              <Github size={24} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              <Linkedin size={24} /> LinkedIn
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

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm py-8 text-center border-t border-slate-800">
        <p className="text-gray-400">
          © 2025 Lokesh Padmanabhan. Built with React, TypeScript & Tailwind CSS
        </p>
        <p className="text-gray-500 text-sm mt-2">
          B.Tech - Information Technology | Jerusalem College of Engineering,
          Chennai
        </p>
      </footer>
    </div>
  );
}
