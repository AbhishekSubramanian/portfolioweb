import { motion } from 'framer-motion';
import {Users, Link, MousePointerClick } from 'lucide-react';

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
      whileHover={{ scale: 1.02 }}
      className="vintage-card cursor-pointer group relative"
      onClick={onClick}
    >
      <div className="absolute top-2 right-2">
        <MousePointerClick className="w-4 h-4 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <div className="flex items-center gap-2 mb-2 text-muted">
        <Users className="w-4 h-4" />
        <p className="text-sm font-body">{authors.join(', ')}</p>
      </div>
      <p className="text-sm mb-3 italic">{journal}, {year}</p>
      <a
        href='https://ieeexplore.ieee.org/document/10169799'
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <Link className="w-4 h-4" />
        DOI: {doi}
      </a>
    </motion.div>
  );
}