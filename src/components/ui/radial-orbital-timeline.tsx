"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (newState[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const currentItem = timelineData.find((item) => item.id === id);
        const newPulseEffect: Record<number, boolean> = {};
        currentItem?.relatedIds.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.3) % 360);
      }, 50);
    }
    return () => clearInterval(rotationTimer);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const radius = isMobile ? 140 : 220;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity, isMobile };
  };

  return (
    <div
      className="w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center bg-transparent overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Central Core */}
          <div className="absolute w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 animate-pulse flex items-center justify-center z-10 shadow-[0_0_50px_rgba(99,102,241,0.5)]">
            <div className="absolute w-18 h-18 md:w-24 md:h-24 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30"></div>
          </div>

          <div className="absolute w-[280px] h-[280px] md:w-[440px] md:h-[440px] rounded-full border border-white/5"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = activeNodeId && item.relatedIds.includes(activeNodeId);
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isExpanded ? "bg-white text-slate-950 border-white scale-125 shadow-[0_0_30px_rgba(255,255,255,0.5)]" : 
                    isRelated ? "bg-indigo-500/50 text-white border-indigo-400 animate-pulse" : 
                    "bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500"
                  )}
                >
                  <Icon size={position.isMobile ? 16 : 20} />
                </div>

                <div className={cn(
                  "absolute top-12 md:top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-all",
                  isExpanded ? "text-white opacity-100" : "text-slate-500 opacity-70"
                )}>
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 w-64 md:w-72 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl shadow-2xl z-[300]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-tighter">
                        {item.date}
                      </span>
                      <span className={cn(
                        "text-[9px] px-2 py-0.5 rounded-full font-bold",
                        item.status === 'completed' ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                      )}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.content}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>PROFICIENCY</span>
                        <span className="font-mono text-white">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${item.energy}%` }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
