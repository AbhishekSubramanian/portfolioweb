import { ArrowUp, Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: "https://github.com/AbhishekSubramanian",
      icon: Github,
      label: "GitHub",
      subtitle: "View Code"
    },
    {
      href: "http://www.linkedin.com/in/abhishek--subramanian",
      icon: Linkedin,
      label: "LinkedIn",
      subtitle: "Connect"
    },
    {
      href: "https://twitter.com/yourusername",
      icon: Twitter,
      label: "Twitter",
      subtitle: "Follow"
    },
    {
      href: "mailto:abhisheksubramanianofficial@gmail.com",
      icon: Mail,
      label: "Email",
      subtitle: "Get in Touch"
    },
    {
      href: "tel:+1234567890",
      icon: Phone,
      label: "Phone",
      subtitle: "Call Me"
    }
  ];

  return (
    <section id="footer">
      <footer className="section-muted py-12 border-t border-ink/10 dark:border-gold/20">
        <div className="newspaper-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              The Classifieds
            </h2>
            <p className="font-accent text-lg text-muted italic">
              Let's connect and create something extraordinary
            </p>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-6 bg-paper dark:bg-ink/10 
                           border border-ink/10 dark:border-gold/20 
                           hover:border-accent/20 dark:hover:border-gold/40
                           transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-4 bg-accent/5 rounded-full group-hover:bg-accent/10 
                                  transition-colors duration-300">
                    <link.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink group-hover:text-accent 
                                   transition-colors duration-300">
                      {link.label}
                    </h3>
                    <p className="text-xs text-muted font-accent mt-1">
                      {link.subtitle}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
            <span className="font-accent text-2xl text-accent/40">❦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="font-body">
                © {new Date().getFullYear()} <span className="font-display font-semibold">The Portfolio Times</span>
              </p>
              <span className="hidden sm:inline text-ink/20 dark:text-gold/20">•</span>
              <p className="font-accent text-xs text-muted/70">
                Last updated: November 2025
              </p>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-accent/5 hover:bg-accent/10 rounded-full transition-all duration-300"
              aria-label="Scroll to top"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5 text-accent" />
            </motion.button>
          </div>
        </div>
      </footer>
    </section>
  );
}
