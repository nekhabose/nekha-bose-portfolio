import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
