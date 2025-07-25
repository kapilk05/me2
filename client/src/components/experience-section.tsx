import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import skimaLogo from "@assets/skima 1_1753465150214.jpg";
import djsceLogo from "@assets/djsce_1753465150215.jpg";
import parkitLogo from "@assets/Screenshot 2025-07-25 230734_1753465135736.png";

// Company logos using actual images
const CompanyLogos = {
  SkimaAI: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
      <img src={skimaLogo} alt="Skima AI" className="w-full h-full object-contain p-1" />
    </div>
  ),
  DJSCE: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
      <img src={djsceLogo} alt="DJSCE" className="w-full h-full object-contain p-1" />
    </div>
  ),
  SuvidhaFoundation: () => (
    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
      <span className="text-white font-bold text-sm">SF</span>
    </div>
  ),
  ParkItBiz: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
      <img src={parkitLogo} alt="Park It" className="w-10 h-6 object-contain" />
    </div>
  ),
};

const experiences = [
  {
    title: "Software Developer",
    company: "Skima AI",
    period: "July 2025 - Present",
    description: "Working on cutting-edge AI solutions and software development projects at Skima AI, contributing to innovative technology solutions.",
    logo: CompanyLogos.SkimaAI,
  },
  {
    title: "Web Developer",
    company: "Suvidha Foundation",
    period: "June 2024 - July 2024",
    description: "Built efficient, low-latency campaign APIs using Spring Boot and MongoDB aggregation pipelines, improving analytics load time by 30%.",
    details: [
      "Used Redis for caching hot queries, reducing repeated I/O and optimizing stakeholder-facing dashboards",
      "Designed and delivered performance-focused React.js components, leading to a 25% boost in user engagement",
      "Documented weekly metrics and presented improvements in campaign performance in internal review forums",
    ],
    logo: CompanyLogos.SuvidhaFoundation,
  },
  {
    title: "Teaching Assistant",
    company: "Dwarkadas J. Sanghvi College of Engineering",
    period: "August 2024 - May 2025",
    description: "Assisted Prof. Chinmay Raut in delivering core courses: Processor Architecture and Information Security.",
    details: [
      "Created structured lecture materials including slides, notes, and visual aids",
      "Supported over 100 students with 1:1 academic help and constructive feedback",
      "Facilitated understanding of advanced topics through clear explanations",
    ],
    logo: CompanyLogos.DJSCE,
  },
  {
    title: "Business Development",
    company: "ParkIt.biz",
    period: "June 2023 - August 2023",
    description: "Generated leads, conducted market research, and fostered partnerships using data-driven insights to drive growth and expand opportunities. Also worked alongside the HR Department.",
    logo: CompanyLogos.ParkItBiz,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-cyan"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                <div className="timeline-dot"></div>
                <Card className="ml-20 bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <exp.logo />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-accent-cyan">{exp.title}</h3>
                          <p className="text-lg font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    {exp.details && (
                      <div className="space-y-2">
                        {exp.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-accent-cyan mt-1.5 text-xs">•</span>
                            <p className="text-sm text-muted-foreground flex-1">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
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
