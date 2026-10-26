import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/hani-hero.mp4';
import heroPoster from '../assets/about/hani-avatar.png';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Default to unmuted so sound plays
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Monitor video loading events for cross-fade and preloader exit
  const handleVideoLoad = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    }
  };

  // Safe callback in case video events fail or fire late
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 2) {
        handleVideoLoad();
      }
    }
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // Direct user gesture: unmute and play with sound at 100% volume
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay with sound was blocked by browser, attempting muted fallback:", err);
            video.muted = true;
            setIsMuted(true);
            video.play().then(() => setIsPlaying(true));
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1.0;
    }
    setIsMuted(nextMuted);

    // If video is paused, also start playing when unmuting
    if (!nextMuted && video.paused) {
      video.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Poster - Displays immediately, fades out once video is active */}
      <div 
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000 ${
          isVideoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: `url(${heroPoster})`,
          backgroundPosition: 'center 20%'
        }}
      />

      {/* Background Video - Crystal clear, zero faded wash */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectPosition: 'center 20%' }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Targeted Directional Gradient: Darkens ONLY the bottom-left text zone.
          Leaves the character, top, center, and vibrant red background completely 100% bright, vivid, and un-faded! */}
      <div 
        className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-700 ${
          isPlaying ? 'opacity-60' : 'opacity-90'
        }`}
      >
        {/* Mobile Gradient */}
        <div className="md:hidden w-full h-full bg-gradient-to-t from-black/90 via-black/40 via-45% to-transparent" />
        {/* Desktop Gradient: Bottom-left focus only */}
        <div className="hidden md:block w-full h-full bg-gradient-to-tr from-black/85 via-black/25 via-40% to-transparent" />
      </div>

      {/* Left Floating Social Bar for Large Screens */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          href={`mailto:${socialLinks.email}`}
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="Send Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a 
          href={`tel:${socialLinks.phone}`}
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="Call Phone"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Mobile inline socials */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-4 mb-4 lg:hidden"
          >
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href={`mailto:${socialLinks.email}`} className="text-white/60 hover:text-white" aria-label="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            <a href={`tel:${socialLinks.phone}`} className="text-white/60 hover:text-white" aria-label="Phone">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
          </div>

          {/* Main Heading with Crisp Shadow */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-[1.15] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            {heroContent.greeting}, <br /> 
            <span className="text-transparent [-webkit-text-stroke:1.5px_white] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-lg font-medium mb-8 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed"
          >
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-5 py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs md:text-sm rounded-full bg-black/50 border border-white/80 text-white font-bold hover:bg-black/80 transition-all duration-300 backdrop-blur-md shadow-md"
            >
              Hire Me
            </a>

            {/* Resume Download Button */}
            <a 
              href={heroContent.ctaResume.href}
              download="Hani_Sri_Burugupalli_Resume.pdf"
              className="px-5 py-3 text-xs md:text-sm rounded-full bg-black/30 border border-white/60 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Controls (Play/Pause Reel & Sound Toggle) */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-3 self-start md:self-auto z-20"
        >
          {/* Main Play/Pause Button */}
          <button 
            type="button"
            className="flex flex-col items-center gap-2 cursor-pointer group bg-transparent border-0 p-0 focus:outline-none"
            onClick={toggleVideo}
            aria-label={!isPlaying ? "Play video with audio" : "Pause video"}
          >
            <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/40 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-500 ${
              isPlaying 
                ? 'bg-red-600/90 shadow-[0_0_40px_rgba(220,38,38,0.7)] border-red-400' 
                : 'shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]'
            }`}>
              {!isPlaying ? (
                // Play Icon
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                // Pause Icon
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-white text-[11px] md:text-xs font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-85 group-hover:opacity-100 transition-opacity">
              {!isPlaying ? "Play Reel" : "Pause Reel"}
            </span>
          </button>

          {/* Sound Toggle Button (Click to Mute / Unmute) */}
          <button
            type="button"
            onClick={toggleSound}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/30 text-white text-[10px] md:text-xs font-semibold backdrop-blur-md hover:bg-black/70 hover:border-white transition-all duration-300 shadow-md cursor-pointer"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? (
              <>
                {/* Muted Speaker Icon */}
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span>Sound: OFF</span>
              </>
            ) : (
              <>
                {/* Unmuted Playing Speaker Icon */}
                <svg className="w-4 h-4 text-green-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span>Sound: ON</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
