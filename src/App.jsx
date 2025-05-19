import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import DirectionPage from './Views/DirectionPage';
import PhotographyPage from './Views/PhotographyPage';
import PhotoProjectsPage from './Views/PhotoProjectsPage';
import ContactPage from './Views/ContactPage';
import AlbumView from './Views/AlbumView';

import './App.css';

const Layout = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  // 🔍 Google Analytics Page View Tracking
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
      });
    }
  }, [location]);

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
