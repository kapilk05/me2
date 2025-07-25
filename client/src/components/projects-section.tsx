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
    preview: "Interactive time series charts showing stock price predictions with confidence intervals and event impact markers",
    techStack: ["Python", "Prophet", "ETS", "Power BI", "Pandas"],
  },
  {
    title: "Weighted Voting Detection for Liver Fibrosis",
    description: "Combined clinical and ultrasound data using XGBoost and DenseNet-201 with a soft voting classifier, achieving 92.5% diagnostic accuracy.",
    icon: Activity,
    type: "Healthcare ML",
    preview: "Medical diagnostic interface with ultrasound image analysis and probability scores for different fibrosis stages",
    techStack: ["Python", "XGBoost", "DenseNet-201", "Medical Imaging"],
  },
  {
    title: "Automated Feature Extraction From Github Repos",
    description: "Automated extraction and analysis of GitHub repo metadata using ML and NLP to identify development trends and patterns.",
    icon: Github,
    type: "Data Mining",
    preview: "Repository analytics dashboard showing code metrics, contributor patterns, and technology trend visualizations",
    techStack: ["Python", "GitHub API", "NLP", "Data Analysis"],
  },
  {
    title: "CF Progress Pulse",
    description: "Tool to track Codeforces user ranking progress and send notifications, fostering engagement and competition among users.",
    icon: BarChart3,
    type: "Web Application",
    preview: "Progress tracking dashboard with ranking charts, notification system, and competitive programming analytics",
    techStack: ["React", "Node.js", "Codeforces API", "Charts.js"],
  },
  {
    title: "Disease Outbreak Prediction",
    description: "Predicted disease outbreak severity using deep learning and DistilBERT embeddings with strong accuracy (R²>0.95).",
    icon: Shield,
    type: "Predictive ML",
    preview: "Epidemiological dashboard with outbreak severity predictions, geographic heat maps, and risk assessment metrics",
    techStack: ["Python", "DistilBERT", "Deep Learning", "Geospatial Analysis"],
  },
  {
    title: "DJSCE E-Cell Website",
    description: "Revamped the E-Cell website with React.js, TailwindCSS, and Three.js, adding dynamic features and Instagram integration.",
    icon: Globe,
    type: "Web Development",
    preview: "Modern responsive website with 3D animations, event management system, and social media integration",
    techStack: ["React.js", "TailwindCSS", "Three.js", "Instagram API"],
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
              <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200 h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="text-accent-cyan" size={32} />
                    <Badge variant="outline" className="bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30 text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="bg-accent-cyan text-black hover:bg-cyan-400 text-xs">
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black text-xs">
                        Tech Stack
                      </Button>
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
