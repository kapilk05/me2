import { motion } from "framer-motion";
import { FileText, Image, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Patent Novelty Assessment",
    description: "Accelerating Innovation and Patent Prosecution",
    icon: FileText,
    type: "Patent",
  },
  {
    title: "Dynamic Neural Style Transfer",
    description: "Artistic Image Generation using VGG19",
    icon: Image,
    type: "Research",
  },
  {
    title: "Medical Analysis System",
    description: "Hybrid Approach for Liver Fibrosis and Cirrhosis Assessment",
    icon: Heart,
    type: "Healthcare",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Projects & Publications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200 h-full">
                <CardContent className="pt-6">
                  <project.icon className="text-3xl text-accent-cyan mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Badge variant="outline" className="bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30">
                    {project.type}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
