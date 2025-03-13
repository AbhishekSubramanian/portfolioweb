import { motion } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';

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
      whileHover={{ scale: 1.02 }}
      className="vintage-card group cursor-pointer overflow-hidden relative"
      onClick={onClick}
    >
      <div className="absolute top-2 right-2 z-10">
        <MousePointerClick className="w-4 h-4 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="relative aspect-video mb-4 overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
      <p className="text-muted mb-4 line-clamp-2">{description}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-display"
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View on GitHub
      </a>
    </motion.div>
  );
}