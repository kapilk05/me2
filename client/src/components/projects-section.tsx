import { motion } from "framer-motion";
import { TrendingUp, Activity, Github, BarChart3, Shield, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Stock Forecasting and Event Impact Analysis",
    description: "Time series forecasting on 15 years of stock data using Prophet and ETS models. Conducted event study on COVID-19 impact and created a Power BI dashboard for insights.",
    icon: TrendingUp,
    type: "Time Series",
    techStack: ["Python", "Prophet", "ETS", "Power BI", "Pandas"],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "Weighted Voting Detection for Liver Fibrosis",
    description: "Combined clinical and ultrasound data using XGBoost and DenseNet-201 with a soft voting classifier, achieving 92.5% diagnostic accuracy.",
    icon: Activity,
    type: "Healthcare ML",
    techStack: ["Python", "XGBoost", "DenseNet-201", "Medical Imaging"],
    demoLink: "https://www.jneonatalsurg.com/index.php/jns/article/view/4685",
    githubLink: null,
  },
  {
    title: "Automated Feature Extraction From Github Repos",
    description: "Automated extraction and analysis of GitHub repo metadata using ML and NLP to identify development trends and patterns.",
    icon: Github,
    type: "Data Mining",
    techStack: ["Python", "GitHub API", "NLP", "Data Analysis"],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "CF Progress Pulse",
    description: "Tool to track Codeforces user ranking progress and send notifications, fostering engagement and competition among users.",
    icon: BarChart3,
    type: "Web Application",
    techStack: ["React", "Node.js", "Codeforces API", "Charts.js"],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "Disease Outbreak Prediction",
    description: "Predicted disease outbreak severity using deep learning and DistilBERT embeddings with strong accuracy (R²>0.95).",
    icon: Shield,
    type: "Predictive ML",
    techStack: ["Python", "DistilBERT", "Deep Learning", "Geospatial Analysis"],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "DJSCE E-Cell Website",
    description: "Revamped the E-Cell website with React.js, TailwindCSS, and Three.js, adding dynamic features and Instagram integration.",
    icon: Globe,
    type: "Web Development",
    techStack: ["React.js", "TailwindCSS", "Three.js", "Instagram API"],
    demoLink: "https://djsceecell.com/",
    githubLink: null,
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
              <Card className="bg-secondary/50 hover:bg-secondary/70 hover:scale-105 transition-all duration-300 h-full flex flex-col group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="pt-6 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="text-accent-cyan group-hover:scale-110 transition-transform duration-300" size={32} />
                    <Badge variant="outline" className="bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30 text-xs group-hover:bg-accent-cyan/30 transition-colors">
                      {project.type}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      {project.demoLink ? (
                        <Button 
                          size="sm" 
                          className="bg-accent-cyan text-black hover:bg-accent-cyan/80 text-xs"
                          onClick={() => window.open(project.demoLink!, '_blank')}
                        >
                          Demo
                        </Button>
                      ) : (
                        <Button size="sm" disabled className="bg-gray-400 text-gray-600 text-xs cursor-not-allowed">
                          Demo
                        </Button>
                      )}
                      {project.githubLink ? (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black text-xs"
                          onClick={() => window.open(project.githubLink!, '_blank')}
                        >
                          GitHub
                        </Button>
                      ) : (
                        <Button size="sm" disabled variant="outline" className="border-gray-400 text-gray-400 text-xs cursor-not-allowed">
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
