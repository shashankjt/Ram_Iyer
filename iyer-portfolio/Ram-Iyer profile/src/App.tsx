import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <HeroSection />
      <AboutMe />
      <Contact />
      <Projects />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;