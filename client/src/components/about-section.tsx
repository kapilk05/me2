import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base text-muted-foreground mb-4">
              Recent Computer Engineering graduate with strong foundation in machine learning, data analytics, and software development. Over four years, I've combined technical research with leadership in business and student-led initiatives.
            </p>
            <p className="text-base text-muted-foreground">
              My journey includes published research on neural networks, impactful ML projects, and leadership roles across entrepreneurship and technical cells. Passionate about using data to solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/50">
              <CardContent className="pt-8">
                <h3 className="text-xl font-semibold mb-6 text-accent-cyan">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <MapPin className="text-accent-cyan w-6 h-6 mr-4" />
                    <span>Mumbai, Maharashtra, India</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-accent-cyan w-6 h-6 mr-4" />
                    <span>kapilkashyap3105@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-accent-cyan w-6 h-6 mr-4" />
                    <span>+91 8591425664</span>
                  </li>
                  <li className="flex items-center">
                    <Linkedin className="text-accent-cyan w-6 h-6 mr-4" />
                    <span>linkedin.com/in/kapilkashyap05</span>
                  </li>

                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
