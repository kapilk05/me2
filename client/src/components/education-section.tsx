import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Honors Degree, Intelligent Computing",
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    period: "September 2023 - June 2025",
  },
  {
    degree: "Bachelor of Technology - Computer Engineering",
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    period: "December 2021 - May 2025",
  },
  {
    degree: "Bachelor of Science - Data Science",
    institution: "Indian Institute of Technology, Madras",
    period: "May 2022 - May 2023",
  },
  {
    degree: "HSC, Engineering Science",
    institution: "Pace Junior Science College",
    period: "April 2019 - August 2021",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 hover:bg-card/70 transition-colors duration-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-2">{edu.degree}</h3>
                  <p className="text-lg font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
