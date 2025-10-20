import { Project } from "@/types";

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

export default ProjectCard;
