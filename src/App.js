import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { Home, Project, CaseStudy } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/project/:id" element={<Project />} />
        <Route path="/portfolio/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </Router>

  );
}

export default App;
