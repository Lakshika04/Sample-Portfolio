import { useState, useEffect } from "react";

const Skills = () => {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setAnimateElements(true);
  }, []);

  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive Design", "State Management"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication", "Database Design"]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "Docker", "AWS", "Azure", "Vite", "Postman", "VS Code"]
    },
    {
      category: "AI & Advanced",
      icon: "🤖",
      skills: ["Machine Learning Basics", "LLM Integration", "Data Analysis", "Problem Solving", "System Design"]
    }
  ];

  const softSkills = [
    { title: "Leadership", desc: "Team collaboration, mentoring, and project management" },
    { title: "Communication", desc: "Clear documentation, presentations, and stakeholder updates" },
    { title: "Problem Solving", desc: "Critical thinking, debugging, and innovative solutions" }
  ];

  return (
    <section id="skills" className="py-20 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow-pulse">Technical Skills</span>
        </h2>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/80 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                animation: animateElements ? `slideInUp 0.6s ease-out ${0.3 + idx * 0.1}s both` : "none"
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">{category.icon}</span>
                <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition duration-300">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-600/50 hover:bg-slate-600/80 border border-slate-500/50 hover:border-cyan-400/70 text-slate-200 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-110 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 bg-linear-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 group transform hover:scale-105 ${"opacity-100 scale-100"}`}
          style={{
            animation: animateElements ? "scaleIn 0.6s ease-out 0.6s both" : "none"
          }}>
          <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition duration-300">🌟 Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group/item"
                style={{
                  animation: animateElements ? `slideInLeft 0.6s ease-out ${0.7 + idx * 0.1}s both` : "none"
                }}
              >
                <h4 className="font-bold mb-2 text-white group-hover/item:text-cyan-400 transition duration-300">{skill.title}</h4>
                <p className="text-slate-300 text-sm group-hover/item:text-slate-200 transition duration-300">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
