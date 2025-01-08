import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import HierarchyLayout from './components/HierarchyLayout';
import CenterDeep from './pages/CenterDeep';
import CommandCanvas from './pages/CommandCanvas';
import CRC from './pages/CRC';
import MagiCode from './pages/MagiCode';
import CognitiveCompanion from './pages/CognitiveCompanion';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HierarchyLayout />} />
        <Route path="/centerdeep" element={<CenterDeep />} />
        <Route path="/commandcanvas" element={<CommandCanvas />} />
        <Route path="/crc" element={<CRC />} />
        <Route path="/magicode" element={<MagiCode />} />
        <Route path="/cognitivecompanion" element={<CognitiveCompanion />} />
      </Routes>
    </Router>
  );
};

export default App;
