import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Company logos based on provided images
const CompanyLogos = {
  SkimaAI: () => (
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Skima AI geometric S logo */}
        <path d="M12 12L24 6L36 12L30 18L24 12L18 18L12 12Z" fill="url(#skima1)"/>
        <path d="M18 18L24 24L30 18L36 24L24 36L12 24L18 18Z" fill="url(#skima2)"/>
        <defs>
          <linearGradient id="skima1" x1="0" y1="0" x2="48" y2="24">
            <stop stopColor="#FF6B35"/>
            <stop offset="1" stopColor="#F7931E"/>
          </linearGradient>
          <linearGradient id="skima2" x1="0" y1="24" x2="48" y2="48">
            <stop stopColor="#9B59B6"/>
            <stop offset="1" stopColor="#8E44AD"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  DJSCE: () => (
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1">
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* DJSCE college emblem style */}
        <circle cx="24" cy="20" r="12" fill="#1E40AF"/>
        <path d="M24 32L12 40H36L24 32Z" fill="#1E40AF"/>
        <rect x="18" y="40" width="12" height="6" fill="#F59E0B"/>
        <circle cx="24" cy="20" r="6" fill="white"/>
        <path d="M18 46L24 40L30 46" stroke="#1E40AF" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  ),
  SuvidhaFoundation: () => (
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Foundation/helping hands symbol */}
        <path d="M12 20C12 16 15 14 18 16L24 20L30 16C33 14 36 16 36 20V28C36 32 33 34 30 32L24 28L18 32C15 34 12 32 12 28V20Z" fill="url(#suvidha)"/>
        <circle cx="24" cy="24" r="4" fill="white"/>
        <defs>
          <linearGradient id="suvidha" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#10B981"/>
            <stop offset="1" stopColor="#059669"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  ParkItBiz: () => (
    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center p-2">
      <svg width="32" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Park It logo - diamond shapes like in the image */}
        <path d="M4 12L12 4L20 12L12 20L4 12Z" fill="#8E44AD"/>
        <path d="M20 12L28 4L36 12L28 20L20 12Z" fill="#F39C12"/>
        <path d="M12 20L20 28L28 20L20 12L12 20Z" fill="#E74C3C"/>
        <text x="24" y="32" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">park it</text>
      </svg>
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
