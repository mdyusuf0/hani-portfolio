import React from 'react';
import { educationList } from '../data/portfolioData';

const EducationCard = ({ edu, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)] hover:border-red-500/30 transition-all duration-500 max-w-3xl mx-auto relative group"
  >
    {/* Tech Accent Line */}
    <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex-1">
        <span className="text-red-400 text-xs font-mono font-bold tracking-widest uppercase block mb-2">
          {edu.duration}
        </span>
        <h3 className="text-white text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:text-red-300 transition-colors">
          {edu.degree}
        </h3>
        <p className="text-white text-lg font-bold tracking-wide uppercase opacity-90 mb-4">
          🏫 {edu.institution}
        </p>
        <p className="text-white/60 text-sm font-medium mb-4">
          📍 {edu.location}
        </p>

        {edu.coursework && (
          <div>
            <span className="text-white/40 text-xs font-bold uppercase tracking-wider block mb-2">Key Coursework:</span>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span key={course} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80">
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Grade badge */}
      <div className="flex shrink-0">
        <div className="bg-red-600/20 border border-red-500/30 rounded-2xl py-4 px-6 text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
          <span className="text-white/50 text-[10px] font-mono font-bold uppercase tracking-widest block mb-1">Result</span>
          <span className="text-red-400 text-2xl font-black font-sans">{edu.gpa}</span>
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Torn paper divider at top, transition from Red Experience section to Black Education section */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#dc2626]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto font-medium">
            Foundational computer science, artificial intelligence, and machine learning principles.
          </p>
        </div>

        {/* Education List */}
        <div className="flex flex-col gap-8">
          {educationList.map((edu, index) => (
            <EducationCard key={edu.institution} edu={edu} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute top-32 right-12 text-white/5 opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Education;
