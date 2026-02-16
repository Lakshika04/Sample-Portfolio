import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Lakshika04")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">GitHub <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Statistics</span></h2>

        {data ? (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition duration-300 text-center cursor-pointer">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">{data.public_repos}</div>
              <p className="text-slate-300">Public Repositories</p>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition duration-300 text-center cursor-pointer">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">{data.followers}</div>
              <p className="text-slate-300">Followers</p>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition duration-300 text-center cursor-pointer">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">{data.following}</div>
              <p className="text-slate-300">Following</p>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition duration-300 text-center cursor-pointer">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">{new Date().getFullYear() - new Date(data.created_at).getFullYear()}+</div>
              <p className="text-slate-300">Years on GitHub</p>
            </div>
          </div>
        ) : null}

        <div className="bg-linear-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 text-center">
          <p className="text-slate-300 mb-6">
            Always open to collaborating on exciting projects and contributing to the open-source community.
          </p>
          <a 
            href="https://github.com/Lakshika04" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-linear-to-r from-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/30 px-8 py-3 rounded-xl font-semibold transition duration-300 transform hover:scale-105"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Github;
