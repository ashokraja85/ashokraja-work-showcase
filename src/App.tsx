import { useState, useEffect } from "react";
import { Boxes } from "./components/ui/background-boxes";
import { SparklesCore } from "./components/ui/sparkles";
import VaporizeTextCycle, { Tag } from "./components/ui/vapour-text-effect";
import RadialOrbitalTimeline from "./components/ui/radial-orbital-timeline";
import { CardBody, CardContainer, CardItem } from "./components/ui/three-d-card";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Database, ShieldCheck, Zap, Briefcase, Menu, X, Play } from "lucide-react";
import { cn } from "./lib/utils";

// --- Project and Timeline Data remains same ---

const projects = [
  {
    title: "Zippie World",
    url: "https://zippieworld.in/",
    category: "EdTech",
    stack: ["React", "Supabase", "Kids Learning"],
    summary:
      "A learning universe for children with interactive educational experiences and playful exploration.",
  },
  {
    title: "Zippie English",
    url: "https://english.zippieworld.in/",
    category: "EdTech",
    stack: ["Vite", "Capacitor", "Spaced Repetition"],
    summary:
      "English learning platform with gamified practice, child-safe UX, and multi-skill language improvement.",
  },
  {
    title: "Pixie Babe",
    url: "https://pixiebabe.com/",
    category: "Creative",
    stack: ["Creative AI", "Image UX", "SaaS"],
    summary:
      "Creative AI product experience focused on visual generation, identity, and user-friendly creative workflows.",
  },
  {
    title: "Soul Confess",
    url: "https://soulconfess.in/",
    category: "AI",
    stack: ["Privacy UX", "AI", "Community"],
    summary:
      "Anonymous confession and emotional expression platform designed around privacy, trust, and simple UX.",
  },
  {
    title: "Nakshatra Cloud",
    url: "https://nakshatra.cloud/",
    category: "AI",
    stack: ["Astro API", "Cloud", "Decision UX"],
    summary:
      "Astrology and birth-chart API/product platform powering horoscope, chart, and matching experiences.",
  },
  {
    title: "Nakshatra Love",
    url: "https://love.nakshatra.cloud/",
    category: "AI",
    stack: ["Compatibility", "Astro AI", "Product UX"],
    summary:
      "Relationship and compatibility experience built on Nakshatra Cloud astrology intelligence.",
  },
  {
    title: "RebarPro AI",
    url: "https://rebarproai.com/",
    category: "AI",
    stack: ["Civil Tech", "AI Workflow", "Engineering"],
    summary:
      "Civil and construction technology product for reinforcement-bar planning and AI-assisted engineering workflows.",
  },
  {
    title: "Roomify AI",
    url: "https://roomifyai.in/",
    category: "Creative",
    stack: ["Interior AI", "Vision UX", "React"],
    summary:
      "Interior design AI app for room transformation, visual redesign, and fast creative concept generation.",
  },
  {
    title: "Neon Drift",
    url: "https://neondrift.in/",
    category: "Game",
    stack: ["Physics Engine", "Game UX", "Reflex Puzzle"],
    summary:
      "A reflex puzzle game where players slingshot a glowing orb through neon mazes, dodging trails and chaining combos across 200+ levels.",
  },
  {
    title: "GREEKS",
    url: "https://greeks.in/",
    category: "Web3",
    stack: ["Web3", "Options", "Community"],
    summary:
      "Web3 and options community product tied to trading utilities, token workflows, and market education.",
  },
  {
    title: "OptionKing AI",
    url: "https://optionkingai.com/",
    category: "FinTech",
    stack: ["Options", "Charts", "AI Analytics"],
    summary:
      "AI-assisted options trading platform focused on analytics, strategy, Greeks, and trader decision support.",
  },
  {
    title: "MechX Garage",
    url: "https://mechxgarage.com/",
    category: "AI",
    stack: ["Automotive", "Service UX", "AI"],
    summary:
      "Automotive service and garage technology product with modern web UX for vehicle and workshop workflows.",
  },
];

const timelineData = [
  {
    id: 1,
    title: "AI Architecture",
    date: "Expertise",
    content: "Agentic systems, decision engines, human-in-the-loop workflows, and RAG patterns.",
    category: "AI",
    icon: Zap,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Enterprise SaaS",
    date: "Scale",
    content: "Scaling platforms to 150+ contributors and modernizing legacy L2/L3 systems.",
    category: "Leadership",
    icon: Briefcase,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "Fullstack Engineering",
    date: "Core",
    content: "React, Next.js, Supabase, PostgreSQL, and modern cloud architecture.",
    category: "Web",
    icon: Code2,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 98,
  },
  {
    id: 4,
    title: "Desktop & Media",
    date: "Specialty",
    content: "Electron, FFmpeg, and local-first media processing systems.",
    category: "Desktop",
    icon: Database,
    relatedIds: [3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "Web3 & FinTech",
    date: "Emerging",
    content: "Solana SPL tokens, trading APIs, and real-time market analytics.",
    category: "FinTech",
    icon: ShieldCheck,
    relatedIds: [2],
    status: "completed" as const,
    energy: 85,
  },
];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroFontSize, setHeroFontSize] = useState("64px");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setHeroFontSize("20px");
      } else if (window.innerWidth < 768) {
        setHeroFontSize("30px");
      } else if (window.innerWidth < 1024) {
        setHeroFontSize("42px");
      } else {
        setHeroFontSize("56px");
      }
    };
    
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Expertise", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "/resume.html" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300",
        scrolled ? "glass py-3 border-b border-white/5" : "bg-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">A</div>
            <div className="hidden sm:block">
              <div className="font-bold tracking-tight text-white leading-none">Ashokraja</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">AI Systems Architect</div>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-slate-950 z-[-1] md:hidden transition-all duration-500 flex flex-col items-center justify-center gap-8",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-bold tracking-tighter hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section with Background Boxes */}
      <section id="top" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-slate-950 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <SparklesCore
            id="tsparticleshero"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#6366f1"
            speed={0.5}
          />
        </div>
        
        <div className="relative z-20 text-center w-full max-w-7xl mx-auto px-4 overflow-visible">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-8 animate-fade-in">
            <Zap size={12} /> Technical Architect & Product Leader
          </div>
          
          <div className="h-[180px] sm:h-[220px] md:h-[280px] w-full relative mb-6 overflow-visible flex items-center justify-center">
            <VaporizeTextCycle
              texts={["AI-first", "Product", "Architect", "Building", "Useful", "Software.", "Across", "Industries."]}
              font={{
                fontFamily: "Inter, sans-serif",
                fontSize: heroFontSize,
                fontWeight: 700
              }}
              color="rgb(255, 255, 255)"
              spread={4}
              density={6}
              animation={{
                vaporizeDuration: 2.5,
                fadeInDuration: 1.5,
                waitDuration: 1.5
              }}
              direction="left-to-right"
              alignment="center"
              tag={Tag.H1}
            />
          </div>
          
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            19+ years of experience transforming enterprise systems into intelligent platforms. 
            From scaling AI DataOps teams to shipping 40+ production apps.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="#work" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-sm transition-all shadow-xl shadow-indigo-600/20 text-center">View Projects</a>
            <a href="https://github.com/ashokraja85" target="_blank" className="px-8 py-4 glass text-white rounded-2xl font-bold text-sm hover:bg-white/5 transition-all text-center">GitHub Profile</a>
          </div>
        </div>

        <div className="absolute bottom-10 flex flex-wrap justify-center gap-6 md:gap-12 px-6">
           <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white leading-tight">19+</div>
              <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Years</div>
           </div>
           <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
           <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white leading-tight">40+</div>
              <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Products</div>
           </div>
           <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
           <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white leading-tight">150+</div>
              <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Team Size</div>
           </div>
        </div>
      </section>

      {/* Expertise Section with Radial Timeline */}
      <section id="expertise" className="py-20 md:py-32 relative z-10 overflow-hidden bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold heading-gradient mb-4">Core Expertise</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">A multi-dimensional view of my technical architectural range and industry focus.</p>
        </div>
        <div className="relative md:-mt-20">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 md:py-32 relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold heading-gradient mb-6">Selected Work</h2>
            <p className="text-slate-400 text-sm md:text-base">A collection of live, production-grade applications built with modern AI-integrated workflows.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['all', 'AI', 'EdTech', 'FinTech', 'Game', 'Creative', 'Web3'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[8px] md:text-[10px] font-bold uppercase tracking-widest border transition-all",
                  filter === cat ? "bg-indigo-500 border-indigo-500 text-white" : "border-white/10 text-slate-400 hover:border-white/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((p) => (
            <CardContainer key={p.url} containerClassName="py-2 md:py-4">
              <CardBody className="group glass rounded-3xl p-5 md:p-6 border border-white/10 hover:border-indigo-500/40 shadow-xl shadow-black/20">
                <CardItem translateZ={50} className="h-32 md:h-40 rounded-2xl bg-slate-950 mb-5 md:mb-6 relative overflow-hidden flex items-center justify-center border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent z-10 pointer-events-none" />
                  <img
                    src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=600&h=450`}
                    alt={`${p.title} screenshot`}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  <Code2 size={40} className="text-indigo-500 opacity-20 relative z-0 md:hidden" />
                  <Code2 size={48} className="text-indigo-500 opacity-20 relative z-0 hidden md:block" />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2 py-1 rounded-lg bg-indigo-500 text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest z-20">
                    {p.category}
                  </div>
                </CardItem>

                <CardItem translateZ={60} className="mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white flex items-center justify-between">
                    {p.title}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Visit ${p.title} live app`}
                    >
                      <ExternalLink size={14} className="md:hidden" />
                      <ExternalLink size={16} className="hidden md:block" />
                    </a>
                  </h3>
                </CardItem>

                <CardItem translateZ={40} className="mb-5 md:mb-6">
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{p.summary}</p>
                </CardItem>

                <CardItem translateZ={30}>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {p.stack.map((s, sidx) => (
                      <span
                        key={sidx}
                        className="px-2 py-0.5 md:py-1 rounded-md bg-white/5 border border-white/5 text-[8px] md:text-[9px] font-bold text-slate-500 uppercase"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold heading-gradient mb-6">Professional Experience</h2>
          <p className="text-slate-400 text-sm md:text-base">A journey through enterprise systems and AI transformation leadership.</p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {[
            {
              role: "Director of Technology & Delivery",
              company: "Infizoom Technologies Pvt. Ltd.",
              period: "Jun 2017 - Present",
              description: "Scaled an AI DataOps practice from 0 to 150+ contributors. Architected production AI platforms using Supabase and modern React stacks. Re-architected operational processes into AI-assisted systems."
            },
            {
              role: "ITO Service Delivery Consultant I / II / III",
              company: "Hewlett-Packard (HP)",
              period: "Jun 2010 - Jun 2017",
              description: "Led enterprise application delivery for global business units. Served as SME for business-critical applications, owning L2/L3 incident response and root-cause analysis."
            },
            {
              role: "Software Engineer",
              company: "Accenture",
              period: "Aug 2007 - Jun 2010",
              description: "Led recovery automation and WebLogic migration across 60+ application domains. Managed production defects and disaster recovery planning."
            }
          ].map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 border-l border-white/10 group">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-transform group-hover:scale-150" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-indigo-400 font-bold text-xs md:text-sm tracking-wide">{exp.company}</div>
                </div>
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit">
                  {exp.period}
                </div>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 border-t border-white/5 glass relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">A</div>
              <span className="font-bold text-white text-xl">Ashokraja</span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
              Transforming enterprise systems through AI architecture and product excellence for nearly two decades.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/ashokraja85" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg hover:text-indigo-400 transition-colors" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/ashokraja-subramanian-b1340820/" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg hover:text-indigo-400 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://play.google.com/store/apps/developer?id=Infizoom+Technologies+Pvt+Ltd" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg hover:text-indigo-400 transition-colors" aria-label="Google Play"><Play size={20} /></a>
              <a href="mailto:ashokraja85@gmail.com" className="p-2 glass rounded-lg hover:text-indigo-400 transition-colors" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-[9px] md:text-[10px] mb-6 md:mb-8">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-400 font-medium">
              <li><a href="#work" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="/resume.html" className="hover:text-white transition-colors font-bold text-indigo-400">View Resume</a></li>
              <li><a href="mailto:ashokraja85@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-[9px] md:text-[10px] mb-6 md:mb-8">Role Opportunities</h4>
            <p className="text-slate-400 text-xs md:text-sm mb-6">Open for Fractional CTO, AI Architect, and Engineering Leadership roles.</p>
            <a href="mailto:ashokraja85@gmail.com" className="inline-flex items-center gap-2 text-indigo-400 font-bold text-xs md:text-sm">
              ashokraja85@gmail.com <ArrowRight size={14} className="md:hidden" /> <ArrowRight size={16} className="hidden md:block" />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-slate-500 gap-4 text-center">
          <div>© 2026 Ashokraja Subramanian. Built with React & Vite.</div>
          <div className="flex justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
