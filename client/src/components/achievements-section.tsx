import { motion } from "framer-motion";
import { Trophy, Users, DollarSign } from "lucide-react";
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
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
    </section>
  );
}
