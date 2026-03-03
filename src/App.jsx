import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './components/ProjectDetail';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
