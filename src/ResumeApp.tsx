import { Mail, Linkedin, Github, Play } from "lucide-react";

export default function ResumeApp() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 glass py-4">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">A</div>
            <div className="font-bold tracking-tight text-white leading-none">Ashokraja</div>
          </a>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="/" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold heading-gradient mb-4">Ashokraja Subramanian</h1>
          <p className="text-xl md:text-2xl text-indigo-400 font-medium mb-6 tracking-tight">Enterprise AI Transformation Architect & Strategic Technology Leader</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5"><Mail size={14} /> ashokraja85@gmail.com</span>
            <a href="https://linkedin.com/in/ashokraja-subramanian-b1340820/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 hover:text-white transition-colors"><Linkedin size={14} /> linkedin.com/in/ashokraja-subramanian-b1340820/</a>
            <a href="https://play.google.com/store/apps/developer?id=Infizoom+Technologies+Pvt+Ltd" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 hover:text-white transition-colors"><Play size={14} /> Google Play</a>
            <a href="https://github.com/ashokraja85" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 hover:text-white transition-colors"><Github size={14} /> github.com/ashokraja85</a>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[12px] mb-8 flex items-center gap-4">
            Executive Summary
            <div className="h-px bg-white/10 flex-grow"></div>
          </h2>
          <div className="space-y-4 text-lg text-slate-300 leading-relaxed max-w-4xl">
            <p>
              Enterprise AI Transformation Architect & Strategic Technology Leader with 19+ years of experience transforming enterprise systems into AI-driven platforms and intelligent operational ecosystems.
            </p>
            <p>
              Technology leader with deep hands-on engineering expertise who scaled an AI DataOps practice from 0 to 150+ contributors while sustaining 95% client retention across long-term engagements.
            </p>
            <p>
              Led the architecture and delivery of multiple AI-enabled enterprise and SaaS platforms across EdTech, FinTech, HR automation, Civic-Tech, analytics, workflow automation, and intelligent operations ecosystems.
            </p>
            <p>
              Strong expertise across enterprise modernization, AI workflow automation, Supabase-backed SaaS platforms, cloud-native architectures, mobile applications, Electron desktop platforms, and enterprise production support.
            </p>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[12px] mb-8 flex items-center gap-4">
            Core Competencies
            <div className="h-px bg-white/10 flex-grow"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Enterprise Operations", content: "Enterprise delivery leadership, L2/L3 operational modernization, ITIL-aligned governance, SLA optimization, Incident & problem management, Root-cause analysis" },
              { title: "AI Architecture", content: "Agentic systems, decision engines, human-in-the-loop workflows, confidence scoring, RAG patterns, evaluation harnesses" },
              { title: "AI Engineering", content: "OpenAI / Gemini / Claude integration, offline speech AI, NLP pipelines, spaced repetition systems, ELO matchmaking" },
              { title: "Platforms", content: "Supabase, PostgreSQL, Row-Level Security, Edge Functions, Storage, Firebase, Cloudflare Workers, GCP" },
              { title: "Web & Mobile", content: "React, Next.js, Vite, TypeScript, Tailwind CSS, shadcn/ui, Capacitor, React Native, Expo" },
              { title: "Desktop & Media", content: "Electron, electron-builder, NSIS installers, FFmpeg, ffprobe, local-first media processing" },
              { title: "Data & Visualization", content: "D3, Three.js, React Three Fiber, Recharts, Lightweight Charts, technical indicators" },
              { title: "Leadership", content: "Enterprise transformation leadership, strategic architecture, distributed engineering management, large-scale delivery execution, AI modernization strategy, 0-to-150 team scaling, lean budgeting, distributed delivery" },
              { title: "FinTech & Web3", content: "Kiteconnect / Zerodha APIs, options analytics, Solana SPL tokens, token deployment workflows" },
            ].map((skill, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                <h3 className="text-indigo-400 font-bold text-sm mb-2">{skill.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{skill.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[12px] mb-8 flex items-center gap-4">
            Professional Experience
            <div className="h-px bg-white/10 flex-grow"></div>
          </h2>
          <div className="space-y-12">
            {[
              {
                role: "Director of Technology & Delivery",
                company: "Infizoom Technologies Pvt. Ltd.",
                location: "Salem, India",
                period: "Jun 2017 - Present",
                points: [
                  "Scaled an AI DataOps practice from 0 to 150+ contributors while sustaining 95% client retention; operated as fractional CTO across 10+ global engagements.",
                  "Architected production AI platforms using Supabase, Edge Functions, PostgreSQL, and modern React stacks for model-assisted annotation, human-in-the-loop workflows, confidence scoring, and workflow automation.",
                  "Re-architected manual L2/L3 operational processes into AI-assisted, decision-driven systems to reduce analyst touch effort and improve SLA adherence.",
                  "Built India s first all-women rural AI workforce model, training first-generation graduates and converting them into a paid AI data operations workforce."
                ]
              },
              {
                role: "ITO Service Delivery Consultant I / II / III",
                company: "Hewlett-Packard (HP)",
                location: "Bangalore, India",
                period: "Jun 2010 - Jun 2017",
                points: [
                  "Led enterprise application delivery for global business units and was promoted twice within the service delivery consultant track.",
                  "Served as SME for business-critical applications, owning L2/L3 incident response, root-cause analysis, recurring-defect elimination, and production reliability.",
                  "Developed ITIL-aligned problem management practices to improve governance, production stability, and SLA performance."
                ]
              },
              {
                role: "Software Engineer",
                company: "Accenture",
                location: "Bangalore, India",
                period: "Aug 2007 - Jun 2010",
                points: [
                  "Led recovery automation and WebLogic migration across 60+ application domains.",
                  "Managed production defects and disaster recovery planning for high-availability enterprise applications."
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/10">
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-indigo-400 font-bold text-sm tracking-wide">{exp.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{exp.period}</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider">{exp.location}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-indigo-500 mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic AI & Enterprise Engineering Initiatives */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[12px] mb-8 flex items-center gap-4">
            Strategic AI & Enterprise Engineering Initiatives
            <div className="h-px bg-white/10 flex-grow"></div>
          </h2>
          <p className="text-sm text-slate-500 mb-8 font-medium">Delivered multiple AI-enabled enterprise and SaaS platforms across FinTech, EdTech, HR automation, analytics, workflow modernization, and intelligent operations ecosystems between Oct 2025 and May 2026 using AI-augmented engineering workflows and modern cloud-native architectures.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Zippie EdTech Suite", content: "Architected 5+ kid-safe learning apps (Zippie English, SSC, Science, School, Coding, Play, Aim, Video Magic). Built with Vite, React, TypeScript, Supabase, Capacitor. Features Leitner-based SRS, ELO matchmaking, and curriculum audit automation." },
              { title: "AI Trading & Options Suite", content: "Built FinTech apps (Bullfussion, option_analyser, optionking, greeks). Integrated Zerodha APIs, Lightweight Charts, and Supabase for AI-assisted chart analysis and Greeks-based strategy modeling." },
              { title: "Zippie Video Editor", content: "Offline Windows desktop video editor using Electron, React, FFmpeg, and electron-builder. Supports local-first clip merging and MP4 export." },
              { title: "HR Auto-Generator", content: "Bulk relieving-letter generation with intelligent mapping and Gemini AI assist. Built with Next.js, TypeScript, Supabase, and Puppeteer." },
              { title: "Neon Drift", content: "A reflex puzzle game with a physics engine where players slingshot a glowing orb through 200+ neon levels, dodging trails and chaining combos." },
              { title: "GREEK Solana SPL Token", content: "Designed and deployed a community utility token workflow for OptionKingAI traders: 1B fixed supply, mint/freeze authority permanently revoked." },
              { title: "Civic & Industrial AI Apps", content: "Built apps across civic accountability, legal assistance, astrology, room redesign, image generation, and civil reinforcement-bar planning. Examples: citizen-s-watch, law_app, aiastroguru, nakshtralove, soulconfess, roomifyai, pixie, auditorpro." },
              { title: "Jarvis Offline Voice Assistant", content: "Python desktop assistant with offline ASR (vosk), wake-word (pvporcupine), TTS (pyttsx3), and spaCy NLP intent classification for Windows automation." },
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-colors">
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-[12px] mb-8 flex items-center gap-4">
            Education & Certifications
            <div className="h-px bg-white/10 flex-grow"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Degrees</h3>
              <div className="space-y-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="text-white font-bold text-sm">M.B.A., Information Technology Management</div>
                    <div className="text-xs text-slate-500">Periyar University</div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="text-white font-bold text-sm">B.Sc., Computer Technology</div>
                    <div className="text-xs text-slate-500">Mahendra Engineering College, Anna University</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {["ITIL Foundation (EXIN)", "Python (2023)", "Oracle WebLogic 9.2", "UNIX Administration"].map((cert, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-slate-400 font-bold uppercase tracking-wide">{cert}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/5 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/ashokraja85" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com/in/ashokraja-subramanian-b1340820/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
          <a href="https://play.google.com/store/apps/developer?id=Infizoom+Technologies+Pvt+Ltd" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Play size={18} /></a>
          <a href="mailto:ashokraja85@gmail.com" className="text-slate-500 hover:text-white transition-colors"><Mail size={18} /></a>
        </div>
        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-600">© 2026 Ashokraja Subramanian. Built with React & Vite.</p>
      </footer>
    </div>
  );
}
