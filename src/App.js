import React from 'react';
import '../src/App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={
            <div>
              <Home />
              <About />
              <Project />
              <Experience />
              <Services />
              <Blog />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
