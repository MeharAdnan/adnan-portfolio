
import React, { useState, useEffect } from 'react';
import { 
  BRAND_NAME, 
  BRAND_TAGLINE, 
  PROJECTS, 
  SERVICES, 
  SKILLS,
  SOCIAL_LINKS 
} from './constants';
import { 
  CodeIcon, 
  ZapIcon, 
  RefreshIcon, 
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon 
} from './components/Icons';
import { Project } from './types';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="text-xl font-black tracking-tighter text-white uppercase">{BRAND_NAME}</a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition-colors">Projects</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors">Services</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href={SOCIAL_LINKS.email} className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images || [project.imageUrl];
  const hasMultiple = images.length > 1;

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col h-full">
      {/* Slideshow Area */}
      <div 
        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
        onClick={() => hasMultiple && nextSlide()}
      >
        <img 
          src={images[currentIndex]} 
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
        />
        
        {hasMultiple && (
          <>
            {/* Nav Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={prevSlide}
                className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
                aria-label="Previous screenshot"
              >
                <ChevronLeftIcon />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
                aria-label="Next screenshot"
              >
                <ChevronRightIcon />
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
              {images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Area */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-zinc-800 rounded-full text-white hover:bg-white hover:text-black transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
        <p className="text-zinc-400 font-light leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen" id="top">
      <Nav />

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            WordPress Expert
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white max-w-4xl">
            Building websites that <span className="text-zinc-500 italic">actually</span> work.
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl font-light mb-12">
            {BRAND_TAGLINE} Focused on speed, clean architecture, and conversion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-bold text-center hover:bg-zinc-200 transition-all">
              View Work
            </a>
            <a href={SOCIAL_LINKS.email} className="bg-zinc-900 text-white border border-zinc-800 px-8 py-4 rounded-full font-bold text-center hover:bg-zinc-800 transition-all">
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 bg-zinc-950 px-6 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-2">Featured Work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Projects</h2>
            <p className="text-zinc-500 mt-2 text-sm italic">Note: Click images with indicators to see more screenshots.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Core Stack</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Simple, effective tools for complex business problems.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:bg-zinc-900 transition-all">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 border border-white/5">
                  {service.icon === 'code' && <CodeIcon />}
                  {service.icon === 'zap' && <ZapIcon />}
                  {service.icon === 'refresh' && <RefreshIcon />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-2">Technical Proficiency</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Skills & Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((category) => (
              <div key={category.id} className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-px bg-emerald-500"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-zinc-900 text-zinc-300 rounded-lg text-sm border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tighter uppercase">Let's work together</h2>
              <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
                Ready to take your WordPress project to the next level? Drop me a line and let's build something exceptional.
              </p>
              <a 
                href={SOCIAL_LINKS.email} 
                className="inline-block bg-black text-white text-xl font-bold px-12 py-6 rounded-full hover:scale-105 transition-transform"
              >
                Send an Email
              </a>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {BRAND_NAME}. Built for performance.
          </p>
          <div className="flex gap-8 text-zinc-500 text-sm">
            <a href={SOCIAL_LINKS.email} className="hover:text-white transition-colors">Email Me</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
