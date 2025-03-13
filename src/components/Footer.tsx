import { ArrowUp, Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id='footer'>
    <footer className="bg-ink/5 border-t border-ink/10 py-16">
      <div className="newspaper-container">
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">The Classifieds</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://github.com/AbhishekSubramanian"
                target="_blank"
                rel="noopener noreferrer"
                className="vintage-card flex items-center gap-3 hover:bg-ink/5 p-4"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold">GitHub</h3>
                  <p className="text-sm text-muted">Follow for Code</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="http://www.linkedin.com/in/abhishek--subramanian"
                target="_blank"
                rel="noopener noreferrer"
                className="vintage-card flex items-center gap-3 hover:bg-ink/5 p-4"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold">LinkedIn</h3>
                  <p className="text-sm text-muted">Professional Network</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="vintage-card flex items-center gap-3 hover:bg-ink/5 p-4"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <Twitter className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Twitter</h3>
                  <p className="text-sm text-muted">Latest Updates</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="mailto:abhisheksubramanianofficial@gmail.com"
                className="vintage-card flex items-center gap-3 hover:bg-ink/5 p-4"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Email</h3>
                  <p className="text-sm text-muted">Get in Touch</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="tel:+1234567890"
                className="vintage-card flex items-center gap-3 hover:bg-ink/5 p-4"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Phone</h3>
                  <p className="text-sm text-muted">+1 (234) 567-890</p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink/10 flex items-center justify-between text-sm text-muted">
          <p>© {new Date().getFullYear()} The Portfolio Times. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-2 hover:bg-ink/5 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
    </section>
  );
}