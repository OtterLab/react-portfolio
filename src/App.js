import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './Components/NavigationBar/Navbar';
import HomePage from './Components/Home/Home';
import AboutPage from './Components/About/About';
import SkillsPage from './Components/MySkills/Skills';
import ProjectsPage from './Components/Projects/Projects';
import ContactPage from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavigationBar/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/myskills" element={<SkillsPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
 
      {/* This is About page */}
      {/* This is Skills page */}
      {/* This is Projects page */}
      {/* This is Contact page */}
    </div>
  );
}

export default App;
