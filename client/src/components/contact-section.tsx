import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Connect with Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground text-center mb-12"
        >
          Have a question or want to discuss a project? Send me a message and I'll get back to you soon.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-accent-cyan">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-accent-cyan text-xl w-8 h-6 mr-4" />
                <span>kapilkashyap3105@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-accent-cyan text-xl w-8 h-6 mr-4" />
                <span>+91 8591425664</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-accent-cyan text-xl w-8 h-6 mr-4" />
                <span>linkedin.com/in/kapilkashyap05</span>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-cyan text-black hover:bg-cyan-400 font-semibold"
                  >
                    <Send className="mr-2" size={16} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
