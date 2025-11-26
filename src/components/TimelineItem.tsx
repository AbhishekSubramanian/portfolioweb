import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
  logo: string;
  isLeft: boolean;
  index: number;
}

export function TimelineItem({ date, title, organization, description, logo, isLeft, index }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`timeline-content ${isLeft ? 'timeline-content-left' : 'timeline-content-right'}`}
    >
      {/* Timeline dot - only shows when card is expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="timeline-dot hidden md:block"
            style={{ top: '2.5rem' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
      </AnimatePresence>

      {/* Small static dot when not expanded */}
      {!isExpanded && (
        <div 
          className="hidden md:block absolute left-1/2 w-2 h-2 rounded-full bg-accent/40 dark:bg-gold/40"
          style={{ top: '2.5rem', transform: 'translateX(-50%)' }}
        />
      )}
      
      <motion.div
        className={`timeline-card group cursor-pointer transition-all duration-300 ${
          isExpanded ? 'ring-2 ring-accent/20 dark:ring-gold/30' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Date badge */}
        <span className="timeline-date">{date}</span>
        
        {/* Organization with logo */}
        <div className="flex items-center gap-4 mt-4 mb-3">
          <div className="w-11 h-11 rounded-lg bg-white dark:bg-white/95 flex items-center justify-center overflow-hidden p-2 
                          border border-ink/10 dark:border-gold/20 shrink-0">
            <img 
              src={logo} 
              alt={organization} 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">
              {title}
            </h3>
            <p className="font-accent text-base text-accent font-medium mt-1">
              {organization}
            </p>
          </div>
        </div>
        
        {/* Description with expand/collapse */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : '4.5rem',
            opacity: 1 
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden mt-4"
        >
          <p className="text-ink/75 dark:text-ink/70 leading-relaxed text-base">
            {description}
          </p>
        </motion.div>

        {/* Read more button */}
        <motion.button 
          className="mt-5 flex items-center gap-2 font-accent text-sm uppercase tracking-wider 
                     text-accent hover:text-accent/70 transition-colors duration-300"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
