const Skills = () => {
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

  return (
    <section id="skills" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-600/50 hover:bg-slate-600/80 border border-slate-500/50 hover:border-cyan-400/50 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-white">Leadership</h4>
              <p className="text-slate-300 text-sm">Team collaboration, mentoring, and project management</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-white">Communication</h4>
              <p className="text-slate-300 text-sm">Clear documentation, presentations, and stakeholder updates</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-white">Problem Solving</h4>
              <p className="text-slate-300 text-sm">Critical thinking, debugging, and innovative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
