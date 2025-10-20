import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
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
