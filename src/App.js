import './App.css';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Navbar from '../src/components/Navbar'
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
