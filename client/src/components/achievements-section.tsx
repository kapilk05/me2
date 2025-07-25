import { motion } from "framer-motion";
import { Trophy, Users, DollarSign, FileText, Award, BookOpen, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Subject Topper",
    description: "Business Analytics securing 85/100 marks and an A Grade",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "Global Rank 20",
    description: "Codechef Starters 135 (Div 3) - Peak Rating 1790",
    icon: Code,
    color: "text-accent-cyan",
  },
  {
    title: "B-Plan Winner",
    description: "DJSCE TRINITY Business Plan Competition",
    icon: Award,
    color: "text-green-500",
  },
  {
    title: "Creative Arts",
    description: "Stage Play Writer 3rd place & Rap Battle 2nd place",
    icon: BookOpen,
    color: "text-purple-500",
  },
  {
    title: "International Rank 3",
    description: "Informatics Olympiad",
    icon: Trophy,
    color: "text-blue-500",
  },
  {
    title: "State Rank 1",
    description: "Informatics Olympiad State Level",
    icon: Award,
    color: "text-orange-500",
  },
  {
    title: "State Rank 2",
    description: "Mathematics Olympiad",
    icon: Trophy,
    color: "text-cyan-500",
  },
  {
    title: "Multi-Olympiad Winner",
    description: "State Rank 3 in Reasoning & French Olympiads",
    icon: Award,
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
          <div className="flex justify-center mt-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span>← Scroll to see more achievements →</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
