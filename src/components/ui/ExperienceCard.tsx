import { Experience } from "@/types";

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

export default ExperienceCard;
