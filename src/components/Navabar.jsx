import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/30 shadow-xl shadow-purple-900/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">LB</h2>
        
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-transparent transition duration-300 font-medium hover:bg-linear-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
