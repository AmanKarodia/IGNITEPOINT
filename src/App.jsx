import './App.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurVision from './components/OurVision';
import AboutUs from './components/AboutUs';
import ClassroomRef from './components/ClassroomRef';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import WhyUs from './components/whyUs';
import CourseCat from './components/CourseCat';

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Enquiry" element={<EnquiryPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Courses" element={<CoursePage />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <WhyUs />
    <OurVision />
    <AboutUs />
    <ClassroomRef />
    <Footer />
  </>
);

export const EnquiryPage = () => (
  <>
    <Navbar />
    <Hero />
    <ApplyForm />
    <Footer />
  </>
);

export const ContactPage = () => (
  <>
    <Navbar />
    <Contact />
    <Footer />
  </>
);

export const CoursePage = () => (
  <>
    <Navbar />
    <Courses />
    <CourseCat />
    <Footer />
  </>
);

export default App;