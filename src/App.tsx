import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Modal } from './components/Modal';
import { TimelineItem } from './components/TimelineItem';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillCarousel } from './components/SkillCarousel';
import { ProjectCard } from './components/ProjectCard';
import { PublicationCard } from './components/PublicationCard';
import { TechColumn } from './components/TechColumn';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import { FileDown, Mail } from 'lucide-react';
import profileImage from './images/prof-img-2025.jpg';
import resumeSS from './images/resume-ss.png';

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    details: string;
  }>(null);
  const [selectedPublication, setSelectedPublication] = useState<null | {
    title: string;
    authors: string[];
    details: string;
    journal: string;
    year: string;
    doi: string;
  }>(null);

  const timelineItems = [
    {
      date: "May 2025 - Present",
      title: "ML & Software Engineering Intern",
      organization: "Quantiphi",
      description: "Building production-grade multi-agent LLM systems for healthcare data intelligence and market research automation. Developing multi-agent pipelines using LangChain with GPT-4 integration, implementing identity and access control for ~60K users with Microsoft Entra ID, and deploying scalable systems on Azure. Achieved major operational efficiencies with ~$1.5M+ in projected annual impact.",
      logo: "/images/quantiphi-logo.png",
    },
    {
      date: "Jan 2025 - May 2025",
      title: "IT Support Staff",
      organization: "Virginia Tech Software Assistance & Triage (S.W.A.T)",
      description: "In this role, I deliver proactive IT support to College of Engineering students by diagnosing and resolving technical issues with personal computing devices. I manage the SWAT loaner laptop program with strict adherence to policy, ensuring that students receive reliable and efficient technology support. Additionally, I provide maintenance and troubleshooting for SWAT-designated computer labs, improving system performance and enhancing overall user experience.",
      logo: '/images/vt_logo.png',
    },
    {
      date: "2024 - Present",
      title: "Master's in Computer Engineering",
      organization: "Virginia Tech",
      description: "At Virginia Tech, I am pursuing a Master of Science in Computer Engineering with a concentration in AI/ML and Software Engineering. My coursework in Advanced Machine Learning, Computer Vision, and Natural Language Processing has equipped me with a strong foundation to develop cutting-edge AI solutions. The program has also given me exposure to real-world applications and collaborative research that drive innovation.",
      logo: '/images/vt_logo.png',
    },
    {
      date: "2022 - 2024",
      title: "Software Engineer",
      organization: "Quantiphi",
      description: "At Quantiphi, I worked as a Software Engineer where I collaborated closely with cross-functional teams and stakeholders to build scalable AI-driven applications. My work spanned from designing interactive frontends to building robust backend infrastructures, contributing to projects like NVIDIA's Digital Avatar and Starbucks' AI Assistant. I played a key role in enhancing user experience, optimizing system performance, and delivering high-impact solutions through stakeholder-centric development.",
      logo: "/images/quantiphi-logo.png",
    },
    {
      date: "2022",
      title: "Thesis Publication",
      organization: "Research Work",
      description: "My thesis work, titled \"Unhealthy Liver Detection using CNN with IoT,\" was presented at the 2023 IEEE ICSCSS conference. The project demonstrated the potential of deep learning for early liver disease detection using CT imagery, achieving an 86.8% detection rate. It integrated advanced image processing with CNN architectures and contributed valuable insights into AI-powered healthcare diagnostics.",
      logo: "/images/ieee-logo.png",
    },
    {
      date: "2020",
      title: "Chairperson of Events",
      organization: "Anna University Student Entrepreneurship Club",
      description: "As Chair of Events at Anna University's Student Entrepreneurship Club, I led the ideation and execution of flagship programs such as Idea Hub and Code Fest—initiatives that successfully incubated startups and promoted technical innovation. I restructured the club's operations, resulting in a 2x growth in student participation within a year. Additionally, as Charge d'Affaires for Anna University's Model United Nations, I spearheaded the university's first MUN conference and cultivated institutional partnerships to elevate the event's stature and outreach.",
      logo: "/images/ausec-logo.png",
    },
    {
      date: "2018 - 2022",
      title: "Bachelor's in Electronics and Communication Engineering",
      organization: "College of Engineering, Guindy (Anna University)",
      description: "During my undergraduate studies at Anna University, I built a strong technical foundation in electronics, software development, and systems design. Courses in Object-Oriented Programming, Operating Systems, and Soft Computing sparked my passion for technology and laid the groundwork for my journey into AI and software engineering. I also actively participated in technical projects and student-led initiatives that honed my practical and leadership skills.",
      logo: "/images/ceg-logo.jpg",
    }
  ];

  const projects = [
    {
      title: "Enhancing Emotional Well-Being through ML-based Music Emotion Recognition",
      description: "This project explores the emotional impact of music using machine learning, applying CNN and RNN (LSTM) architectures to classify emotions based on musical patterns.",
      details: "Trained on the DEAM dataset with MFCC-based features, the models achieved up to 76.22% accuracy, showcasing the RNN's effectiveness in processing sequential data. With potential applications in music recommendation systems, therapy, and mood-aware platforms, this project highlights the intersection of technology and emotional well-being.",
      image: "/images/mer.png",
      githubUrl: "https://github.com/AbhishekSubramanian/Enhancing-Emotional-Well-Being-through-ML-based-MER"
    },
    {
      title: "YOLOv5-Powered X-Ray Baggage Screening",
      description: "A computer vision-driven solution for enhancing airport security through real-time baggage threat detection using YOLOv5.",
      details: "Fine-tuned on the OPIXray dataset, the model accurately identifies suspicious items like knives and scissors, achieving high precision (90.3%) and recall (87.1%). Integrated into a user-friendly Streamlit web app, the system offers scalable deployment potential, aiming to reduce manual inspection efforts and support automated security protocols in high-risk zones.",
      image: "/images/yolo.webp",
      githubUrl: "https://github.com/AbhishekSubramanian/YOLOv5-Powered-X-Ray-Baggage-Screening-for-Threat-Detection-in-Airports"
    },
    {
      title: "Facial Emotion and Identity Recognition using CNN",
      description: "Real-time facial emotion and identity recognition system using CNNs built with TensorFlow and Keras.",
      details: "Leveraging OpenCV for webcam frame capture and face detection, the system classifies both emotional expressions and individual identities simultaneously. Designed for seamless real-time performance, this solution showcases how computer vision and deep learning can be harnessed for intelligent human-computer interaction in security, entertainment, and behavioral analysis domains.",
      image: "images/facial-recog.webp",
      githubUrl: "https://github.com/AbhishekSubramanian/Facial-Emotion-and-Identity-Recognition-using-CNN"
    },
    {
      title: "Liver Disease Detection using CNN and IoT",
      description: "Early liver disease diagnosis system combining CNN-based analysis of CT images with IoT-enabled health monitoring.",
      details: "Using image processing techniques to enhance detection accuracy, the system not only identifies unhealthy liver patterns but also employs Wi-Fi and GSM modules for real-time updates and emergency alerts. The result is a smart healthcare solution that enables continuous monitoring and faster medical intervention.",
      image: "/images/liver.png",
      githubUrl: "https://github.com/AbhishekSubramanian/Liver-Disease-Detection-CNN-IOT"
    },
    {
      title: "IMDB Movie Reviews Sentiment Analysis using DistilBERT",
      description: "NLP project performing sentiment analysis on IMDB Movie Reviews using the lightweight DistilBERT model.",
      details: "Trained using Hugging Face's Transformers library, the model efficiently classifies movie reviews as positive or negative, achieving ~90% accuracy. With applications in content review systems and opinion mining, the project demonstrates the effectiveness of transformer-based architectures in understanding contextual sentiment from textual data.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
      githubUrl: "https://github.com/AbhishekSubramanian/Sentiment-Analysis-IMDB-DistilBert"
    }
  ];

  const quantiphiDetails = `
    <p>
      At Quantiphi, I delivered cutting-edge, AI-driven solutions by translating client needs into scalable, secure, high-performance systems.
    </p>
    <ul>
      <li>Led backend development for an ML-powered music synthesis platform, implementing authentication, real-time music configuration, and monitoring services to support 5,000+ concurrent users with stable performance.</li>
      <li>Architected the data and API layers using MySQL, multithreaded processing, and scalable Flask APIs (CORS, WebSockets), containerized with Docker - reducing deployment time by 40% and increasing operational throughput.</li>
      <li>Developed a full-stack generative AI digital avatar chatbot using React (Redux) + Express, integrating NVIDIA Tokkio and a RAG pipeline for contextual recommendations, improving engagement metrics by ~45%.</li>
      <li>Engineered gRPC-based communication between NVIDIA Riva ASR/TTS and Tokkio microservices, reducing service-to-service latency by ~200ms and enabling real-time speech interaction.</li>
    </ul>
  `;

  const quantiphiInternDetails = `
    <p>
      As a Machine Learning & Software Engineering Intern, I build and deploy production-grade multi-agent LLM systems used for healthcare data intelligence and primary market research automation.
    </p>
    <ul>
      <li>Developed multi-agent pipelines using LangChain for search, summarization, supervision, and validation, integrating outputs from GPT-4, internal knowledge systems, authenticated clinical sources, and SERP-driven retrieval.</li>
      <li>Built secure Selenium-based data extractors and applied an LLM-as-a-judge framework to detect hallucinations and ensure factual output quality.</li>
      <li>Designed and implemented identity and access control for ~60K users with Microsoft Entra ID, RBAC, PKCE, OAuth propagation, and MFA, ensuring compliant and secure access to AI workflow services.</li>
      <li>Developed UI and middleware components using Streamlit, Vue, Next.js, and FastAPI to support real-time inspection and interaction with agent outputs.</li>
      <li>Leveraged LangSmith to trace reasoning steps, debug failures, and iteratively strengthen agent reliability and correctness in production.</li>
      <li>Deployed and scaled systems on Azure (App Services, Blob Storage, Azure OpenAI), managing model provisioning, access governance, and performance scaling.</li>
      <li>Achieved major operational efficiencies, automating manual data workflows, reducing verification cycles by months, and generating ~$1.5M+ in projected annual impact.</li>
    </ul>
  `;

  const bahwanCyberTekDetails = `
    <p>
      During my internship at Bahwan CyberTek, I developed an Android app using Java and XML, 
      streamlining the retrieval of vehicle inspection documents and reducing processing time by 40%.
    </p>
    <ul>
      <li>Integrated a QR code scanner with the ZXing library.</li>
      <li>Utilized Firebase Real-Time Database for efficient data management.</li>
      <li>Implemented Firebase Authentication for secure user access.</li>
    </ul>
  `;

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />
      
      {/* ===== HERO SECTION ===== */}
      <section id="front-page" className="pt-24 pb-14 sm:pt-28 sm:pb-16">
        <div className="newspaper-container">
          {/* Masthead */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12"
          >
            {/* Main headline */}
            <h1 className="masthead mb-5">
              <span className="block text-accent dark:text-gold">The Portfolio</span>
              <span className="block">Times</span>
            </h1>
            
            {/* Decorative line */}
            <div className="w-24 h-0.5 bg-accent/50 dark:bg-gold/50 mx-auto mb-5" />
            
            {/* Subtitle */}
            <p className="font-accent text-base sm:text-lg text-muted max-w-lg mx-auto leading-relaxed">
              A collection of work, ideas, and experiences in 
              <span className="text-accent dark:text-gold"> software engineering</span> & 
              <span className="text-accent dark:text-gold"> machine learning</span>
            </p>
          </motion.div>

          {/* Hero content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="profile-image-container">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={profileImage} 
                    alt="Abhishek Subramanian"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 
                               transition-all duration-700 ease-out"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* About text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-6">
                <p className="drop-cap text-ink/85 leading-relaxed text-lg">
                  Just as newspapers once chronicled history, this portfolio serves as my personal front page — a curated collection of stories, achievements, and the continuous pursuit of innovation.
                </p>
                <p className="text-ink/75 leading-relaxed">
                  As a Master's student in Computer Engineering at Virginia Tech, I specialize in machine learning, AI-driven applications, and modern software development. My work bridges natural language processing, computer vision, and full-stack engineering.
                </p>
                <p className="text-ink/75 leading-relaxed">
                  I stay on top of LLM advancements, tech trends, and AI-powered tools, continuously experimenting with cutting-edge innovations. Whether it's building multi-agent systems, refining prompt engineering, or developing scalable software solutions — I'm always chasing the next breakthrough.
                </p>
                
                <motion.button 
                  className="vintage-button mt-8"
                  onClick={() => setIsAboutModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Read Full Story</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="expertise" className="py-12 section-muted">
        <div className="newspaper-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline">Technical Expertise</h2>
            <p className="subheadline mb-8 -mt-2">
              A comprehensive toolkit for building the future
            </p>
          </motion.div>
          <SkillCarousel />
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section id="story" className="py-12">
        <div className="newspaper-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline">The Story So Far</h2>
            <p className="subheadline mb-10 -mt-2">
              A journey through education, innovation, and impact
            </p>
          </motion.div>
          
          <div className="timeline-wrapper">
            <div className="timeline-line" />
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                organization={item.organization}
                description={item.description}
                logo={item.logo}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="py-12 section-muted">
        <div className="newspaper-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline">Professional Bylines</h2>
            <p className="subheadline mb-8 -mt-2">
              Detailed accounts of professional contributions
            </p>
          </motion.div>
          
          <div className="space-y-6">
            <ExperienceCard
              title="ML & Software Engineering Intern"
              company="Quantiphi"
              duration="May 2025 - Present"
              location="Greater Boston · Remote"
              type="Internship"
              logo="/images/quantiphi-logo.png"
              details={quantiphiInternDetails}
            />
            
            <ExperienceCard
              title="Software Engineer"
              company="Quantiphi"
              duration="2022 - 2024"
              location="Bengaluru, India"
              type="Full-Time"
              logo="/images/quantiphi-logo.png"
              details={quantiphiDetails}
            />
            
            <ExperienceCard
              title="Mobile Application Development Intern"
              company="Bahwan CyberTek"
              duration="Mar 2021 - Apr 2021"
              location="Muscat, Oman"
              type="Internship"
              logo="/images/bahwan-logo.jpg"
              details={bahwanCyberTekDetails}
            />
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-12">
        <div className="newspaper-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline">Featured Stories</h2>
            <p className="subheadline mb-8 -mt-2">
              Projects that showcase innovation and technical depth
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                githubUrl={project.githubUrl}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PUBLICATIONS SECTION ===== */}
      <section id="publications" className="py-12 section-muted">
        <div className="newspaper-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline">Editorials & Reports</h2>
            <p className="subheadline mb-8 -mt-2">
              Peer-reviewed research and academic contributions
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <PublicationCard
              title="Unhealthy Liver Detection using CNN with IoT"
              authors={[
                "S. Ewins Pon Pushpa",
                "T. Jayasree",
                "Vineeth Ajith John",
                "Abhishek Subramanian",
                "Varun Chandrashekhar",
                "Sivakumar Sankareswaran"
              ]}
              journal="2023 IEEE International Conference on Smart Computing and Systems for Sustainable Solutions (SCSSS)"
              year="2023"
              doi="10.1109/ICSCSS56977.2023.10169799"
              onClick={() => setSelectedPublication({
                title: "Unhealthy Liver Detection using CNN with IoT",
                authors: [
                  "S. Ewins Pon Pushpa",
                  "T. Jayasree",
                  "Vineeth Ajith John",
                  "Abhishek Subramanian",
                  "Varun Chandrashekhar",
                  "Sivakumar Sankareswaran"
                ],
                journal: "2023 IEEE International Conference on Smart Computing and Systems for Sustainable Solutions (SCSSS)",
                year: "2023",
                doi: "10.1109/ICSCSS56977.2023.10169799",
                details: "This research introduces a deep learning-based liver disease detection system powered by Convolutional Neural Networks (CNN) and supported by an IoT-enabled alert mechanism. The system analyzes CT images to distinguish between healthy and unhealthy livers and uses Wi-Fi and GSM modules to continuously update patient data and send emergency alerts. The proposed methodology integrates core image processing techniques and intelligent automation, aiming to enhance early diagnosis and proactive healthcare interventions."
              })}
            />
          </div>
        </div>
      </section>

      {/* ===== TECH COLUMN SECTION ===== */}
      <TechColumn />

      {/* ===== RESUME SECTION ===== */}
      <section id="resume" className="py-12">
        <div className="newspaper-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline">Print Edition</h2>
            <p className="subheadline mb-8 -mt-2">
              The complete story in a single document
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="premium-card w-full max-w-md overflow-hidden">
              <div className="aspect-[8.5/11] bg-ink/5 overflow-hidden">
                <img
                  src={resumeSS} 
                  alt="Resume preview"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 
                             transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="images/resume.pdf"
                  download
                  className="vintage-button flex-1 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF</span>
                </motion.a>
                <motion.a
                  href="mailto:abhisheksubramanianofficial@gmail.com?subject=Resume%20Request"
                  className="vintage-button-outline flex-1 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* ===== MODALS ===== */}
      <Modal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)}>
        <div className="prose-ink max-w-none">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-ink/80 leading-relaxed mb-6">
            As a Master's student in Computer Engineering at Virginia Tech, I focus on machine learning and software engineering, applying AI concepts to build intelligent, scalable systems. My interests range from natural language processing (NLP) to computer vision, and I enjoy dissecting emerging AI-powered tools to understand their real-world impact.
          </p>
          <p className="text-ink/75 leading-relaxed mb-8">
            Beyond just development, I thrive on exploring how LLMs, AI automation, and corporate AI strategies are shaping the industry. Whether it's prompt engineering, analyzing AI workflows, or fine-tuning ML models, I enjoy bridging research and real-world applications.
          </p>
          
          <h3 className="font-display text-xl font-bold mt-10 mb-6 flex items-center gap-3">
            <span className="text-accent">📌</span> What I'm Currently Working On
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>AI-Powered Tools</strong> – Experimenting with and evaluating cutting-edge AI applications.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>Machine Learning & Software Engineering</strong> – Developing software solutions that integrate AI capabilities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>Keeping Up with Tech Trends</strong> – Reading the latest research and corporate AI advancements.</span>
            </li>
          </ul>
          
          <p className="text-ink/75 leading-relaxed italic">
            For me, every project is a story — a headline in the evolving narrative of tech progress.
          </p>
          
          <p className="font-display font-semibold mt-10 text-accent">
            🔗 Want to discuss AI, machine learning, or tech innovations? Let's connect!
          </p>
        </div>
      </Modal>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="prose-ink max-w-none">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">{selectedProject.title}</h2>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">{selectedProject.description}</p>
            <div className="text-ink/75 leading-relaxed">{selectedProject.details}</div>
          </div>
        )}
      </Modal>

      <Modal isOpen={!!selectedPublication} onClose={() => setSelectedPublication(null)}>
        {selectedPublication && (
          <div className="prose-ink max-w-none">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">{selectedPublication.title}</h2>
            <p className="text-lg text-ink/80 mb-4">
              <strong>Authors:</strong> {selectedPublication.authors.join(', ')}
            </p>
            <p className="italic text-muted mb-6">
              {selectedPublication.journal}, {selectedPublication.year}
            </p>
            <p className="mb-8">
              <a 
                href="https://ieeexplore.ieee.org/document/10169799" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/70 transition-colors"
              >
                DOI: {selectedPublication.doi}
              </a>
            </p>
            <div className="text-ink/75 leading-relaxed">{selectedPublication.details}</div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
