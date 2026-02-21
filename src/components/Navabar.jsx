import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 shadow-xl shadow-purple-900/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent hover:animate-glow-pulse transition duration-300 cursor-pointer transform hover:scale-110">
          LB
        </h2>
        
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setActiveLink(link.name)}
              onMouseLeave={() => setActiveLink("")}
              className={`relative text-slate-300 font-medium transition-all duration-300 group ${
                activeLink === link.name ? "text-cyan-400" : "hover:text-cyan-300"
              }`}
            >
              <span className="relative inline-block">
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${
                  activeLink === link.name ? "w-full" : ""
                }`}></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
