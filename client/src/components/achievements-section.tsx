import { motion } from "framer-motion";
import { Trophy, Users, DollarSign, FileText, Award, BookOpen, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "International Rank 3",
    description: "Informatics Olympiad",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "Team Leadership",
    description: "Managed teams of 60+ members across multiple organizations",
    icon: Users,
    color: "text-accent-cyan",
  },
  {
    title: "Budget Management",
    description: "Successfully managed ₹13 lakhs in funds as Head of Finance",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Research Publication",
    description: "Published paper on liver fibrosis detection with 92.5% accuracy",
    icon: FileText,
    color: "text-blue-500",
  },
  {
    title: "IIT Madras Certification",
    description: "Foundations of Data Science from Indian Institute of Technology",
    icon: Award,
    color: "text-purple-500",
  },
  {
    title: "Teaching Excellence",
    description: "Recognized TA for Data Structures and Programming courses",
    icon: BookOpen,
    color: "text-orange-500",
  },
  {
    title: "Hackathon Winner",
    description: "Multiple first place finishes in ML and tech competitions",
    icon: Code,
    color: "text-cyan-500",
  },
  {
    title: "Open Source Impact",
    description: "Active contributor to machine learning projects on GitHub",
    icon: Users,
    color: "text-green-400",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Achievements
        </motion.h2>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex-none w-80"
              >
                <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200 text-center h-full">
                  <CardContent className="pt-6">
                    <achievement.icon className={`text-4xl ${achievement.color} mx-auto mb-4`} size={64} />
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
