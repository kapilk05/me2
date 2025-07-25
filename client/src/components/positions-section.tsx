import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const positions = [
  {
    title: "Vice Chairperson Marketing",
    organization: "DJSCE E-Cell",
    period: "August 2023 - October 2024",
    responsibilities: [
      "Managed team of 12 committee members",
      "Doubled initial budget from ₹50,000 through strategic fundraising",
      "Secured partnerships through MOUs with sponsors",
    ],
  },
  {
    title: "Head of Finance Department",
    organization: "DJSCE Trinity",
    period: "December 2023 - September 2024",
    responsibilities: [
      "Managed ₹13 lakhs in funds",
      "Maintained accurate financial records",
      "Implemented financial controls and best practices",
    ],
  },
  {
    title: "Technical Head",
    organization: "DJS CodeStars",
    period: "October 2023 - August 2024",
    responsibilities: [
      "Conducted DSA lectures for competitive programming",
      "Curated questions for competitions like \"Code Bounty\"",
      "Mentored 15-member technical team",
    ],
  },
  {
    title: "Head of Corporate Relations",
    organization: "AIESEC in Mumbai",
    period: "December 2022 - March 2023",
    responsibilities: [
      "Developed recruitment strategies for international markets",
      "Led team of 6 members in talent recruitment",
      "Generated ₹4.3 lakhs cash flow",
    ],
  },
];

export function PositionsSection() {
  return (
    <section id="positions" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Positions of Responsibility
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 hover:bg-card/70 transition-colors duration-200 h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-2">{position.title}</h3>
                  <p className="text-lg font-medium mb-2">{position.organization}</p>
                  <p className="text-muted-foreground mb-4">{position.period}</p>
                  <ul className="text-muted-foreground space-y-2">
                    {position.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>• {responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
