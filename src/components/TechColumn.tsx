import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Cpu, RefreshCw, Shield, ChevronDown, Calendar, Zap } from 'lucide-react';

// Define the 5 open-source models
const models = [
  { id: 'qwen', name: 'Qwen 2.5 (72B)', company: 'Alibaba' },
  { id: 'llama', name: 'Llama 3.1 (70B)', company: 'Meta' },
  { id: 'mistral', name: 'Mistral Large 2', company: 'Mistral AI' },
  { id: 'gemma', name: 'Gemma 2 (27B)', company: 'Google' },
  { id: 'deepseek', name: 'DeepSeek V2.5', company: 'DeepSeek' },
];

// Define the 6 fixed topics
const topics = [
  'neural-networks',
  'mlops',
  'transformers',
  'federated-learning',
  'computer-vision',
  'llm-agents',
] as const;

type TopicId = typeof topics[number];
type ModelId = typeof models[number]['id'];

interface ArticleContent {
  title: string;
  preview: string;
  category: string;
}

// 6 topics × 5 models = 30 unique article variations
const articleDatabase: Record<ModelId, Record<TopicId, ArticleContent>> = {
  qwen: {
    'neural-networks': {
      title: "Advances in Neural Network Architectures for Edge Computing",
      preview: "Qwen's analysis reveals breakthrough optimization techniques for deploying neural networks on resource-constrained devices. New quantization methods achieve 4x compression with minimal accuracy loss, enabling real-time inference on mobile processors...",
      category: "Deep Learning"
    },
    'mlops': {
      title: "Streamlining ML Pipelines with Automated Feature Stores",
      preview: "According to Qwen's research synthesis, modern MLOps practices are converging around automated feature stores that reduce data preparation time by 60%. Key innovations include real-time feature computation and versioned feature catalogs...",
      category: "MLOps"
    },
    'transformers': {
      title: "Efficient Attention Mechanisms Beyond Quadratic Complexity",
      preview: "Qwen highlights linear attention variants that process sequences 10x longer than standard transformers. Techniques like sliding window attention and sparse patterns enable context lengths exceeding 128K tokens while maintaining coherence...",
      category: "NLP"
    },
    'federated-learning': {
      title: "Privacy-Preserving AI Through Secure Aggregation Protocols",
      preview: "Qwen's overview of federated learning advances shows new cryptographic techniques enabling model training across thousands of devices without exposing raw data. Differential privacy guarantees now achieve epsilon values below 1.0...",
      category: "Privacy AI"
    },
    'computer-vision': {
      title: "Vision Foundation Models: The New Paradigm for Visual Understanding",
      preview: "According to Qwen, self-supervised vision models trained on billions of images now outperform task-specific models across 20+ benchmarks. Zero-shot transfer capabilities approach human-level performance on novel visual tasks...",
      category: "Computer Vision"
    },
    'llm-agents': {
      title: "Autonomous AI Agents: From Tool Use to Complex Reasoning",
      preview: "Qwen examines the rapid evolution of LLM-based agents capable of multi-step planning and tool orchestration. Recent systems demonstrate reliable task completion rates above 85% on complex real-world workflows...",
      category: "AI Agents"
    }
  },
  llama: {
    'neural-networks': {
      title: "Scaling Laws and Emergent Capabilities in Deep Networks",
      preview: "Llama's investigation into neural scaling reveals predictable performance improvements following power laws. Critical capability thresholds emerge at specific parameter counts, with reasoning abilities appearing around 10B parameters...",
      category: "Deep Learning"
    },
    'mlops': {
      title: "GitOps for Machine Learning: Version Control Best Practices",
      preview: "Llama's research compilation emphasizes treating ML artifacts as code. New workflows combining DVC, MLflow, and Kubernetes enable reproducible experiments with one-click rollbacks. Teams report 40% faster iteration cycles...",
      category: "MLOps"
    },
    'transformers': {
      title: "Mixture of Experts: Scaling Without Proportional Compute",
      preview: "Llama covers MoE architectures that activate only 10-20% of parameters per token, achieving GPT-4 level performance at a fraction of inference cost. Routing mechanisms now handle expert load balancing automatically...",
      category: "NLP"
    },
    'federated-learning': {
      title: "Cross-Device Learning at Scale: Lessons from Production Systems",
      preview: "Llama synthesizes learnings from federated systems serving billions of devices. Asynchronous aggregation protocols handle device heterogeneity, while compression techniques reduce communication costs by 100x...",
      category: "Privacy AI"
    },
    'computer-vision': {
      title: "Multimodal Understanding: Bridging Vision and Language",
      preview: "Llama reports on vision-language models that achieve state-of-the-art results on visual reasoning tasks. Cross-modal attention mechanisms enable nuanced understanding of image-text relationships...",
      category: "Computer Vision"
    },
    'llm-agents': {
      title: "ReAct and Beyond: Structured Reasoning in Language Agents",
      preview: "Llama analyzes reasoning frameworks that combine chain-of-thought with action execution. Tree-of-thought approaches now solve problems requiring 15+ reasoning steps with 90% accuracy...",
      category: "AI Agents"
    }
  },
  mistral: {
    'neural-networks': {
      title: "Sparse Networks: Achieving Density-Independent Performance",
      preview: "Mistral's technical analysis shows that 90% sparse networks match dense counterparts when properly trained. Structured sparsity patterns enable hardware acceleration, reducing inference latency by 5x on standard GPUs...",
      category: "Deep Learning"
    },
    'mlops': {
      title: "Continuous Training: Keeping Models Fresh in Production",
      preview: "Mistral compiles strategies for continuous model updates without service disruption. Shadow deployments and gradual rollouts reduce regression risks, while automated monitoring detects distribution drift within hours...",
      category: "MLOps"
    },
    'transformers': {
      title: "Context Extension Through Position Interpolation",
      preview: "Mistral details position encoding modifications that extend context windows without retraining. RoPE scaling and ALiBi variants enable 32K context models to handle 128K tokens with minimal perplexity increase...",
      category: "NLP"
    },
    'federated-learning': {
      title: "Vertical Federated Learning for Enterprise Data Silos",
      preview: "Mistral presents vertical FL techniques for scenarios where features are distributed across organizations. Secure multi-party computation enables joint model training on complementary datasets without data pooling...",
      category: "Privacy AI"
    },
    'computer-vision': {
      title: "Video Understanding: Temporal Modeling at Scale",
      preview: "Mistral covers video foundation models processing hour-long content. Hierarchical temporal transformers capture both local motion and long-range narrative structure, enabling unprecedented video comprehension...",
      category: "Computer Vision"
    },
    'llm-agents': {
      title: "Multi-Agent Systems: Collaboration and Specialization",
      preview: "Mistral explores architectures where multiple LLM agents collaborate on complex tasks. Role-based specialization and inter-agent communication protocols achieve results impossible for single-agent systems...",
      category: "AI Agents"
    }
  },
  gemma: {
    'neural-networks': {
      title: "Knowledge Distillation: Compact Models Without Compromise",
      preview: "Gemma's research survey shows distilled models retaining 95% of teacher performance at 10x smaller size. Progressive distillation and feature matching techniques preserve nuanced capabilities in student networks...",
      category: "Deep Learning"
    },
    'mlops': {
      title: "Model Monitoring: Detecting Silent Failures in Production",
      preview: "Gemma synthesizes approaches for identifying degraded model performance before user impact. Statistical tests on prediction distributions catch subtle drift patterns, while explainability tools surface root causes...",
      category: "MLOps"
    },
    'transformers': {
      title: "Instruction Tuning: Aligning Models with Human Intent",
      preview: "Gemma analyzes instruction-following improvements through RLHF and DPO techniques. Constitutional AI methods now achieve alignment without human preference data, using model self-critique for refinement...",
      category: "NLP"
    },
    'federated-learning': {
      title: "Personalization in Federated Systems: Local Adaptation Strategies",
      preview: "Gemma presents personalized FL approaches where global models are locally fine-tuned. Meta-learning techniques enable rapid adaptation to individual user patterns while preserving privacy guarantees...",
      category: "Privacy AI"
    },
    'computer-vision': {
      title: "3D Understanding from 2D Images: Depth and Structure Recovery",
      preview: "Gemma reports on monocular 3D perception advances achieving LiDAR-comparable accuracy. Neural radiance fields and gaussian splatting enable photorealistic novel view synthesis from sparse image inputs...",
      category: "Computer Vision"
    },
    'llm-agents': {
      title: "Tool Learning: Teaching Models to Use External APIs",
      preview: "Gemma examines how LLMs learn to invoke external tools effectively. Function calling capabilities now handle complex API schemas, with models selecting appropriate tools for multi-step task decomposition...",
      category: "AI Agents"
    }
  },
  deepseek: {
    'neural-networks': {
      title: "Training Efficiency: Reducing Compute While Scaling Quality",
      preview: "DeepSeek's analysis reveals training recipes that achieve frontier performance with 3x less compute. Curriculum learning, optimal batch size scheduling, and learning rate warmup strategies compound efficiency gains...",
      category: "Deep Learning"
    },
    'mlops': {
      title: "Cost Optimization: Right-Sizing ML Infrastructure",
      preview: "DeepSeek compiles infrastructure optimization strategies reducing ML serving costs by 70%. Spot instance orchestration, model caching, and request batching maximize GPU utilization while maintaining latency SLAs...",
      category: "MLOps"
    },
    'transformers': {
      title: "Long-Form Generation: Maintaining Coherence Across Documents",
      preview: "DeepSeek investigates techniques for generating coherent long-form content. Hierarchical planning, outline-based generation, and consistency checking enable 10,000+ word outputs without topic drift...",
      category: "NLP"
    },
    'federated-learning': {
      title: "Incentive Mechanisms for Decentralized Model Training",
      preview: "DeepSeek presents game-theoretic frameworks for federated learning participation. Token-based incentives and contribution scoring ensure fair reward distribution while maintaining model quality...",
      category: "Privacy AI"
    },
    'computer-vision': {
      title: "Generative Vision: From Diffusion Models to Video Synthesis",
      preview: "DeepSeek surveys generative image and video models achieving photorealistic quality. Latent diffusion architectures with temporal layers produce coherent video content from text descriptions...",
      category: "Computer Vision"
    },
    'llm-agents': {
      title: "Memory-Augmented Agents: Persistent Knowledge Across Sessions",
      preview: "DeepSeek examines agent architectures with external memory stores. Retrieval-augmented generation combined with episodic memory enables agents to learn from past interactions and maintain long-term context...",
      category: "AI Agents"
    }
  }
};

export function TechColumn() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ModelId>('qwen');
  const [displayedTopics, setDisplayedTopics] = useState<TopicId[]>(['neural-networks', 'mlops']);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState('');

  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  // Get current articles based on selected model and displayed topics
  const currentArticles = displayedTopics.map(topic => ({
    topic,
    ...articleDatabase[selectedModel][topic]
  }));

  // Shuffle to get 2 random topics from the 6
  const shuffleTopics = useCallback(() => {
    const shuffled = [...topics].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2) as TopicId[];
  }, []);

  // Generate new articles (shuffle topics, keep same model)
  const generateArticles = () => {
    setIsGenerating(true);
    setLoadingProgress(0);
    setLoadingStage('Initializing model...');

    const stages = [
      { progress: 15, text: `Loading ${models.find(m => m.id === selectedModel)?.name} weights...` },
      { progress: 30, text: 'Preparing context window...' },
      { progress: 50, text: 'Generating article outlines...' },
      { progress: 70, text: 'Composing content...' },
      { progress: 85, text: 'Applying content moderation...' },
      { progress: 100, text: 'Printing front page...' },
    ];

    let stageIndex = 0;
    const stageInterval = setInterval(() => {
      if (stageIndex < stages.length) {
        setLoadingProgress(stages[stageIndex].progress);
        setLoadingStage(stages[stageIndex].text);
        stageIndex++;
      }
    }, 400);

    setTimeout(() => {
      clearInterval(stageInterval);
      setDisplayedTopics(shuffleTopics());
      setIsGenerating(false);
    }, 2800);
  };

  // Handle model change - show loading animation, keep same topics
  const handleModelChange = (newModel: ModelId) => {
    if (newModel === selectedModel) {
      setShowModelDropdown(false);
      return;
    }
    
    setShowModelDropdown(false);
    setIsGenerating(true);
    setLoadingProgress(0);
    setLoadingStage('Switching models...');

    const newModelInfo = models.find(m => m.id === newModel);
    const stages = [
      { progress: 20, text: `Unloading current model...` },
      { progress: 40, text: `Loading ${newModelInfo?.name} weights...` },
      { progress: 60, text: 'Initializing inference engine...' },
      { progress: 80, text: 'Regenerating articles...' },
      { progress: 100, text: 'Ready!' },
    ];

    let stageIndex = 0;
    const stageInterval = setInterval(() => {
      if (stageIndex < stages.length) {
        setLoadingProgress(stages[stageIndex].progress);
        setLoadingStage(stages[stageIndex].text);
        stageIndex++;
      }
    }, 350);

    setTimeout(() => {
      clearInterval(stageInterval);
      setSelectedModel(newModel);
      setIsGenerating(false);
    }, 2000);
  };

  // Initial load
  useEffect(() => {
    setDisplayedTopics(shuffleTopics());
  }, [shuffleTopics]);

  const selectedModelInfo = models.find(m => m.id === selectedModel);

  return (
    <section id="tech-column" className="py-12 section-muted">
      <div className="newspaper-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-ink/20" />
            <Zap className="w-5 h-5 text-accent" />
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-ink/20" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            The Tech Column
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6" />
          <p className="font-accent text-lg text-muted italic">
            AI-curated insights on the latest in technology
          </p>
        </motion.div>

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-4 
                     bg-paper dark:bg-ink/10 border border-ink/10 dark:border-gold/20"
        >
          <div className="flex items-center gap-3">
            <Newspaper className="w-5 h-5 text-accent" />
            <h3 className="font-display text-xl font-bold">Today's Tech Insights</h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Model Selector */}
            <div className="relative">
              <button
                onClick={() => setShowModelDropdown(!showModelDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-paper dark:bg-ink/20 
                           border border-ink/10 dark:border-gold/20
                           hover:border-accent/30 dark:hover:border-gold/40 
                           transition-all duration-300 text-sm font-accent"
              >
                <Cpu className="w-4 h-4 text-accent" />
                <span>{selectedModelInfo?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showModelDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showModelDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-1 w-full min-w-[200px] 
                               bg-paper dark:bg-[rgb(35,32,30)] 
                               border border-ink/10 dark:border-gold/20 
                               shadow-elegant z-20"
                  >
                    {models.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => handleModelChange(model.id as ModelId)}
                        className={`w-full px-4 py-3 text-left text-sm font-accent 
                                   hover:bg-accent/10 dark:hover:bg-gold/10 transition-colors
                                   border-b border-ink/5 dark:border-gold/10 last:border-b-0
                                   ${model.id === selectedModel ? 'bg-accent/5 dark:bg-gold/5 text-accent' : ''}`}
                      >
                        <div className="font-semibold">{model.name}</div>
                        <div className="text-xs text-muted">{model.company}</div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Moderation Badge */}
            <div className="flex items-center gap-2 px-3 py-2 
                           bg-green-50 dark:bg-green-900/20 
                           border border-green-200 dark:border-green-700/50 
                           text-green-700 dark:text-green-400 text-sm font-accent">
              <Shield className="w-4 h-4" />
              <span>Content Moderated</span>
            </div>

            {/* Generate Button */}
            <motion.button
              onClick={generateArticles}
              disabled={isGenerating}
              className="flex items-center gap-2 px-5 py-2 bg-accent text-paper 
                         font-accent text-sm uppercase tracking-wider
                         hover:bg-accent/90 transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>Generate New Articles</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {isGenerating ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-2xl p-8 bg-paper dark:bg-ink/10 
                              border border-ink/10 dark:border-gold/20 shadow-elegant">
                {/* Press Room Header */}
                <div className="text-center mb-8">
                  <div className="inline-block px-6 py-2 border-2 border-ink/20 dark:border-gold/30 mb-4">
                    <h4 className="font-display text-2xl font-bold tracking-wider">PRESS ROOM</h4>
                  </div>
                  <p className="font-accent text-muted italic">{loadingStage}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="h-3 bg-ink/10 dark:bg-ink/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgb(var(--color-accent)), rgb(var(--color-gold)))'
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs font-accent text-muted">
                    <span>Initializing</span>
                    <span>{loadingProgress}%</span>
                    <span>Complete</span>
                  </div>
                </div>

                {/* Animated Newspaper Icon */}
                <div className="flex justify-center">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-24 h-28 border-2 border-ink/20 dark:border-gold/30 
                                    bg-paper dark:bg-ink/20 relative overflow-hidden">
                      <div className="absolute top-3 left-3 right-3 h-2 bg-ink/10 dark:bg-gold/20" />
                      <div className="absolute top-7 left-3 right-3 h-1 bg-ink/5 dark:bg-gold/10" />
                      <div className="absolute top-10 left-3 right-3 h-1 bg-ink/5 dark:bg-gold/10" />
                      <div className="absolute top-14 left-3 w-8 h-6 bg-ink/5 dark:bg-gold/10" />
                      <div className="absolute top-14 right-3 left-14 space-y-1">
                        <div className="h-1 bg-ink/5 dark:bg-gold/10" />
                        <div className="h-1 bg-ink/5 dark:bg-gold/10" />
                        <div className="h-1 bg-ink/5 dark:bg-gold/10 w-3/4" />
                      </div>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2 py-1 
                                      bg-accent/10 border border-accent/20">
                        <span className="text-[8px] font-accent uppercase tracking-wider text-accent">NEWS</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 
                                    bg-ink/10 dark:bg-black/30 blur-sm rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`articles-${selectedModel}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {currentArticles.map((article, index) => (
                <motion.article
                  key={`${selectedModel}-${article.topic}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="group bg-paper dark:bg-ink/10 
                             border border-ink/10 dark:border-gold/20 p-6 
                             hover:border-accent/20 dark:hover:border-gold/40
                             hover:shadow-elegant transition-all duration-500"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 
                                   bg-accent/10 text-accent text-xs font-accent uppercase tracking-wider">
                      <Newspaper className="w-3 h-3" />
                      Tech Article
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 
                                   bg-ink/5 dark:bg-gold/10 text-muted text-xs font-accent">
                      <Cpu className="w-3 h-3" />
                      {selectedModelInfo?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-xl font-bold mb-3 
                                 group-hover:text-accent transition-colors">
                    {article.title}
                  </h4>

                  {/* Category & Date */}
                  <div className="flex items-center gap-4 text-sm text-muted mb-4">
                    <span className="font-accent font-semibold text-accent/80">{article.category}</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-accent">{currentDate}</span>
                    </div>
                  </div>

                  {/* Preview */}
                  <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4 line-clamp-3">
                    {article.preview}
                  </p>

                  {/* Continue Reading */}
                  <button className="font-accent text-sm text-accent hover:text-accent/70 
                                     transition-colors underline underline-offset-4">
                    Continue Reading
                  </button>

                  {/* Disclaimer */}
                  <p className="mt-4 pt-4 border-t border-ink/5 dark:border-gold/10 
                                text-xs text-muted/70 italic">
                    This content is AI-curated and may not be entirely accurate.
                  </p>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 
                       bg-ink/5 dark:bg-gold/5 text-sm text-muted font-accent
                       border border-transparent dark:border-gold/10">
            <RefreshCw className="w-4 h-4" />
            Click "Generate New Articles" to explore different topics
          </p>
        </motion.div>
      </div>
    </section>
  );
}
