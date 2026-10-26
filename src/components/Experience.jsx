import React from 'react';
import { experienceList } from '../data/portfolioData';

const ExperienceCard = ({ exp }) => (
  <div 
    data-aos="fade-up"
    className="bg-black/25 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] hover:border-red-500/20 transition-all duration-500 max-w-4xl mx-auto"
  >
    <div className="flex flex-col md:flex-row gap-8 justify-between">
      {/* Left Column: Organization & Tech */}
      <div className="flex-1 md:border-r md:border-white/10 md:pr-8">
        <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase block mb-2">
          {exp.duration}
        </span>
        <h3 className="text-white text-3xl font-black mb-1 tracking-tight">
          {exp.role}
        </h3>
        <p className="text-white text-lg font-black tracking-wide mb-2 uppercase opacity-95">
          {exp.organization}
        </p>
        {exp.supervisor && (
          <p className="text-red-200 text-sm font-semibold mb-4">
            👨‍🏫 Guidance: {exp.supervisor}
          </p>
        )}
        <p className="text-white/70 text-sm font-medium mb-6">
          📍 {exp.location}
        </p>

        <div>
          <h4 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-3">Technologies practiced:</h4>
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span 
                key={t}
                className="px-3 py-1.5 text-xs font-mono font-bold text-white bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Responsibilities */}
      <div className="flex-[1.5] flex flex-col justify-center">
        <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Research Responsibilities:</h4>
        <ul className="space-y-4">
          {exp.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-white/90 mt-1 select-none">⚡</span>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                {resp}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-[#dc2626] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-red-950 text-base md:text-lg font-bold max-w-lg mx-auto">
            Academic research, machine learning pipelines, and predictive model architecture development.
          </p>
        </div>

        {/* Experience Card */}
        {experienceList.map((exp) => (
          <ExperienceCard key={exp.organization} exp={exp} />
        ))}

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Experience;
