const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center text-white pt-20 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-6 animate-fade-in relative z-10">
        <div className="mb-4">
          <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full bg-slate-700/50 border border-slate-600/50 backdrop-blur-xl text-cyan-300">
            ✨ Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Lakshika</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
          Full-Stack Developer • MERN Specialist • AI & Cloud Enthusiast
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Building innovative digital solutions that blend beautiful design with powerful functionality. Passionate about creating impactful web experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <a 
            href="#projects" 
            className="bg-linear-to-r from-purple-500 to-cyan-500 hover:shadow-xl hover:shadow-purple-500/30 px-8 py-3 rounded-xl font-semibold transition duration-300 transform hover:scale-105"
          >
            View My Work
          </a>

          <a 
            href="/resume.pdf" 
            download="Lakshika_Resume.pdf"
            className="border-2 border-slate-500 text-white hover:bg-slate-700/50 hover:border-cyan-400 backdrop-blur-sm px-8 py-3 rounded-xl font-semibold transition duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <a href="https://github.com/Lakshika04" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-2xl hover:scale-110">
            <span>💻</span>
          </a>
          <a href="https://www.linkedin.com/in/lakshika-bourai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-2xl hover:scale-110">
            <span>🔗</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-2xl hover:scale-110">
            <span>🐦</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
