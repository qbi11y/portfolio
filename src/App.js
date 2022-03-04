
import './App.scss';
import 'bulma/css/bulma.min.css';
import { Home, Project } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/project/:id" element={<Project />} />
      </Routes>
    </Router>

  );
}

export default App;
