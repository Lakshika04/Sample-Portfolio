import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Lakshika04")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
        setAnimateElements(true);
      })
      .catch(() => {
        setLoading(false);
        setAnimateElements(true);
      });
  }, []);

  if (loading) return null;

  return (
    <section className="py-20 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow-pulse">GitHub Statistics</span>
        </h2>

        {data ? (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { value: data.public_repos, label: "Public Repositories" },
              { value: data.followers, label: "Followers" },
              { value: data.following, label: "Following" },
              { value: `${new Date().getFullYear() - new Date(data.created_at).getFullYear()}+`, label: "Years on GitHub" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="group bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/70 hover:bg-slate-700/80 transition-all duration-300 text-center cursor-pointer transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2"
                style={{
                  animation: animateElements ? `slideInUp 0.6s ease-out ${0.2 + idx * 0.1}s both` : "none"
                }}
              >
                <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:from-cyan-400 group-hover:to-purple-400 transition duration-300 transform group-hover:scale-110">
                  {stat.value}
                </div>
                <p className="text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className={`bg-linear-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:from-purple-500/20 hover:to-cyan-500/20 text-center group transition-all duration-300 transform hover:scale-105 ${
          animateElements ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
          style={{
            animation: animateElements ? "scaleIn 0.6s ease-out 0.4s both" : "none"
          }}
        >
          <p className="text-slate-300 mb-6 group-hover:text-slate-200 transition duration-300">
            Always open to collaborating on exciting projects and contributing to the open-source community.
          </p>
          <a 
            href="https://github.com/Lakshika04" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-linear-to-r from-purple-500 to-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Github;
