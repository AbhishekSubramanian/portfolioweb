import { motion } from 'framer-motion';
import { XIcon as Icon } from 'lucide-react';

interface SkillCardProps {
  icon: Icon;
  title: string;
  skills: string[];
}

export function SkillCard({ icon: IconComponent, title, skills }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="vintage-card group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
          <IconComponent className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-display font-bold">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-ink/5 rounded font-body text-sm hover:bg-ink/10 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}