import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { INFO } from './data/constants';

function App() {
  return (
    <Router basename="/belayneh-dev">
      <div className="min-h-screen bg-white">
        {/* Navbar will stay visible on all pages */}
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/belayneh-dev" element={<Navigate to="/" replace />} />
            <Route path="/belayneh-dev/" element={<Navigate to="/" replace />} />
            {/* Home Page: Shows Header and Skills */}
            <Route path="/" element={
              <>
                <Header />
                <Skills />
              </>
            } />
            
            {/* Individual Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="py-10 text-center text-slate-500 border-t mt-10">
          © {new Date().getFullYear()} {INFO.name} | {INFO.role}
        </footer>
      </div>
    </Router>
  );
}

export default App;