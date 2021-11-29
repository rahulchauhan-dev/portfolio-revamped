import './App.css';
import './bootstrap.min.css';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {


  return (


    <div id="main">
      <LandingPage />
      <About id="about-container" />
      <Skills />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
