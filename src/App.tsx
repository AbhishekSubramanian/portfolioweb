import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Modal } from './components/Modal';
import { TimelineItem } from './components/TimelineItem';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillCarousel } from './components/SkillCarousel';
import { ProjectCard } from './components/ProjectCard';
import { PublicationCard } from './components/PublicationCard';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, FileDown, Mail } from 'lucide-react';
import profileImage from './images/prof-img-2.jpg';
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
      date: "2022 - Present",
      title: "Master's in Computer Engineering",
      organization: "Virginia Tech",
      description: "At Virginia Tech, I am pursuing a Master of Science in Computer Engineering with a concentration in AI/ML and Software Engineering. My coursework in Advanced Machine Learning, Computer Vision, and Natural Language Processing has equipped me with a strong foundation to develop cutting-edge AI solutions. The program has also given me exposure to real-world applications and collaborative research that drive innovation.",
      logo: '/images/vt_logo.png',
    },
    {
      date: "2022 - 2024",
      title: "Full Stack Software Developer",
      organization: "Quantiphi",
      description: "At Quantiphi, I worked as a Full-Stack Software Developer where I collaborated closely with cross-functional teams and stakeholders to build scalable AI-driven applications. My work spanned from designing interactive frontends to building robust backend infrastructures, contributing to projects like NVIDIA's Digital Avatar and Starbucks' AI Assistant. I played a key role in enhancing user experience, optimizing system performance, and delivering high-impact solutions through stakeholder-centric development.",
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

  // Add this projects array right after the workExperience array and before the return statement
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
    At Quantiphi, I delivered cutting-edge, AI-driven solutions by translating client needs into scalable, 
    high-performance systems. Key projects include:
  </p>

  <h5 class="font-display text-lg font-medium">NVIDIA Digital Avatar Solution:</h5>
  <ul>
    <li>Developed a responsive frontend using Figma, React.js, and Material UI to integrate NVIDIA’s Digital Avatar (powered by Llama’s 33b LLM).</li>
    <li>Reduced load times by 30% through optimized frontend-backend communication.</li>
    <li>Implemented real-time captioning and chat using NVIDIA Riva’s ASR and TTS for seamless audio-visual synchronization.</li>
  </ul>

  <h5 class="font-display text-lg font-medium">Magical Bridge Foundation:</h5>
  <ul>
    <li>Led backend development for an intelligent music synthesis platform, architecting a secure, scalable system featuring a user authentication module, a parameter-driven music configurator, and a real-time server monitoring system.</li>
    <li>Utilized Flask APIs, MySQL, and multithreading to manage 100+ concurrent users, achieving performance gains through database pooling and containerization with Docker.</li>
    <li>Integrated Pub/Sub modules and WebSockets to monitor server health in real time, reducing downtime by 25% and improving response times by 60%.</li>
  </ul>

  <h5 class="font-display text-lg font-medium">Starbucks AI Assistant:</h5>
  <ul>
    <li>Engineered components for an LLM-powered digital avatar chatbot delivering personalized drink recommendations from Starbucks’ catalog.</li>
    <li>Designed a highly responsive React.js frontend and a scalable Express.js backend, leveraging gRPC for real-time communication between NVIDIA Riva and Tokkio microservices.</li>
    <li>Worked closely with client teams to fine-tune conversational flows, enhancing the assistant's accuracy and user engagement.</li>
  </ul>
`;

// Nicely formatted details for Bahwan CyberTek
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
      
      {/* Front Page / Hero Section */}
      <section id="front-page" className="pt-24 pb-16">
        <div className="newspaper-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="headline mb-4">
              EXTRA! EXTRA!
              <br />
              MEET ABHISHEK SUBRAMANIAN
            </h1>
            <div className="max-w-3xl mx-auto">
              {/* <p className="subheadline italic mb-8">
                "In an age of fleeting trends, I believe in craftsmanship, clarity, and character."
              </p> */}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden border-4 border-ink/10">
                <img
                  src={profileImage} 
                  alt="Professional headshot"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-justify body-text space-y-4"
            >
              <p>
                Just as newspapers once chronicled history, this portfolio serves as my personal front page.
              </p>
              <p>
                As a Master's student in Computer Engineering, I specialize in machine learning, AI-driven applications, and modern software development. My work bridges natural language processing (NLP), computer vision, and full-stack engineering, exploring how AI reshapes our digital world.
              </p>
              <p>
                I stay on top of LLM advancements, tech trends, and AI-powered tools, continuously experimenting with cutting-edge innovations. Whether it's testing new AI applications, refining prompt engineering, or developing scalable software solutions, I'm always chasing the next big breakthrough.
              </p>
              <button 
                className="vintage-button mt-6"
                onClick={() => setIsAboutModalOpen(true)}
              >
                Read More About Me
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="expertise" className="py-16">
        <div className="newspaper-container">
          <h2 className="headline text-center mb-12">Special Report: Technical Expertise</h2>
          <SkillCarousel />
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="story" className="py-16 bg-ink/5">
        <div className="newspaper-container">
          <h2 className="headline text-center mb-16">The Story So Far</h2>
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

      
{/* Experience Section */}
<section id="experience" className="pt-16">
  <div className="newspaper-container">
    <h2 className="headline text-center mb-12">Professional Bylines</h2>
    <ExperienceCard
      title="Full Stack Software Developer"
      company="Quantiphi"
      duration="2022 - 2024"
      location="Bengaluru, India" // Replace with your actual location
      type="Full-Time"
      logo="/images/quantiphi-logo.png" // Replace with your Quantiphi logo URL
      details={quantiphiDetails}
    />
    
    <div className="my-4" />
    <ExperienceCard
      title="Mobile Application Development Intern"
      company="Bahwan CyberTek"
      duration="Mar 2021 - Apr 2021"
      location="Muscat, Oman" // Add location if needed
      type="Internship"
      logo="/images/bahwan-logo.jpg" // Replace with your Bahwan CyberTek logo URL
      details={bahwanCyberTekDetails}
    />
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="newspaper-container">
          <h2 className="headline text-center mb-12">Featured Stories</h2>
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

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-ink/5">
        <div className="newspaper-container">
          <h2 className="headline text-center mb-12">Editorials & Reports</h2>
          <div className="space-y-8">
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

      {/* Resume Section */}
      <section id="resume" className="py-16">
        <div className="newspaper-container">
          <h2 className="headline text-center">Print Edition</h2>
          <div className="flex flex-col items-center">
            <div className="vintage-card w-full max-w-sm mb-8">
              <div className="aspect-[8.5/11] bg-ink/5 rounded mb-6">
                <img
                  src={resumeSS} 
                  alt="Resume preview"
                  className="w-full h-full object-cover rounded grayscale"
                />
              </div>
              <div className="flex gap-4">
                <a
                  href="images/resume.pdf"
                  download
                  className="vintage-button flex-1 flex items-center justify-center gap-2 text-sm"
                >
                  <FileDown className="w-4 h-4" />
                  Download PDF
                </a>
                <a
                  href="mailto:abhisheksubramanianofficial@gmail.com?subject=Resume%20Request"
                  className="vintage-button flex-1 flex items-center justify-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Request Print Copy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <Modal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)}>
        <div className="prose prose-ink max-w-none">
          <h2 className="font-display text-3xl font-bold mb-6">About Me</h2>
          <p>
            As a Master's student in Computer Engineering, I focus on machine learning and software engineering, applying AI concepts to build intelligent, scalable systems. My interests range from natural language processing (NLP) to computer vision, and I enjoy dissecting emerging AI-powered tools to understand their real-world impact.
          </p>
          <p>
            Beyond just development, I thrive on exploring how LLMs, AI automation, and corporate AI strategies are shaping the industry. Whether it's prompt engineering, analyzing AI workflows, or fine-tuning ML models, I enjoy bridging research and real-world applications.
          </p>
          <h3 className="font-display text-xl font-bold mt-8 mb-4">📌 What I'm Currently Working On:</h3>
          <ul>
            <li> AI-Powered Tools – Experimenting with and evaluating cutting-edge AI applications.</li>
            <li> Machine Learning & Software Engineering – Developing software solutions that integrate AI capabilities.</li>
            <li> Keeping Up with Tech Trends – Reading the latest research and corporate AI advancements.</li>
          </ul>
          <p>
          For me, every project is a story—a headline in the evolving narrative of tech progress. 
          </p>
          <p className="font-bold mt-8">
            🔗 Want to discuss AI, machine learning, or tech innovations? Let's connect!
          </p>
        </div>
      </Modal>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="prose prose-ink max-w-none">
            <h2 className="font-display text-3xl font-bold mb-6">{selectedProject.title}</h2>
            <p className="text-lg mb-4">{selectedProject.description}</p>
            <div className="mt-4">{selectedProject.details}</div>
          </div>
        )}
      </Modal>

      <Modal isOpen={!!selectedPublication} onClose={() => setSelectedPublication(null)}>
        {selectedPublication && (
          <div className="prose prose-ink max-w-none">
            <h2 className="font-display text-3xl font-bold mb-6">{selectedPublication.title}</h2>
            <p className="text-lg mb-4">Authors: {selectedPublication.authors.join(', ')}</p>
            <p className="italic mb-4">{selectedPublication.journal}, {selectedPublication.year}</p>
            <p className="mb-6">
  DOI: <a href="https://ieeexplore.ieee.org/document/10169799" target="_blank" rel="noopener noreferrer">
    {selectedPublication.doi}
  </a>
</p>


            <div className="mt-4">{selectedPublication.details}</div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;