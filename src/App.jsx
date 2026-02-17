import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Github from "./components/Github";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
