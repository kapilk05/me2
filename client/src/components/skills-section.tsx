import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { name: "CSS", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "TypeScript", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
      { name: "Python", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      { name: "R", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "SASS", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    ],
  },
  {
    title: "Libraries and Frameworks",
    skills: [
      { name: "React", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "Next.js", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
      { name: "Solid.js", color: "bg-blue-400/20 text-blue-300 border-blue-400/30" },
      { name: "React Router DOM", color: "bg-orange-400/20 text-orange-300 border-orange-400/30" },
      { name: "Redux", color: "bg-purple-600/20 text-purple-300 border-purple-600/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
      { name: "MUI", color: "bg-blue-700/20 text-blue-300 border-blue-700/30" },
      { name: "Framer Motion", color: "bg-pink-600/20 text-pink-300 border-pink-600/30" },
      { name: "Vite", color: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30" },
      { name: "Vite PWA", color: "bg-green-600/20 text-green-300 border-green-600/30" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", color: "bg-green-700/20 text-green-400 border-green-700/30" },
      { name: "Express", color: "bg-gray-600/20 text-gray-300 border-gray-600/30" },
      { name: "Socket.io", color: "bg-blue-800/20 text-blue-300 border-blue-800/30" },
      { name: "Flask", color: "bg-red-600/20 text-red-400 border-red-600/30" },
    ],
  },
  {
    title: "Databases and ORMs",
    skills: [
      { name: "MongoDB", color: "bg-green-800/20 text-green-400 border-green-800/30" },
      { name: "PostgreSQL", color: "bg-blue-900/20 text-blue-300 border-blue-900/30" },
      { name: "Prisma", color: "bg-indigo-600/20 text-indigo-300 border-indigo-600/30" },
    ],
  },
  {
    title: "Tools and Technologies",
    skills: [
      { name: "Amazon Web Services (AWS)", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
      { name: "Google Cloud Platform", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Ruby on Rails", color: "bg-red-700/20 text-red-400 border-red-700/30" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-accent-cyan">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className={`skill-badge ${skill.color}`}>
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
