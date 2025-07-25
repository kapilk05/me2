import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-40 mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-accent-cyan">Kapil Kashyap</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-accent-cyan transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-accent-cyan transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="hover:text-accent-cyan transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-accent-cyan transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-accent-cyan transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="hover:text-accent-cyan transition-colors duration-200"
              >
                Achievements
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection("book-session")}
                className="bg-accent-cyan text-black hover:bg-cyan-400 font-medium"
              >
                Book a Session
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black font-medium"
              >
                Connect
              </Button>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
              >
                Achievements
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
