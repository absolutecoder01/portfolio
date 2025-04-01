import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Element } from 'react-scroll';
import { AboutMe } from './components/AboutMe';
function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono">
      <Header />
      <main className="pt-20">
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="aboutme">
          <AboutMe />
        </Element>
        <Element name="stats">
          <Stats />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;