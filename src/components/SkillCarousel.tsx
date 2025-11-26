import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  icon: string;
  link?: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'SQL', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'C++', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Java', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Kotlin', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'R', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
  
  // Frameworks & Tools
  { name: 'React.js', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Next.js', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Flask', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'FastAPI', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'PyTorch', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Redux', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'MongoDB', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'LangChain', category: 'Frameworks & Tools', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
  { name: 'LangGraph', category: 'Frameworks & Tools', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
  { name: 'LangSmith', category: 'Frameworks & Tools', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
  
  // Cloud & DevOps
  { name: 'Google Cloud', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Azure', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'AWS', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  
  // Certifications
  { 
    name: 'GCP Associate Cloud Engineer', 
    category: 'Certifications', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    link: 'https://www.credential.net/your-ace-credential'
  },
  { 
    name: 'GCP Professional Cloud Developer', 
    category: 'Certifications', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    link: 'https://www.credential.net/your-pcd-credential'
  }
];

const categories = ['All', 'Programming Languages', 'Frameworks & Tools', 'Cloud & DevOps', 'Certifications'];

export function SkillCarousel() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const itemsPerPage = 8;

  useEffect(() => {
    const filtered = activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);
    setFilteredSkills(filtered);
    setCurrentPage(0);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const currentSkills = filteredSkills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="space-y-10">
      {/* Category Filter - Newspaper Tab Style */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex flex-wrap justify-center gap-1 p-1 bg-ink/5 rounded-sm">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-3 font-accent text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'text-paper'
                  : 'text-ink/60 hover:text-ink'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Skills Display - Elegant Grid with Navigation */}
      <div className="relative">
        {/* Navigation Arrows */}
        {totalPages > 1 && (
          <>
            <motion.button
              onClick={prevPage}
              className="absolute -left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10 p-2 
                         hover:bg-transparent transition-all duration-300 group"
              whileHover={{ x: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous skills"
            >
              <ChevronLeft className="w-6 h-6 text-accent/50 dark:text-gold/50 group-hover:text-accent dark:group-hover:text-gold transition-colors" />
            </motion.button>
            
            <motion.button
              onClick={nextPage}
              className="absolute -right-2 md:-right-10 top-1/2 -translate-y-1/2 z-10 p-2 
                         hover:bg-transparent transition-all duration-300 group"
              whileHover={{ x: 3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next skills"
            >
              <ChevronRight className="w-6 h-6 text-accent/50 dark:text-gold/50 group-hover:text-accent dark:group-hover:text-gold transition-colors" />
            </motion.button>
          </>
        )}

        {/* Skills Grid */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group"
                >
                  {skill.link ? (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <SkillCard skill={skill} isHovered={hoveredSkill === skill.name} />
                    </a>
                  ) : (
                    <SkillCard skill={skill} isHovered={hoveredSkill === skill.name} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Page Indicator - Elegant Progress Bar Style */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-3">
            {/* Progress bar */}
            <div className="w-48 h-1 bg-ink/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {/* Page numbers */}
            <p className="font-accent text-xs uppercase tracking-wider text-muted">
              <span className="text-accent font-semibold">{currentPage + 1}</span>
              <span className="mx-2">of</span>
              <span>{totalPages}</span>
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

// Skill Card Component
function SkillCard({ skill, isHovered }: { skill: Skill; isHovered: boolean }) {
  return (
    <motion.div
      className={`relative p-6 bg-paper dark:bg-ink/10 border transition-all duration-500 cursor-pointer
                  ${isHovered 
                    ? 'border-accent/30 dark:border-gold/40 shadow-elegant' 
                    : 'border-ink/10 dark:border-gold/20'}`}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
        <div className={`absolute top-0 right-0 w-12 h-12 transform rotate-45 translate-x-6 -translate-y-6 
                        transition-colors duration-300 ${isHovered ? 'bg-accent/20 dark:bg-gold/20' : 'bg-ink/5 dark:bg-gold/10'}`} />
      </div>

      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="relative w-14 h-14 mb-4">
          <motion.img
            src={skill.icon}
            alt={skill.name}
            className={`w-full h-full object-contain transition-all duration-500
                       ${isHovered ? 'grayscale-0' : 'grayscale opacity-70'}`}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Name */}
        <h3 className={`font-display text-sm font-bold leading-tight transition-colors duration-300
                       ${isHovered ? 'text-accent' : 'text-ink'}`}>
          {skill.name}
        </h3>
        
        {/* Category label - appears on hover */}
        <motion.p
          className="text-[10px] font-accent uppercase tracking-wider text-muted mt-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          {skill.category}
        </motion.p>
      </div>
    </motion.div>
  );
}
