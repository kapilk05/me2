import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Simple SVG icons for companies
const CompanyLogos = {
  SkimaAI: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="url(#gradient1)"/>
      <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24Z" fill="white" fillOpacity="0.2"/>
      <path d="M16 20L24 16L32 20V28L24 32L16 28V20Z" fill="white"/>
      <defs>
        <linearGradient id="gradient1" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#00FFFF"/>
          <stop offset="1" stopColor="#0080FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  DJSCE: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="url(#gradient2)"/>
      <path d="M24 8L34 16V32L24 40L14 32V16L24 8Z" fill="white"/>
      <path d="M24 14L28 18V30L24 34L20 30V18L24 14Z" fill="url(#gradient2)"/>
      <rect x="21" y="20" width="6" height="8" fill="white"/>
      <defs>
        <linearGradient id="gradient2" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#1E40AF"/>
          <stop offset="1" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  SuvidhaFoundation: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="url(#gradient3)"/>
      <path d="M24 6L36 18H30V36H18V18H12L24 6Z" fill="white"/>
      <circle cx="24" cy="24" r="6" fill="url(#gradient3)"/>
      <circle cx="24" cy="24" r="3" fill="white"/>
      <defs>
        <linearGradient id="gradient3" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#10B981"/>
          <stop offset="1" stopColor="#059669"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  ParkItBiz: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="url(#gradient4)"/>
      <path d="M10 32H38V36H10V32Z" fill="white"/>
      <path d="M12 24H36C37.1 24 38 24.9 38 26V32H10V26C10 24.9 10.9 24 12 24Z" fill="white" fillOpacity="0.7"/>
      <circle cx="16" cy="20" r="3" fill="white"/>
      <circle cx="32" cy="20" r="3" fill="white"/>
      <path d="M14 12H34L36 20H12L14 12Z" fill="white"/>
      <defs>
        <linearGradient id="gradient4" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#F59E0B"/>
          <stop offset="1" stopColor="#D97706"/>
        </linearGradient>
      </defs>
    </svg>
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
                      <ul className="text-muted-foreground space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>• {detail}</li>
                        ))}
                      </ul>
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
