import { motion } from 'framer-motion';
import { Users, ExternalLink, BookOpen } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  authors: string[];
  journal: string;
  year: string;
  doi: string;
  onClick: () => void;
}

export function PublicationCard({ title, authors, journal, year, doi, onClick }: PublicationCardProps) {
  return (
    <motion.div
      className="premium-card cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <div className="p-8">
        {/* Publication type badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent 
                         font-accent text-xs uppercase tracking-wider font-semibold">
            <BookOpen className="w-3 h-3" />
            Research Paper
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight mb-4
                       group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        {/* Authors */}
        <div className="flex items-start gap-3 mb-4">
          <Users className="w-4 h-4 text-muted mt-1 flex-shrink-0" />
          <p className="text-sm text-muted font-body leading-relaxed">
            {authors.join(', ')}
          </p>
        </div>
        
        {/* Journal info */}
        <p className="font-accent text-sm italic text-ink/70 mb-6">
          {journal}, {year}
        </p>
        
        {/* DOI Link */}
        <a
          href="https://ieeexplore.ieee.org/document/10169799"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-accent text-sm uppercase tracking-wider
                     text-accent hover:text-accent/70 transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-4 h-4" />
          <span>DOI: {doi}</span>
        </a>
        
        {/* Click indicator */}
        <div className="absolute top-4 right-4 p-2 bg-accent/10 rounded-full
                        opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ExternalLink className="w-4 h-4 text-accent" />
        </div>
      </div>
    </motion.div>
  );
}
