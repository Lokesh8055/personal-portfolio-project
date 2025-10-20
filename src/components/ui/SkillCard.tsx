import React from "react";
import type { LucideProps } from "lucide-react";
import { Code, Briefcase, Award, GraduationCap } from "lucide-react";
import { SkillCategory } from "@/types";

const SkillCard = ({ category }: { category: SkillCategory }) => {
  type IconComponent = React.ComponentType<LucideProps>;

  const iconMap: Record<string, IconComponent> = {
    code: Code,
    briefcase: Briefcase,
    award: Award,
    "graduation-cap": GraduationCap,
  };

  type ColorStyles = {
    icon: string;
    bg: string;
    hover: string;
    text: string;
  };

  const colorMap: Record<string, ColorStyles> = {
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
        {category.skills.map((skill: string, i: number) => (
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

export default SkillCard;
