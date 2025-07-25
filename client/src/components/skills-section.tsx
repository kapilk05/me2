import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages & Programming",
    skills: [
      { name: "Java", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
      { name: "Python", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      { name: "C/C++", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
      { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "HTML", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { name: "CSS", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "SQL", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
      { name: "R", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "Ruby", color: "bg-red-600/20 text-red-400 border-red-600/30" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Spring Boot", color: "bg-green-600/20 text-green-400 border-green-600/30" },
      { name: "Spring Data JPA", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      { name: "JDBC", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
      { name: "Node.js", color: "bg-green-700/20 text-green-400 border-green-700/30" },
      { name: "Express.js", color: "bg-gray-600/20 text-gray-300 border-gray-600/30" },
      { name: "RESTful APIs", color: "bg-teal-600/20 text-teal-400 border-teal-600/30" },
      { name: "React.js", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
      { name: "Three.js", color: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30" },
      { name: "Ruby on Rails", color: "bg-red-700/20 text-red-400 border-red-700/30" },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      { name: "TensorFlow", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { name: "PyTorch", color: "bg-red-500/20 text-red-400 border-red-500/30" },
      { name: "Scikit-learn", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Keras", color: "bg-red-600/20 text-red-400 border-red-600/30" },
      { name: "Hugging Face", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "OpenCV", color: "bg-green-600/20 text-green-400 border-green-600/30" },
      { name: "Pandas", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "NumPy", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
      { name: "Matplotlib", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
      { name: "Seaborn", color: "bg-teal-600/20 text-teal-400 border-teal-600/30" },
      { name: "Plotly", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
      { name: "NLTK", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      { name: "SpaCy", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
      { name: "PostgreSQL", color: "bg-blue-900/20 text-blue-300 border-blue-900/30" },
      { name: "MongoDB", color: "bg-green-800/20 text-green-400 border-green-800/30" },
      { name: "SQLite", color: "bg-gray-600/20 text-gray-300 border-gray-600/30" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS (ECS, Lambda, EC2, S3, RDS)", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
      { name: "Docker", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Kubernetes", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
      { name: "Maven", color: "bg-red-600/20 text-red-400 border-red-600/30" },
      { name: "JUnit", color: "bg-green-600/20 text-green-400 border-green-600/30" },
      { name: "Mockito", color: "bg-gray-600/20 text-gray-300 border-gray-600/30" },
    ],
  },
  {
    title: "Backend Frameworks & Tools",
    skills: [
      { name: "Flask", color: "bg-red-600/20 text-red-400 border-red-600/30" },
      { name: "FastAPI", color: "bg-teal-600/20 text-teal-400 border-teal-600/30" },
      { name: "Django", color: "bg-green-700/20 text-green-400 border-green-700/30" },
      { name: "Git", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
      { name: "MLflow", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Weights & Biases", color: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "VSCode", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
      { name: "IntelliJ", color: "bg-red-600/20 text-red-400 border-red-600/30" },
      { name: "Postman", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { name: "Swagger", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      { name: "Figma", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
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
