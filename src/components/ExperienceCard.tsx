import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  details: string;
}

export function ExperienceCard({
  title,
  company,
  duration,
  location,
  type,
  logo,
  details,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
      className="vintage-card group cursor-pointer relative p-6"
      onClick={toggleExpansion}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <img src={logo} alt={company} className="w-12 h-12 object-contain" />
        <div>
          <h3 className="text-xl font-display font-bold mb-1">{title}</h3>
          <p className="text-accent font-semibold mb-1">{company}</p>
          <p className="text-sm text-muted mb-2">
            {type} · {duration}
          </p>
          <p className="text-sm text-muted">{location}</p>
        </div>
      </div>

      {/* Animated Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : '3rem' }}
        className="overflow-hidden mt-4"
      >
        <div className="text-ink/80" dangerouslySetInnerHTML={{ __html: details }} />
      </motion.div>

      {/* Read More / Show Less Button */}
      <button
        className="mt-4 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          toggleExpansion();
        }}
      >
        {isExpanded ? (
          <>
            <span>Show Less</span>
            <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Read More</span>
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.div>
  );
}