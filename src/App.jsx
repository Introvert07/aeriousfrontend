import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css'; 

// Components
import Navbar from './components/Navbar'; // New extracted Navbar
import FloatingActions from './components/FloatingActions';
import HeroSection from './pages/HeroSection'; 
import AboutPage from './pages/Aboutpage';
import WhyChoosePage from './pages/WhyChoose';
import PopularCourses from './pages/PopularCourses';
import ProgramOverview from './pages/ProgramOverview';
import GalleryPage from './pages/GalleryPage';
import AeriousTestimonials from './pages/AeriousTestimonials';
import Footer from './components/Footer';

// Navlink Pages

import AboutusPage from './navlinks/AboutusPage';

import Courses from './navlinks/Courses/Courses';
import InstrumentRating from './navlinks/Courses/InstrumentRating';
import PrivatePilotLicense from './navlinks/Courses/PrivatePilotLicense';
import NightRating from './navlinks/Courses/NightRating';
import CommercialPilotLicense from './navlinks/Courses/CommercialPilotLicense';
import FlightInstructorCourse from './navlinks/Courses/FlightInstructorCourse';
import FlyingTrainingAbroad from './navlinks/Courses/FlyingTrainingAbroad';
import NavGallery from './navlinks/NavGallery';
import ContactPage from './navlinks/ContactPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <Navbar />

        {/* Removed AnimatePresence to fix the white screen/double click issue */}
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection /> 
              <section id="about" className="py-4">
                <AboutPage />
              </section>
              <WhyChoosePage />
              <section id="courses">
                <PopularCourses />
              </section>
              <ProgramOverview />
              <section id="gallery">
                <GalleryPage />
              </section>
              <section id="testimonials">
                <AeriousTestimonials />
              </section>
            </main>
          } />

                    <Route path="/about" element={<AboutusPage />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/instrument-rating" element={<InstrumentRating />} />
          <Route path="/courses/private-pilot" element={<PrivatePilotLicense />} />
          <Route path="/courses/night-rating" element={<NightRating />} />
          <Route path="/courses/commercial-pilot" element={<CommercialPilotLicense />} />
          <Route path="/courses/flight-instructor" element={<FlightInstructorCourse />} />
          <Route path="/flying-training-abroad" element={<FlyingTrainingAbroad />} />
          <Route path="/nav-gallery" element={<NavGallery />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;