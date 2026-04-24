import { ParticlesBackground } from "./components/ParticlesBackground/ParticlesBackground";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./components/shared.css";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* ── Fixed particle canvas (background layer) ── */}
      <div className="app-background" aria-hidden="true">
        <ParticlesBackground />
      </div>

      {/* ── All visible content (foreground layer) ── */}
      <div className="app-content">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
