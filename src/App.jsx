import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Info from './Pages/Info';




function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/details" element={<Info />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
