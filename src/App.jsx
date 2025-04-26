import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './components/LandingPage'; // ✅ Default import, no {}
import Navbar from './components/Navbar';
import DirectionPage from './Views/DirectionPage';
import PhotographyPage from './Views/PhotographyPage';
import PhotoProjectsPage from './Views/PhotoProjectsPage';
import ContactPage from './Views/ContactPage';
import AlbumView from './Views/AlbumView'; // ✅ Dynamic album view

import './App.css'; // Your styles (for .main-content etc.)

const Layout = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      {!isLanding && <Navbar />}
      <div className={!isLanding ? 'main-content' : ''}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/direction" element={<DirectionPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photo-projects/:albumId" element={<AlbumView />} />
          <Route path="/photo-projects" element={<PhotoProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
