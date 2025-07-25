import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Code, Brain, BarChart, Briefcase, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/book-session", formData);
      toast({
        title: "Session Booked Successfully!",
        description: "I'll get back to you within 24 hours to confirm the session details.",
      });
      setFormData({
        name: "",
        email: "",
        topic: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact me directly.",
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
    <section id="book-session" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Book a Session with Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground text-center mb-12"
        >
          Get personalized guidance on software development, machine learning, or career advice.
        </motion.p>

        <Card className="bg-secondary/50">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-accent-cyan/20 text-accent-cyan px-6 py-3 rounded-full text-lg font-semibold mb-4">
                <Calendar className="mr-2" size={20} />
                ₹150 for 30 minutes
              </div>
              <p className="text-muted-foreground">1-on-1 consultation session via video call</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent-cyan">What you'll get:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="text-accent-cyan mr-3" size={16} />
                    Personalized career guidance
                  </li>
                  <li className="flex items-center">
                    <Check className="text-accent-cyan mr-3" size={16} />
                    Technical mentorship
                  </li>
                  <li className="flex items-center">
                    <Check className="text-accent-cyan mr-3" size={16} />
                    Project review and feedback
                  </li>
                  <li className="flex items-center">
                    <Check className="text-accent-cyan mr-3" size={16} />
                    Industry insights and tips
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent-cyan">Topics covered:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <Code className="text-accent-cyan mr-3" size={16} />
                    Software Development
                  </li>
                  <li className="flex items-center">
                    <Brain className="text-accent-cyan mr-3" size={16} />
                    Machine Learning & AI
                  </li>
                  <li className="flex items-center">
                    <BarChart className="text-accent-cyan mr-3" size={16} />
                    Data Analytics
                  </li>
                  <li className="flex items-center">
                    <Briefcase className="text-accent-cyan mr-3" size={16} />
                    Career Planning
                  </li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="topic">Session Topic</Label>
                <Select onValueChange={(value) => handleInputChange("topic", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-development">Software Development</SelectItem>
                    <SelectItem value="machine-learning">Machine Learning & AI</SelectItem>
                    <SelectItem value="data-analytics">Data Analytics</SelectItem>
                    <SelectItem value="career-planning">Career Planning</SelectItem>
                    <SelectItem value="project-review">Project Review</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="preferred-date">Preferred Date</Label>
                  <Input
                    id="preferred-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="preferred-time">Preferred Time</Label>
                  <Select onValueChange={(value) => handleInputChange("preferredTime", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="14:00">02:00 PM</SelectItem>
                      <SelectItem value="15:00">03:00 PM</SelectItem>
                      <SelectItem value="16:00">04:00 PM</SelectItem>
                      <SelectItem value="17:00">05:00 PM</SelectItem>
                      <SelectItem value="18:00">06:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me more about what you'd like to discuss..."
                  rows={4}
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent-cyan text-black hover:bg-cyan-400 px-8 py-3 font-semibold text-lg"
                >
                  {isSubmitting ? "Booking..." : "Book Your Session"}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  <Clock className="inline mr-1" size={14} />
                  I'll confirm your session within 24 hours • Payment via UPI/Bank Transfer
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
