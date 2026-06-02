import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="site-header">
          <div className="brand-wrap">
            <span className="brand-mark">GV</span>
            <div>
              <p className="brand-title">Goonk Vilaivanh</p>
              <p className="brand-subtitle">
                Photographer · Videographer · Storyteller
              </p>
            </div>
          </div>

          <nav className="site-nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>Based in Charlotte, NC • Available for travel and relocation</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
