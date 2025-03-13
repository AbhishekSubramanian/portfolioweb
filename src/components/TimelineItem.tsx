import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, MousePointerClick } from 'lucide-react';

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
  console.log(logo)

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`timeline-content ${isLeft ? 'timeline-content-left' : 'timeline-content-right'}`}
    >
      <div className="timeline-dot" style={{ top: '50%' }} />
      <div
        className="timeline-card group cursor-pointer relative"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* <div className="absolute top-2 right-2">
          <MousePointerClick className="w-4 h-4 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
        </div> */}
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt={organization} className="w-8 h-8 object-contain" />
          <span className="timeline-date">{date}</span>
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
        <p className="text-lg text-muted mb-4">{organization}</p>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '3rem' }}
          className="overflow-hidden"
        >
          <p className="text-ink/80">{description}</p>
        </motion.div>

        <button 
          className="mt-4 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
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
      </div>
    </motion.div>
  );
}