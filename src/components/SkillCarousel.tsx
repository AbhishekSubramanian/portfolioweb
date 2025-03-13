import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
  { name: 'Objective-C', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
  { name: 'Java', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'HTML', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Matlab', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
  { name: 'Kotlin', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'R', category: 'Programming Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
  
  // Frameworks & Tools
  { name: 'Flask', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Node.js', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PyTorch', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Git', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Linux', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Firebase', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'React.js', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Material UI', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Bootstrap', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Figma', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'MongoDB', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'React Native', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Android Studio', category: 'Frameworks & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  
  // Cloud & DevOps
  { name: 'Google Cloud Platform', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Docker', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  
  // Professional Certifications
  { 
    name: 'Google Cloud Certified: Associate Cloud Engineer', 
    category: 'Professional Certifications', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    link: 'https://www.credential.net/your-ace-credential'
  },
  { 
    name: 'Google Cloud Certified: Professional Cloud Developer', 
    category: 'Professional Certifications', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    link: 'https://www.credential.net/your-pcd-credential'
  }
];

const categories = ['All', 'Programming Languages', 'Frameworks & Tools', 'Cloud & DevOps', 'Professional Certifications'];

export function SkillCarousel() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredSkills, setFilteredSkills] = useState(skills);

  useEffect(() => {
    setFilteredSkills(
      activeCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 border-2 transition-all duration-300 font-display ${
              activeCategory === category
                ? 'border-accent bg-accent text-paper'
                : 'border-ink/20 hover:border-accent text-ink'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-accent !opacity-50',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-accent !opacity-100',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full py-12"
        >
          {filteredSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`vintage-card group ${isActive ? 'ring-2 ring-accent' : ''}`}
                >
                  {skill.link ? (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-6 aspect-square border-2 border-ink/10"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-24 h-24 mb-4 transition-all duration-300 ${
                          isActive ? '' : 'grayscale'
                        } group-hover:grayscale-0`}
                      />
                      <h3 className="text-xl font-display font-bold text-center">{skill.name}</h3>
                      <p className="text-sm text-muted mt-2">{skill.category}</p>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center p-6 aspect-square border-2 border-ink/10">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-24 h-24 mb-4 transition-all duration-300 ${
                          isActive ? '' : 'grayscale'
                        } group-hover:grayscale-0`}
                      />
                      <h3 className="text-xl font-display font-bold text-center">{skill.name}</h3>
                      <p className="text-sm text-muted mt-2">{skill.category}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}