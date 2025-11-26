import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
      className="premium-card cursor-pointer overflow-hidden"
      onClick={toggleExpansion}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-lg bg-ink/5 flex items-center justify-center overflow-hidden p-2 flex-shrink-0">
            <img src={logo} alt={company} className="w-full h-full object-contain" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">
              {title}
            </h3>
            <p className="font-accent text-lg text-accent font-semibold mt-1">
              {company}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent 
                             font-accent text-sm font-medium">
                {type}
              </span>
              <span className="text-muted font-body text-sm">
                {duration}
              </span>
              <span className="text-muted font-body text-sm">
                · {location}
              </span>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : '4rem',
            opacity: isExpanded ? 1 : 0.7
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden mt-6 pt-6 border-t border-ink/5"
        >
          <div 
            className="prose-ink text-ink/80 leading-relaxed
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mt-4
                       [&_li]:text-ink/75 [&_p]:mb-4
                       [&_h5]:font-display [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mt-6 [&_h5]:mb-3" 
            dangerouslySetInnerHTML={{ __html: details }} 
          />
        </motion.div>

        {/* Read More Button */}
        <motion.button
          className="mt-6 flex items-center gap-2 font-accent text-sm uppercase tracking-wider 
                     text-accent hover:text-accent/70 transition-colors duration-300"
          onClick={(e) => {
            e.stopPropagation();
            toggleExpansion();
          }}
          whileHover={{ x: 4 }}
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}
