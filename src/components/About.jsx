import { useState, useEffect } from "react";

const About = () => {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setAnimateElements(true);
  }, []);

  const achievements = [
    "Built production-ready applications handling thousands of users",
    "Integrated AI solutions for healthcare and business optimization",
    "Designed and implemented microservice architectures",
    "Mentored junior developers and contributed to team growth"
  ];

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "∞", label: "Passion for Code" }
  ];

  return (
    <section id="about" className="py-20 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow-pulse">About Me</span>
        </h2>

        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${
          animateElements ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}>
          <div className="space-y-6">
            <p className={`text-lg text-slate-300 leading-relaxed transition-all duration-700 delay-300 hover:text-slate-100 group cursor-default ${"opacity-100 translate-y-0"}`}>
              I'm a passionate full-stack developer with a deep interest in creating scalable, user-centric applications. With expertise in the MERN stack, I've built several projects that demonstrate my commitment to clean code and innovative problem-solving.
            </p>

            <p className={`text-lg text-slate-300 leading-relaxed transition-all duration-700 delay-400 hover:text-slate-100 group cursor-default ${"opacity-100 translate-y-0"}`}>
              My journey in tech started with curiosity about how things work, which evolved into a professional pursuit of excellence. I'm particularly interested in microservices architecture, AI integration, and cloud-native development.
            </p>

            <p className={`text-lg text-slate-300 leading-relaxed transition-all duration-700 delay-500 hover:text-slate-100 group cursor-default ${"opacity-100 translate-y-0"}`}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or brainstorming the next big idea. I believe in continuous learning and pushing boundaries.
            </p>

            <div className={`pt-4 transition-all duration-700 delay-600 ${
              animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:animate-glow-pulse transition duration-300">⭐ Key Achievements:</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-all duration-300 transform hover:translate-x-2 group cursor-default"
                    style={{
                      animation: animateElements ? `slideInLeft 0.6s ease-out ${0.6 + idx * 0.1}s both` : "none"
                    }}
                  >
                    <span className="text-cyan-400 group-hover:scale-125 transition-transform duration-300 text-lg">✓</span>
                    <span className="group-hover:text-slate-100 transition duration-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
            animateElements ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="group bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/30 hover:border-cyan-500/70 cursor-pointer transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30"
                style={{
                  animation: animateElements ? `slideInUp 0.6s ease-out ${0.4 + idx * 0.1}s both` : "none"
                }}
              >
                <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:from-cyan-400 group-hover:to-purple-400 transition duration-300 transform group-hover:scale-110">{stat.value}</div>
                <p className="text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
