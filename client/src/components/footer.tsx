import { Mail, Linkedin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-accent-cyan mb-4">Kapil Kashyap</h3>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="mailto:kapilkashyap3105@gmail.com"
              className="text-muted-foreground hover:text-accent-cyan transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kapilkashyap05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-cyan transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>

          </div>
          <p className="text-muted-foreground text-sm">© 2025 Kapil Kashyap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
