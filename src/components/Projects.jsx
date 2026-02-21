import { useState, useEffect } from "react";

const projects = [
  {
    title: "ExpenseFlow",
    desc: "Advanced MERN expense tracking system with real-time analytics, budget forecasting, and intelligent categorization using ML algorithms.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js", "ML"],
    github: "https://github.com",
    live: "#",
    impact: "Helps users save 20% more"
  },
  {
    title: "Symbiomed",
    desc: "Enterprise microservice architecture integrating NAMASTE codes to ICD-11 via TM2 standards into existing EMR systems with 99.9% uptime.",
    tags: ["Node.js", "Docker", "AWS", "Healthcare"],
    github: "https://github.com",
    live: "#",
    impact: "50+ healthcare facilities"
  },
  {
    title: "FoodShare",
    desc: "Full-stack food redistribution platform connecting restaurants with NGOs, reducing food waste and serving 1000+ meals monthly.",
    tags: ["MERN", "Maps API", "Real-time", "Impact"],
    github: "https://github.com",
    live: "#",
    impact: "Zero waste solution"
  },
  {
    title: "AI Chat Assistant",
    desc: "Intelligent chatbot leveraging LLMs with context awareness, multi-language support, and seamless third-party integrations.",
    tags: ["React", "OpenAI API", "WebSocket", "NLP"],
    github: "https://github.com",
    live: "#",
    impact: "10K+ daily chats"
  },
  {
    title: "Cloud Dashboard",
    desc: "Real-time monitoring dashboard for cloud infrastructure with auto-scaling predictions and resource optimization recommendations.",
    tags: ["React", "AWS", "D3.js", "Analytics"],
    github: "https://github.com",
    live: "#",
    impact: "35% cost savings"
  },
  {
    title: "Mobile App Backend",
    desc: "Scalable Node.js backend serving 100K+ mobile users with real-time notifications, payment integration, and advanced security.",
    tags: ["Node.js", "Socket.io", "Stripe", "Security"],
    github: "https://github.com",
    live: "#",
    impact: "4.8/5 rating"
  }
];

const Projects = () => {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setAnimateElements(true);
  }, []);
  return (
    <section id="projects" className="py-20 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow-pulse">Featured Projects</span>
        </h2>
        <p className={`text-slate-400 text-center mb-12 text-lg transition-all duration-700 delay-100 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          A showcase of my best work and technical achievements
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 flex flex-col transform hover:scale-105 hover:-translate-y-2"
              style={{
                animation: animateElements ? `slideInUp 0.6s ease-out ${0.2 + i * 0.1}s both` : "none"
              }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">{p.title}</h3>
                <p className="text-xs text-cyan-400 font-semibold mt-2 group-hover:text-cyan-300 transition duration-300">⚡ {p.impact}</p>
              </div>

              <p className="text-slate-300 mb-4 grow text-sm leading-relaxed group-hover:text-slate-200 transition duration-300">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-purple-500/30 border border-purple-400/50 text-purple-200 px-3 py-1 rounded-full hover:bg-purple-500/70 hover:border-purple-300/70 hover:text-white transition-all duration-300 transform hover:scale-110">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-linear-to-r from-purple-500 to-cyan-500 hover:shadow-xl hover:shadow-purple-500/40 text-white font-bold py-2 rounded-lg transition-all duration-300 text-center text-sm transform hover:scale-105"
                >
                  Code
                </a>
                <a 
                  href={p.live} 
                  className="flex-1 border-2 border-slate-500 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 font-bold py-2 rounded-lg transition-all duration-300 text-center text-sm transform hover:scale-105"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          animateElements ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <a 
            href="https://github.com/Lakshika04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-linear-to-r from-purple-500 to-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
