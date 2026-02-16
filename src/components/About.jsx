const About = () => {
  return (
    <section id="about" className="py-20 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          About <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate full-stack developer with a deep interest in creating scalable, user-centric applications. With expertise in the MERN stack, I've built several projects that demonstrate my commitment to clean code and innovative problem-solving.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech started with curiosity about how things work, which evolved into a professional pursuit of excellence. I'm particularly interested in microservices architecture, AI integration, and cloud-native development.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or brainstorming the next big idea. I believe in continuous learning and pushing boundaries.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4 text-white">Key Achievements:</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  Built production-ready applications handling thousands of users
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  Integrated AI solutions for healthcare and business optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  Designed and implemented microservice architectures
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  Mentored junior developers and contributed to team growth
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl hover:bg-slate-700/50 transition duration-300 border border-slate-600/30 hover:border-cyan-500/50 cursor-pointer">
              <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">10+</div>
              <p className="text-slate-300">Projects Completed</p>
            </div>

            <div className="group bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl hover:bg-slate-700/50 transition duration-300 border border-slate-600/30 hover:border-cyan-500/50 cursor-pointer">
              <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">3+</div>
              <p className="text-slate-300">Years Experience</p>
            </div>

            <div className="group bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl hover:bg-slate-700/50 transition duration-300 border border-slate-600/30 hover:border-cyan-500/50 cursor-pointer">
              <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-slate-300">Client Satisfaction</p>
            </div>

            <div className="group bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl hover:bg-slate-700/50 transition duration-300 border border-slate-600/30 hover:border-cyan-500/50 cursor-pointer">
              <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">∞</div>
              <p className="text-slate-300">Passion for Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
