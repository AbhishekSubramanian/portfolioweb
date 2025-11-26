import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  onClick: () => void;
}

export function ProjectCard({ title, description, image, githubUrl, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="group cursor-pointer overflow-hidden bg-paper 
                 border border-ink/10 dark:border-gold/20
                 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                 hover:border-accent/30 dark:hover:border-gold/40"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Click indicator */}
        <motion.div 
          className="absolute top-4 right-4 p-2 bg-paper/90 backdrop-blur-sm rounded-full
                     opacity-0 group-hover:opacity-100 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ExternalLink className="w-4 h-4 text-accent" />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg sm:text-xl font-bold text-ink leading-tight mb-3 
                       group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-5">
          {description}
        </p>
        
        {/* GitHub Link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-accent text-sm uppercase tracking-wider
                     text-accent hover:text-accent/70 transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <Github className="w-4 h-4" />
          <span>View Code</span>
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
          >
            →
          </motion.span>
        </a>
      </div>
    </motion.div>
  );
}
