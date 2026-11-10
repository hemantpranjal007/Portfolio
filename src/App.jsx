import React, { useState } from 'react';
import { 
  FileText, 
  ChevronRight, 
  Send, 
  X,
  ExternalLink,
  MapPin,
  BriefcaseBusiness,
  GitBranch,
  Mail,
  Code2
} from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "hemantpranjaldev@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/hemantpranjal/";
  const githubUrl = "https://github.com/hemantpranjal007";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setFormSent(false);
    setFormError('');
    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'cebe0ebb-ff7c-451e-be24-5a2ba457751b',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.status !== 200) {
        throw new Error(`Web3Forms returned status ${response.status}`);
      }

      setFormData({ name: '', email: '', message: '' });
      setFormSent(true);
    } catch (error) {
      console.error('Failed to send contact form:', error);
      setFormError('Unable to send your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const projects = [
    {
      id: "fireguard",
      title: "FireGuard AI",
      category: "AI & ML",
      badge: "ElectroHack 4.0",
      shortDesc: "Real-time computer vision fire & smoke detection pipeline using YOLO11 & FastAPI.",
      overview: "An automated hazards monitoring pipeline developed during the 24-hour national-level ElectroHack 4.0 hackathon at KSIT. Processes live camera feeds to detect fire and smoke hazards.",
      role: "Computer Vision & Backend Developer",
      tech: ["Python", "YOLO11", "PyTorch", "OpenCV", "FastAPI", "JavaScript"],
      contributions: [
        "Curated and labeled custom dataset containing ~190 frames for fire and smoke.",
        "Executed GPU-accelerated transfer learning and fine-tuning for lightweight inference.",
        "Constructed FastAPI endpoints handling image ingestion and returning bounding box predictions.",
        "Built dynamic dashboard connecting video feeds to backend detection endpoints."
      ],
      demoUrl: null
    },
    {
      id: "aegisshield",
      title: "AegisShield AI",
      category: "AI & ML",
      badge: "SAP Hackfest 2026",
      shortDesc: "AI-assisted supply-chain disruption recovery decision-support platform.",
      overview: "Designed to help enterprise leaders evaluate supply-chain disruptions by integrating risks, dependencies, and regulatory compliance into a multi-variable comparison framework.",
      role: "UI/UX Designer & Frontend Developer (M2)",
      tech: ["React", "JavaScript", "SAP UI5", "SAP Fiori", "HTML/CSS"],
      contributions: [
        "Architected clean React-based frontend modules with enterprise design principles.",
        "Built modular UI components inspired by SAP Fiori design patterns.",
        "Implemented interactive evaluation stubs and frontend data mapping.",
        "Contributed to the pitch deck and live demo; team successfully selected in the hackathon."
      ],
      demoUrl: null
    },
    {
      id: "superstore",
      title: "Superstore Sales Analytics",
      category: "Analytics",
      badge: "HCL GUVI Certified",
      shortDesc: "Interactive Tableau business intelligence dashboard mapping retail trends & profitability.",
      overview: "Comprehensive analytical dashboard built using the Superstore Sales dataset to transform unstructured commercial transactions into executive-ready KPIs.",
      role: "Data Analyst",
      tech: ["Tableau", "Data Analytics", "Data Modeling", "Business Intelligence"],
      contributions: [
        "Designed drill-down views exploring profit margins across regions and segments.",
        "Mapped discount vs profit correlations identifying loss-making product categories.",
        "Built interactive visual parameters for comparative quarterly performance analysis."
      ],
      demoUrl: null
    },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);
  const projectCategories = ['All', ...new Set(projects.map(project => project.category))];

  const skillsData = [
    {
      category: "Core Languages",
      skills: ["Python (DSA)", "C Programming", "SQL"]
    },
    {
      category: "Frontend Development",
      skills: ["JavaScript (ES6+)", "React.js", "Tailwind CSS", "Vite", "HTML5 & CSS3", "SAP Fiori & UI5"]
    },
    {
      category: "Backend & Systems",
      skills: ["FastAPI", "Python Scripting", "Git & GitHub"]
    },
    {
      category: "AI & Computer Vision",
      skills: ["YOLO11 / YOLOv8", "PyTorch", "OpenCV", "Prompt Engineering"]
    },
    {
      category: "Data & Enterprise",
      skills: ["Power BI", "Tableau", "Data Modeling", "Excel"]
    }
  ];

  const milestones = [
    {
      role: "Technical Executive",
      org: "E-CELL SMVIT",
      date: "Oct 2026 - Present",
      desc: "Leading web platform architecture and technical operations for campus entrepreneurship initiatives, including event platforms like StarPitch 4.0 using React and modern frontend tooling."
    },
    {
      role: "Selected Finalist (Team AegisShield AI)",
      org: "SAP Hackathon Grand Finale",
      date: "2026",
      desc: "Built the frontend architecture and UI5-inspired design patterns for an AI-assisted supply chain resilience tool, qualifying for the grand finale."
    },
    {
      role: "Project Developer (FireGuard AI)",
      org: "ElectroHack 4.0 (KSIT Bengaluru)",
      date: "Sept 2026",
      desc: "Built and deployed a YOLO11 computer vision detection pipeline for automated smoke and fire identification in a 24-hour national hackathon."
    },
    {
      role: "Top 8 Bangalore Finalist",
      org: "Blueprint 6.0 - eDC IIT Delhi",
      date: "2026",
      desc: "Recognized among the Top 8 startup teams in Bangalore under the DeepTech & AI track during offline jury pitching rounds."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080B11] text-[#F8FAFC] selection:bg-[#8B7CFF]/30 selection:text-[#A594FD]">
      
      {/* Subtle Dot Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#8B7CFF_1px,transparent_1px)] bg-size-[24px_24px] z-0" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#080B11]/85 border-b border-[#1A2234]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-xl bg-[#0F1626] border border-[#1E293B] flex items-center justify-center font-mono font-bold text-xs text-[#8B7CFF] group-hover:border-[#8B7CFF]/50 transition-colors">
              HP
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-white">Hemant Pranjal</span>
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>
              <span className="text-[11px] font-mono text-[#64748B]">dev / builder</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#94A3B8]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/Hemant%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F1626] border border-[#1E293B] text-xs font-semibold text-white hover:border-[#8B7CFF]/50 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#8B7CFF]" />
              <span>Resume</span>
            </a>
            <a 
              href="#contact"
              className="px-4 py-2 rounded-lg bg-[#8B7CFF] text-[#080B11] text-xs font-bold hover:bg-[#9B8EFF] transition-all shadow-md shadow-[#8B7CFF]/15"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24 space-y-28">

        {/* HERO SECTION */}
        <section className="pt-4 md:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1626] border border-[#1E293B] text-xs text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[11px] font-medium">Open for Data Analytics & Frontend Development Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Building ideas into <br />
              <span className="text-[#8B7CFF]">practical solutions.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
              I'm a Computer Science student at <strong className="text-white font-semibold">Sir MVIT Bangalore</strong> focused on full-stack web engineering, computer vision, and real-world AI applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-[#8B7CFF] text-[#080B11] text-xs font-bold hover:bg-[#9B8EFF] transition-all flex items-center gap-2 shadow-lg shadow-[#8B7CFF]/15"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-[#0F1626] border border-[#1E293B] text-xs font-semibold text-white hover:border-[#8B7CFF]/50 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Social & Meta Line */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8B7CFF]" />
                <span>Bangalore, India</span>
              </div>
              <span className="text-[#1E293B]">|</span>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <BriefcaseBusiness className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hemantpranjaldev@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#1E293B] bg-[#0A0E17]/95 backdrop-blur-md overflow-hidden shadow-2xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A2234] bg-[#080B11]/70">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
                <span className="text-[11px] font-mono text-[#64748B]">hemant@mvit-workspace ~</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0F1626] border border-[#1E293B] text-[#8B7CFF]">
                  bash
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-4 leading-relaxed">
                
                {/* Command 1: who am i */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#8B7CFF]">
                    <span>$</span>
                    <span className="text-white">who am i</span>
                  </div>
                  <div className="text-[#F8FAFC] pl-3 text-[11px]">
                    Hemant Pranjal (CSE Sophomore @ Sir MVIT)
                  </div>
                </div>

                {/* Command 2: cat stack.json */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#8B7CFF]">
                    <span>$</span>
                    <span className="text-white">cat stack.json</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 pl-3 text-[11px]">
                    <div>
                      <span className="text-[#64748B]">primary: </span>
                      <span className="text-[#10B981]">"Python"</span>
                    </div>
                    <div>
                      <span className="text-[#64748B]">frontend: </span>
                      <span className="text-[#38BDF8]">"React.js"</span>
                    </div>
                    <div>
                      <span className="text-[#64748B]">tools: </span>
                      <span className="text-[#C084FC]">"Power BI,Tableau"</span>
                    </div>
                    <div>
                      <span className="text-[#64748B]">backend: </span>
                      <span className="text-[#FACC15]">"FastAPI"</span>
                    </div>
                  </div>
                </div>

                {/* Command 3: git status --short */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#8B7CFF]">
                    <span>$</span>
                    <span className="text-white">git status --short</span>
                  </div>
                  <div className="space-y-1 pl-3 text-[11px] border-l-2 border-[#1E293B]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#94A3B8]">M AegisShield_AI (SAP_Hackfest)</span>
                      <span className="text-[#10B981] font-bold text-[10px]">SELECTED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#94A3B8]">M FireGuard_YOLO11_CV</span>
                      <span className="text-[#38BDF8] font-bold text-[10px]">EVALUATED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#94A3B8]">M IITDelhi_Blueprint_6.0</span>
                      <span className="text-[#C084FC] font-bold text-[10px]">TOP_8_BLR</span>
                    </div>
                  </div>
                </div>

                {/* Terminal Footer Status */}
                <div className="pt-3 border-t border-[#1A2234] flex items-center justify-between text-[11px] text-[#64748B]">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>SysOps: Online & Deploy Ready</span>
                  </div>
                  <span>Bangalore, IN</span>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* 4 STATS CARDS ROW (Exact Match from Screenshot) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#0A0E17] border border-[#1E293B] space-y-2 hover:border-[#8B7CFF]/40 transition-all">
            <span className="text-3xl font-bold font-mono text-white block">8.13</span>
            <div>
              <h4 className="text-xs font-semibold text-white">Academic CGPA</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">Sir MVIT Bengaluru</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#0A0E17] border border-[#1E293B] space-y-2 hover:border-[#8B7CFF]/40 transition-all">
            <span className="text-3xl font-bold font-mono text-white block">3+</span>
            <div>
              <h4 className="text-xs font-semibold text-white">Core Projects</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">Production & Hackathon</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#0A0E17] border border-[#1E293B] space-y-2 hover:border-[#8B7CFF]/40 transition-all">
            <span className="text-3xl font-bold font-mono text-white block">Top 8</span>
            <div>
              <h4 className="text-xs font-semibold text-white">Hackathon Recognition</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">eDC IIT Delhi / SAP Finale</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-[#0A0E17] border border-[#1E293B] space-y-2 hover:border-[#8B7CFF]/40 transition-all">
            <span className="text-3xl font-bold font-mono text-white block">1k+</span>
            <div>
              <h4 className="text-xs font-semibold text-white">Developer Network</h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">Industry & Tech peers</p>
            </div>
          </div>

        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B7CFF]">01.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">About Me</h2>
            <div className="h-px bg-[#1E293B] flex-1 max-w-xs" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-sm leading-relaxed text-[#94A3B8]">
              <p>
                I am a Computer Science and Engineering student at <strong className="text-white">Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bangalore</strong> with an <strong className="text-[#8B7CFF]">8.13 CGPA</strong>. I bridge the gap between design sensibility and functional technical execution.
              </p>
              <p>
                My project journey includes designing enterprise interfaces with <strong className="text-white">React, SAP UI5, and Fiori principles</strong> for supply-chain recovery, fine-tuning <strong className="text-white">YOLO11 computer vision pipelines</strong> for real-time hazard identification, and delivering full-stack prototypes under competitive hackathon pressure.
              </p>
              <p>
                As a Technical Executive at <strong className="text-white">E-CELL SMVIT</strong>, I actively build web applications, explore new libraries, and develop digital infrastructure for entrepreneurship initiatives.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-[#0A0E17] border border-[#1E293B] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8B7CFF] block">Quick Highlights</span>
              <ul className="space-y-2.5 text-xs text-[#94A3B8]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]" />
                  <span>Technical Executive @ E-Cell SMVIT</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]" />
                  <span>Selected in SAP Hackfest Grand Finale 2026</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]" />
                  <span>Top 8 Bangalore Finalist @ IIT Delhi Blueprint 6.0</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]" />
                  <span>YOLO11 Smoke & Fire Detection @ ElectroHack 4.0</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#8B7CFF]">02.</span>
              <h2 className="text-xl font-bold tracking-tight text-white">Featured Projects</h2>
              <div className="h-px bg-[#1E293B] w-24" />
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-[#0A0E17] border border-[#1E293B] text-xs">
              {projectCategories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === tab 
                      ? 'bg-[#8B7CFF] text-[#080B11] font-bold shadow-md shadow-[#8B7CFF]/20' 
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group rounded-2xl bg-[#0A0E17] border border-[#1E293B] hover:border-[#8B7CFF]/50 transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#8B7CFF]/5 ${
                  filteredProjects.length > 1 &&
                  filteredProjects.length % 2 === 1 &&
                  index === filteredProjects.length - 1
                    ? 'md:col-span-2'
                    : ''
                }`}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3 py-1 rounded-full font-mono text-[11px] font-medium text-[#8B7CFF] bg-[#8B7CFF]/10 border border-[#8B7CFF]/20">
                      {project.category}
                    </span>
                    <span className="text-[#64748B] font-mono text-[11px]">{project.badge}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#8B7CFF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#080B11] border border-[#1E293B] text-[11px] font-mono text-[#CBD5E1]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-[#080B11]/80 border-t border-[#1E293B] flex items-center justify-between text-xs">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="font-medium text-[#8B7CFF] hover:underline flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#8B7CFF]" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B7CFF]">03.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">Technical Competencies</h2>
            <div className="h-px bg-[#1E293B] flex-1 max-w-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((group, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0E17] border border-[#1E293B] space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Code2 className="w-4 h-4 text-[#8B7CFF]" />
                  <span>{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-lg bg-[#080B11] border border-[#1E293B] text-xs font-mono text-[#CBD5E1] hover:text-white hover:border-[#8B7CFF]/40 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B7CFF]">04.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">Experience & Milestones</h2>
            <div className="h-px bg-[#1E293B] flex-1 max-w-xs" />
          </div>

          <div className="relative pl-6 space-y-8 border-l border-[#1E293B]">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-[#8B7CFF] border-4 border-[#080B11] group-hover:scale-125 transition-transform" />
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-x-3 text-xs">
                    <span className="font-bold text-sm text-white">{item.role}</span>
                    <span className="text-[#8B7CFF] font-medium">@ {item.org}</span>
                    <span className="font-mono text-[11px] text-[#64748B]">({item.date})</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B7CFF]">05.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">Get In Touch</h2>
            <div className="h-px bg-[#1E293B] flex-1 max-w-xs" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-white leading-snug">
                Have an idea? Let's build something.
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Open for collaborative hackathons, full-stack engineering initiatives, and data analytics / software engineering internship opportunities.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0A0E17] border border-[#1E293B] text-xs">
                  <Mail className="w-4 h-4 text-[#8B7CFF]" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hemantpranjaldev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-white truncate flex-1 hover:text-[#8B7CFF] transition-colors"
                  >
                    {email}
                  </a>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={linkedinUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0A0E17] border border-[#1E293B] text-xs font-medium text-white hover:border-[#8B7CFF]/50 transition-colors"
                  >
                    <BriefcaseBusiness className="w-4 h-4 text-[#8B7CFF]" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0A0E17] border border-[#1E293B] text-xs font-medium text-white hover:border-[#8B7CFF]/50 transition-colors"
                  >
                    <GitBranch className="w-4 h-4 text-[#8B7CFF]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="p-6 rounded-2xl bg-[#0A0E17] border border-[#1E293B] space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#94A3B8]">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B11] border border-[#1E293B] text-xs text-white focus:outline-none focus:border-[#8B7CFF] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#94A3B8]">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B11] border border-[#1E293B] text-xs text-white focus:outline-none focus:border-[#8B7CFF] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#94A3B8]">Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B11] border border-[#1E293B] text-xs text-white focus:outline-none focus:border-[#8B7CFF] transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-2.5 rounded-lg bg-[#8B7CFF] text-[#080B11] text-xs font-bold hover:bg-[#9B8EFF] transition-all flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#080B11]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {formSent && (
                  <p role="status" className="text-sm text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {formError && (
                  <p role="alert" className="text-sm text-red-400">
                    {formError}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1E293B] bg-[#080B11] py-8 text-xs text-[#94A3B8]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Hemant Pranjal</span>
            <span>—</span>
            <span>Bengaluru, India</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white">Top</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          </div>

          <div className="font-mono text-[11px]">
            &copy; {currentYear} • Built with React & Tailwind CSS
          </div>
        </div>
      </footer>

      {/* CASE STUDY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080B11]/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-2xl w-full rounded-2xl bg-[#0A0E17] border border-[#1E293B] p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#94A3B8] hover:text-white hover:bg-[#1E293B]/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#8B7CFF]">{selectedProject.badge}</span>
              <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-xs text-[#94A3B8] font-mono">Role: {selectedProject.role}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Overview</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {selectedProject.overview}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Key Contributions</h4>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {selectedProject.contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#8B7CFF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#080B11] border border-[#1E293B] text-[11px] font-mono text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.demoUrl && (
              <div className="pt-2 border-t border-[#1E293B]">
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#8B7CFF] text-[#080B11] text-xs font-bold hover:bg-[#9B8EFF] transition-all"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* RESUME VIEWER MODAL */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080B11]/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-3xl w-full rounded-2xl bg-[#0A0E17] border border-[#1E293B] p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#94A3B8] hover:text-white hover:bg-[#1E293B]/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between border-b border-[#1E293B] pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Hemant Pranjal</h3>
                <p className="text-xs text-[#94A3B8] font-mono">B.E. Computer Science & Engineering | Sir MVIT Bangalore (8.13 CGPA)</p>
              </div>
              <a 
                href="/Hemant_Pranjal_Resume.pdf" 
                download
                className="px-4 py-1.5 rounded-lg bg-[#8B7CFF] text-[#080B11] text-xs font-bold hover:bg-[#9B8EFF] transition-all"
              >
                Download PDF
              </a>
            </div>

            <div className="space-y-4 text-xs text-[#94A3B8] leading-relaxed">
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wide font-mono mb-2">Technical Profile</h4>
                <p>Full-Stack Web Developer & AI/ML engineer focused on building production-ready web tools, real-time computer vision detection systems, and clean scalable interfaces.</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wide font-mono mb-2">Key Highlights</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Technical Executive</strong> at E-CELL SMVIT leading frontend digital infrastructure.</li>
                  <li><strong>SAP Hackfest Finale 2026:</strong> Built AegisShield AI supply-chain decision platform using React & SAP UI5 patterns.</li>
                  <li><strong>ElectroHack 4.0:</strong> Implemented real-time smoke & fire detection using YOLO11 and FastAPI.</li>
                  <li><strong>IIT Delhi Blueprint 6.0:</strong> Shortlisted in Top 8 teams in Bangalore (DeepTech & AI).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wide font-mono mb-2">Core Competencies</h4>
                <p>Python, React, JavaScript, FastAPI, PyTorch, YOLO, OpenCV, SQL, Tableau, Power BI, Git.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}